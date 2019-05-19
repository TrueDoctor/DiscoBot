namespace Firebase.Database.Streaming
{
    using System;
    using System.Diagnostics;
    using System.Linq;
    using System.Net.Http;
    using System.Net.Http.Headers;
    using System.Threading;
    using System.Threading.Tasks;
    using Query;
    using Newtonsoft.Json.Linq;
    using System.Net;

    /// <summary>
    /// The firebase subscription.
    /// </summary>
    /// <typeparam name="T"> Type of object to be streaming back to the called. </typeparam>
    internal class FirebaseSubscription<T> : IDisposable
    {
        private readonly CancellationTokenSource cancel;
        private readonly IObserver<FirebaseEvent<T>> observer;
        private readonly IFirebaseQuery query;
        private readonly FirebaseCache<T> cache;
        private readonly string elementRoot;
        private readonly FirebaseClient client;

        private static HttpClient http;

        static FirebaseSubscription()
        {
            var handler = new HttpClientHandler
            {
                AllowAutoRedirect = true,
                MaxAutomaticRedirections = 10,
                CookieContainer = new CookieContainer()
            };

            var httpClient = new HttpClient(handler, true);

            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("text/event-stream"));

            http = httpClient;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FirebaseSubscription{T}"/> class.
        /// </summary>
        /// <param name="observer"> The observer.  </param>
        /// <param name="query"> The query.  </param>
        /// <param name="cache"> The cache. </param>
        public FirebaseSubscription(IObserver<FirebaseEvent<T>> observer, IFirebaseQuery query, string elementRoot,
            FirebaseCache<T> cache)
        {
            this.observer = observer;
            this.query = query;
            this.elementRoot = elementRoot;
            cancel = new CancellationTokenSource();
            this.cache = cache;
            client = query.Client;
        }

        public event EventHandler<ExceptionEventArgs<FirebaseException>> ExceptionThrown;

        public void Dispose()
        {
            cancel.Cancel();
        }

        public IDisposable Run()
        {
            Task.Run(() => ReceiveThread());

            return this;
        }

        private async void ReceiveThread()
        {
            while (true)
            {
                var url = string.Empty;
                var line = string.Empty;
                var statusCode = HttpStatusCode.OK;

                try
                {
                    cancel.Token.ThrowIfCancellationRequested();

                    // initialize network connection
                    url = await query.BuildUrlAsync().ConfigureAwait(false);
                    var request = new HttpRequestMessage(HttpMethod.Get, url);
                    var serverEvent = FirebaseServerEventType.KeepAlive;

                    var client = GetHttpClient();
                    var response = await client
                        .SendAsync(request, HttpCompletionOption.ResponseHeadersRead, cancel.Token)
                        .ConfigureAwait(false);

                    statusCode = response.StatusCode;
                    response.EnsureSuccessStatusCode();

                    using (var stream = await response.Content.ReadAsStreamAsync().ConfigureAwait(false))
                    using (var reader = this.client.Options.SubscriptionStreamReaderFactory(stream))
                    {
                        while (true)
                        {
                            cancel.Token.ThrowIfCancellationRequested();

                            line = reader.ReadLine()?.Trim();

                            if (string.IsNullOrWhiteSpace(line)) continue;

                            var tuple = line.Split(new[] {':'}, 2, StringSplitOptions.RemoveEmptyEntries)
                                .Select(s => s.Trim()).ToArray();

                            switch (tuple[0].ToLower())
                            {
                                case "event":
                                    serverEvent = ParseServerEvent(serverEvent, tuple[1]);
                                    break;
                                case "data":
                                    ProcessServerData(url, serverEvent, tuple[1]);
                                    break;
                            }

                            if (serverEvent == FirebaseServerEventType.AuthRevoked)
                                // auth token no longer valid, reconnect
                                break;
                        }
                    }
                }
                catch (OperationCanceledException)
                {
                    break;
                }
                catch (Exception ex) when (statusCode != HttpStatusCode.OK)
                {
                    observer.OnError(new FirebaseException(url, string.Empty, line, statusCode, ex));
                    Dispose();
                    break;
                }
                catch (Exception ex)
                {
                    ExceptionThrown?.Invoke(this,
                        new ExceptionEventArgs<FirebaseException>(new FirebaseException(url, string.Empty, line,
                            statusCode, ex)));

                    await Task.Delay(2000).ConfigureAwait(false);
                }
            }
        }

        private FirebaseServerEventType ParseServerEvent(FirebaseServerEventType serverEvent, string eventName)
        {
            switch (eventName)
            {
                case "put":
                    serverEvent = FirebaseServerEventType.Put;
                    break;
                case "patch":
                    serverEvent = FirebaseServerEventType.Patch;
                    break;
                case "keep-alive":
                    serverEvent = FirebaseServerEventType.KeepAlive;
                    break;
                case "cancel":
                    serverEvent = FirebaseServerEventType.Cancel;
                    break;
                case "auth_revoked":
                    serverEvent = FirebaseServerEventType.AuthRevoked;
                    break;
            }

            return serverEvent;
        }

        private void ProcessServerData(string url, FirebaseServerEventType serverEvent, string serverData)
        {
            switch (serverEvent)
            {
                case FirebaseServerEventType.Put:
                case FirebaseServerEventType.Patch:
                    var result = JObject.Parse(serverData);
                    var path = result["path"].ToString();
                    var data = result["data"].ToString();

                    // If an elementRoot parameter is provided, but it's not in the cache, it was already deleted. So we can return an empty object.
                    if (string.IsNullOrWhiteSpace(elementRoot) || !cache.Contains(elementRoot))
                        if (path == "/" && data == string.Empty)
                        {
                            observer.OnNext(FirebaseEvent<T>.Empty(FirebaseEventSource.OnlineStream));
                            return;
                        }

                    var eventType = string.IsNullOrWhiteSpace(data)
                        ? FirebaseEventType.Delete
                        : FirebaseEventType.InsertOrUpdate;

                    var items = cache.PushData(elementRoot + path, data);

                    foreach (var i in items.ToList())
                        observer.OnNext(new FirebaseEvent<T>(i.Key, i.Object, eventType,
                            FirebaseEventSource.OnlineStream));

                    break;
                case FirebaseServerEventType.KeepAlive:
                    break;
                case FirebaseServerEventType.Cancel:
                    observer.OnError(new FirebaseException(url, string.Empty, serverData, HttpStatusCode.Unauthorized));
                    Dispose();
                    break;
            }
        }

        private HttpClient GetHttpClient()
        {
            return http;
        }
    }
}