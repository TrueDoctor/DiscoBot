!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function r(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var s=function(){return(s=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function i(t,e,n,o){return new(n||(n=Promise))(function(r,s){function i(t){try{c(o.next(t))}catch(t){s(t)}}function a(t){try{c(o.throw(t))}catch(t){s(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(i,a)}c((o=o.apply(t,e||[])).next())})}function a(t,e){var n,o,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&s[0]?o.return:s[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;switch(o=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],o=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}var c,u=function(t){function e(e,n){var o=this,r=this.constructor.prototype;return(o=t.call(this,e)||this).statusCode=n,o.__proto__=r,o}return r(e,t),e}(Error),l=function(t){function e(e){var n=this.constructor;void 0===e&&(e="A timeout occurred.");var o=this,r=n.prototype;return(o=t.call(this,e)||this).__proto__=r,o}return r(e,t),e}(Error);!function(t){t[t.Trace=0]="Trace",t[t.Debug=1]="Debug",t[t.Information=2]="Information",t[t.Warning=3]="Warning",t[t.Error=4]="Error",t[t.Critical=5]="Critical",t[t.None=6]="None"}(c||(c={}));var h,p=function(){return function(t,e,n){this.statusCode=t,this.statusText=e,this.content=n}}(),g=function(t){function e(e){var n=t.call(this)||this;return n.logger=e,n}return r(e,t),e.prototype.send=function(t){var e=this;return new Promise(function(n,o){var r=new XMLHttpRequest;r.open(t.method,t.url,!0),r.withCredentials=!0,r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),t.headers&&Object.keys(t.headers).forEach(function(e){return r.setRequestHeader(e,t.headers[e])}),t.responseType&&(r.responseType=t.responseType),t.abortSignal&&(t.abortSignal.onabort=function(){r.abort()}),t.timeout&&(r.timeout=t.timeout),r.onload=function(){t.abortSignal&&(t.abortSignal.onabort=null),r.status>=200&&r.status<300?n(new p(r.status,r.statusText,r.response||r.responseText)):o(new u(r.statusText,r.status))},r.onerror=function(){e.logger.log(c.Warning,"Error from HTTP request. "+r.status+": "+r.statusText),o(new u(r.statusText,r.status))},r.ontimeout=function(){e.logger.log(c.Warning,"Timeout from HTTP request."),o(new l)},r.send(t.content||"")})},e}(function(){function t(){}return t.prototype.get=function(t,e){return this.send(s({},e,{method:"GET",url:t}))},t.prototype.post=function(t,e){return this.send(s({},e,{method:"POST",url:t}))},t.prototype.delete=function(t,e){return this.send(s({},e,{method:"DELETE",url:t}))},t}()),f=function(){function t(){}return t.write=function(e){return""+e+t.RecordSeparator},t.parse=function(e){if(e[e.length-1]!==t.RecordSeparator)throw new Error("Message is incomplete.");var n=e.split(t.RecordSeparator);return n.pop(),n},t.RecordSeparatorCode=30,t.RecordSeparator=String.fromCharCode(t.RecordSeparatorCode),t}(),d=function(){function t(){}return t.prototype.writeHandshakeRequest=function(t){return f.write(JSON.stringify(t))},t.prototype.parseHandshakeResponse=function(t){var e,n;if(t instanceof ArrayBuffer){var o=new Uint8Array(t);if(-1===(s=o.indexOf(f.RecordSeparatorCode)))throw new Error("Message is incomplete.");var r=s+1;e=String.fromCharCode.apply(null,o.slice(0,r)),n=o.byteLength>r?o.slice(r).buffer:null}else{var s,i=t;if(-1===(s=i.indexOf(f.RecordSeparator)))throw new Error("Message is incomplete.");r=s+1;e=i.substring(0,r),n=i.length>r?i.substring(r):null}var a=f.parse(e);return[n,JSON.parse(a[0])]},t}();!function(t){t[t.Invocation=1]="Invocation",t[t.StreamItem=2]="StreamItem",t[t.Completion=3]="Completion",t[t.StreamInvocation=4]="StreamInvocation",t[t.CancelInvocation=5]="CancelInvocation",t[t.Ping=6]="Ping",t[t.Close=7]="Close"}(h||(h={}));var v=function(){function t(){}return t.prototype.log=function(t,e){},t.instance=new t,t}(),m=function(){function t(){}return t.isRequired=function(t,e){if(null===t||void 0===t)throw new Error("The '"+e+"' argument is required.")},t.isIn=function(t,e,n){if(!(t in e))throw new Error("Unknown "+n+" value: "+t+".")},t}();function y(t,e){var n=null;return t instanceof ArrayBuffer?(n="Binary data of length "+t.byteLength,e&&(n+=". Content: '"+function(t){var e="";return new Uint8Array(t).forEach(function(t){e+="0x"+(t<16?"0":"")+t.toString(16)+" "}),e.substr(0,e.length-1)}(t)+"'")):"string"==typeof t&&(n="String data of length "+t.length,e&&(n+=". Content: '"+t+"'.")),n}function b(t,e,n,o,r,s,u){return i(this,void 0,void 0,function(){var i,l,h,p;return a(this,function(a){switch(a.label){case 0:return[4,r()];case 1:return(l=a.sent())&&((p={}).Authorization="Bearer "+l,i=p),t.log(c.Trace,"("+e+" transport) sending data. "+y(s,u)+"."),[4,n.post(o,{content:s,headers:i})];case 2:return h=a.sent(),t.log(c.Trace,"("+e+" transport) request complete. Response status: "+h.statusCode+"."),[2]}})})}var w,S,k=function(){function t(t){this.observers=[],this.cancelCallback=t}return t.prototype.next=function(t){for(var e=0,n=this.observers;e<n.length;e++){n[e].next(t)}},t.prototype.error=function(t){for(var e=0,n=this.observers;e<n.length;e++){var o=n[e];o.error&&o.error(t)}},t.prototype.complete=function(){for(var t=0,e=this.observers;t<e.length;t++){var n=e[t];n.complete&&n.complete()}},t.prototype.subscribe=function(t){return this.observers.push(t),new T(this,t)},t}(),T=function(){function t(t,e){this.subject=t,this.observer=e}return t.prototype.dispose=function(){var t=this.subject.observers.indexOf(this.observer);t>-1&&this.subject.observers.splice(t,1),0===this.subject.observers.length&&this.subject.cancelCallback().catch(function(t){})},t}(),C=function(){function t(t){this.minimumLogLevel=t}return t.prototype.log=function(t,e){if(t>=this.minimumLogLevel)switch(t){case c.Critical:case c.Error:console.error(c[t]+": "+e);break;case c.Warning:console.warn(c[t]+": "+e);break;case c.Information:console.info(c[t]+": "+e);break;default:console.log(c[t]+": "+e)}},t}(),E=3e4,I=function(){function t(t,e,n){var o=this;m.isRequired(t,"connection"),m.isRequired(e,"logger"),m.isRequired(n,"protocol"),this.serverTimeoutInMilliseconds=E,this.logger=e,this.protocol=n,this.connection=t,this.handshakeProtocol=new d,this.connection.onreceive=function(t){return o.processIncomingData(t)},this.connection.onclose=function(t){return o.connectionClosed(t)},this.callbacks={},this.methods={},this.closedCallbacks=[],this.id=0}return t.create=function(e,n,o){return new t(e,n,o)},t.prototype.start=function(){return i(this,void 0,void 0,function(){var t;return a(this,function(e){switch(e.label){case 0:return t={protocol:this.protocol.name,version:this.protocol.version},this.logger.log(c.Debug,"Starting HubConnection."),this.receivedHandshakeResponse=!1,[4,this.connection.start(this.protocol.transferFormat)];case 1:return e.sent(),this.logger.log(c.Debug,"Sending handshake request."),[4,this.connection.send(this.handshakeProtocol.writeHandshakeRequest(t))];case 2:return e.sent(),this.logger.log(c.Information,"Using HubProtocol '"+this.protocol.name+"'."),this.cleanupTimeout(),this.configureTimeout(),[2]}})})},t.prototype.stop=function(){return this.logger.log(c.Debug,"Stopping HubConnection."),this.cleanupTimeout(),this.connection.stop()},t.prototype.stream=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r=this.createStreamInvocation(t,n),s=new k(function(){var t=e.createCancelInvocation(r.invocationId),n=e.protocol.writeMessage(t);return delete e.callbacks[r.invocationId],e.connection.send(n)});this.callbacks[r.invocationId]=function(t,e){e?s.error(e):t.type===h.Completion?t.error?s.error(new Error(t.error)):s.complete():s.next(t.item)};var i=this.protocol.writeMessage(r);return this.connection.send(i).catch(function(t){s.error(t),delete e.callbacks[r.invocationId]}),s},t.prototype.send=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var o=this.createInvocation(t,e,!0),r=this.protocol.writeMessage(o);return this.connection.send(r)},t.prototype.invoke=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r=this.createInvocation(t,n,!1);return new Promise(function(t,n){e.callbacks[r.invocationId]=function(e,o){if(o)n(o);else if(e.type===h.Completion){var r=e;r.error?n(new Error(r.error)):t(r.result)}else n(new Error("Unexpected message type: "+e.type))};var o=e.protocol.writeMessage(r);e.connection.send(o).catch(function(t){n(t),delete e.callbacks[r.invocationId]})})},t.prototype.on=function(t,e){t&&e&&(t=t.toLowerCase(),this.methods[t]||(this.methods[t]=[]),-1===this.methods[t].indexOf(e)&&this.methods[t].push(e))},t.prototype.off=function(t,e){if(t){t=t.toLowerCase();var n=this.methods[t];if(n)if(e){var o=n.indexOf(e);-1!==o&&(n.splice(o,1),0===n.length&&delete this.methods[t])}else delete this.methods[t]}},t.prototype.onclose=function(t){t&&this.closedCallbacks.push(t)},t.prototype.processIncomingData=function(t){if(this.cleanupTimeout(),this.receivedHandshakeResponse||(t=this.processHandshakeResponse(t),this.receivedHandshakeResponse=!0),t)for(var e=0,n=this.protocol.parseMessages(t,this.logger);e<n.length;e++){var o=n[e];switch(o.type){case h.Invocation:this.invokeClientMethod(o);break;case h.StreamItem:case h.Completion:var r=this.callbacks[o.invocationId];null!=r&&(o.type===h.Completion&&delete this.callbacks[o.invocationId],r(o));break;case h.Ping:break;case h.Close:this.logger.log(c.Information,"Close message received from server."),this.connection.stop(o.error?new Error("Server returned an error on close: "+o.error):null);break;default:this.logger.log(c.Warning,"Invalid message type: "+o.type)}}this.configureTimeout()},t.prototype.processHandshakeResponse=function(t){var e,n,o;try{n=(o=this.handshakeProtocol.parseHandshakeResponse(t))[0],e=o[1]}catch(t){var r="Error parsing handshake response: "+t;this.logger.log(c.Error,r);var s=new Error(r);throw this.connection.stop(s),s}if(e.error){r="Server returned handshake error: "+e.error;this.logger.log(c.Error,r),this.connection.stop(new Error(r))}else this.logger.log(c.Debug,"Server handshake complete.");return n},t.prototype.configureTimeout=function(){var t=this;this.connection.features&&this.connection.features.inherentKeepAlive||(this.timeoutHandle=setTimeout(function(){return t.serverTimeout()},this.serverTimeoutInMilliseconds))},t.prototype.serverTimeout=function(){this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))},t.prototype.invokeClientMethod=function(t){var e=this,n=this.methods[t.target.toLowerCase()];if(n){if(n.forEach(function(n){return n.apply(e,t.arguments)}),t.invocationId){var o="Server requested a response, which is not supported in this version of the client.";this.logger.log(c.Error,o),this.connection.stop(new Error(o))}}else this.logger.log(c.Warning,"No client method with the name '"+t.target+"' found.")},t.prototype.connectionClosed=function(t){var e=this,n=this.callbacks;this.callbacks={},Object.keys(n).forEach(function(e){(0,n[e])(void 0,t||new Error("Invocation canceled due to connection being closed."))}),this.cleanupTimeout(),this.closedCallbacks.forEach(function(n){return n.apply(e,[t])})},t.prototype.cleanupTimeout=function(){this.timeoutHandle&&clearTimeout(this.timeoutHandle)},t.prototype.createInvocation=function(t,e,n){if(n)return{arguments:e,target:t,type:h.Invocation};var o=this.id;return this.id++,{arguments:e,invocationId:o.toString(),target:t,type:h.Invocation}},t.prototype.createStreamInvocation=function(t,e){var n=this.id;return this.id++,{arguments:e,invocationId:n.toString(),target:t,type:h.StreamInvocation}},t.prototype.createCancelInvocation=function(t){return{invocationId:t,type:h.CancelInvocation}},t}();!function(t){t[t.None=0]="None",t[t.WebSockets=1]="WebSockets",t[t.ServerSentEvents=2]="ServerSentEvents",t[t.LongPolling=4]="LongPolling"}(w||(w={})),function(t){t[t.Text=1]="Text",t[t.Binary=2]="Binary"}(S||(S={}));var P=function(){function t(){this.isAborted=!1}return t.prototype.abort=function(){this.isAborted||(this.isAborted=!0,this.onabort&&this.onabort())},Object.defineProperty(t.prototype,"signal",{get:function(){return this},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"aborted",{get:function(){return this.isAborted},enumerable:!0,configurable:!0}),t}(),L=5e3,x=function(){function t(t,e,n,o,r){this.httpClient=t,this.accessTokenFactory=e||function(){return null},this.logger=n,this.pollAbort=new P,this.logMessageContent=o,this.shutdownTimeout=r||L}return Object.defineProperty(t.prototype,"pollAborted",{get:function(){return this.pollAbort.aborted},enumerable:!0,configurable:!0}),t.prototype.connect=function(t,e){return i(this,void 0,void 0,function(){var n,o,r,s,i;return a(this,function(a){switch(a.label){case 0:if(m.isRequired(t,"url"),m.isRequired(e,"transferFormat"),m.isIn(e,S,"transferFormat"),this.url=t,this.logger.log(c.Trace,"(LongPolling transport) Connecting"),e===S.Binary&&"string"!=typeof(new XMLHttpRequest).responseType)throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");return n={abortSignal:this.pollAbort.signal,headers:{},timeout:9e4},e===S.Binary&&(n.responseType="arraybuffer"),[4,this.accessTokenFactory()];case 1:return o=a.sent(),this.updateHeaderToken(n,o),s=t+"&_="+Date.now(),this.logger.log(c.Trace,"(LongPolling transport) polling: "+s),[4,this.httpClient.get(s,n)];case 2:return 200!==(i=a.sent()).statusCode?(this.logger.log(c.Error,"(LongPolling transport) Unexpected response code: "+i.statusCode),r=new u(i.statusText,i.statusCode),this.running=!1):this.running=!0,this.poll(this.url,n,r),[2,Promise.resolve()]}})})},t.prototype.updateHeaderToken=function(t,e){e?t.headers.Authorization="Bearer "+e:t.headers.Authorization&&delete t.headers.Authorization},t.prototype.poll=function(t,e,n){return i(this,void 0,void 0,function(){var o,r,s,i;return a(this,function(a){switch(a.label){case 0:a.trys.push([0,,8,9]),a.label=1;case 1:return this.running?[4,this.accessTokenFactory()]:[3,7];case 2:o=a.sent(),this.updateHeaderToken(e,o),a.label=3;case 3:return a.trys.push([3,5,,6]),r=t+"&_="+Date.now(),this.logger.log(c.Trace,"(LongPolling transport) polling: "+r),[4,this.httpClient.get(r,e)];case 4:return 204===(s=a.sent()).statusCode?(this.logger.log(c.Information,"(LongPolling transport) Poll terminated by server"),this.running=!1):200!==s.statusCode?(this.logger.log(c.Error,"(LongPolling transport) Unexpected response code: "+s.statusCode),n=new u(s.statusText,s.statusCode),this.running=!1):s.content?(this.logger.log(c.Trace,"(LongPolling transport) data received. "+y(s.content,this.logMessageContent)),this.onreceive&&this.onreceive(s.content)):this.logger.log(c.Trace,"(LongPolling transport) Poll timed out, reissuing."),[3,6];case 5:return i=a.sent(),this.running?i instanceof l?this.logger.log(c.Trace,"(LongPolling transport) Poll timed out, reissuing."):(n=i,this.running=!1):this.logger.log(c.Trace,"(LongPolling transport) Poll errored after shutdown: "+i.message),[3,6];case 6:return[3,1];case 7:return[3,9];case 8:return this.stopped=!0,this.shutdownTimer&&clearTimeout(this.shutdownTimer),this.onclose&&(this.logger.log(c.Trace,"(LongPolling transport) Firing onclose event. Error: "+(n||"<undefined>")),this.onclose(n)),this.logger.log(c.Trace,"(LongPolling transport) Transport finished."),[7];case 9:return[2]}})})},t.prototype.send=function(t){return i(this,void 0,void 0,function(){return a(this,function(e){return this.running?[2,b(this.logger,"LongPolling",this.httpClient,this.url,this.accessTokenFactory,t,this.logMessageContent)]:[2,Promise.reject(new Error("Cannot send until the transport is connected"))]})})},t.prototype.stop=function(){return i(this,void 0,void 0,function(){var t,e,n=this;return a(this,function(o){switch(o.label){case 0:return o.trys.push([0,,3,4]),this.running=!1,this.logger.log(c.Trace,"(LongPolling transport) sending DELETE request to "+this.url+"."),t={headers:{}},[4,this.accessTokenFactory()];case 1:return e=o.sent(),this.updateHeaderToken(t,e),[4,this.httpClient.delete(this.url,t)];case 2:return o.sent(),this.logger.log(c.Trace,"(LongPolling transport) DELETE request accepted."),[3,4];case 3:return this.stopped||(this.shutdownTimer=setTimeout(function(){n.logger.log(c.Warning,"(LongPolling transport) server did not terminate after DELETE request, canceling poll."),n.pollAbort.abort()},this.shutdownTimeout)),[7];case 4:return[2]}})})},t}(),R=function(){function t(t,e,n,o){this.httpClient=t,this.accessTokenFactory=e||function(){return null},this.logger=n,this.logMessageContent=o}return t.prototype.connect=function(t,e){return i(this,void 0,void 0,function(){var n,o=this;return a(this,function(r){switch(r.label){case 0:if(m.isRequired(t,"url"),m.isRequired(e,"transferFormat"),m.isIn(e,S,"transferFormat"),"undefined"==typeof EventSource)throw new Error("'EventSource' is not supported in your environment.");return this.logger.log(c.Trace,"(SSE transport) Connecting"),[4,this.accessTokenFactory()];case 1:return(n=r.sent())&&(t+=(t.indexOf("?")<0?"?":"&")+"access_token="+encodeURIComponent(n)),this.url=t,[2,new Promise(function(n,r){var s=!1;e!==S.Text&&r(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));var i=new EventSource(t,{withCredentials:!0});try{i.onmessage=function(t){if(o.onreceive)try{o.logger.log(c.Trace,"(SSE transport) data received. "+y(t.data,o.logMessageContent)+"."),o.onreceive(t.data)}catch(t){return void(o.onclose&&o.onclose(t))}},i.onerror=function(t){var e=new Error(t.message||"Error occurred");s?o.close(e):r(e)},i.onopen=function(){o.logger.log(c.Information,"SSE connected to "+o.url),o.eventSource=i,s=!0,n()}}catch(t){return Promise.reject(t)}})]}})})},t.prototype.send=function(t){return i(this,void 0,void 0,function(){return a(this,function(e){return this.eventSource?[2,b(this.logger,"SSE",this.httpClient,this.url,this.accessTokenFactory,t,this.logMessageContent)]:[2,Promise.reject(new Error("Cannot send until the transport is connected"))]})})},t.prototype.stop=function(){return this.close(),Promise.resolve()},t.prototype.close=function(t){this.eventSource&&(this.eventSource.close(),this.eventSource=null,this.onclose&&this.onclose(t))},t}(),M=function(){function t(t,e,n){this.logger=e,this.accessTokenFactory=t||function(){return null},this.logMessageContent=n}return t.prototype.connect=function(t,e){return i(this,void 0,void 0,function(){var n,o=this;return a(this,function(r){switch(r.label){case 0:if(m.isRequired(t,"url"),m.isRequired(e,"transferFormat"),m.isIn(e,S,"transferFormat"),"undefined"==typeof WebSocket)throw new Error("'WebSocket' is not supported in your environment.");return this.logger.log(c.Trace,"(WebSockets transport) Connecting"),[4,this.accessTokenFactory()];case 1:return(n=r.sent())&&(t+=(t.indexOf("?")<0?"?":"&")+"access_token="+encodeURIComponent(n)),[2,new Promise(function(n,r){t=t.replace(/^http/,"ws");var s=new WebSocket(t);e===S.Binary&&(s.binaryType="arraybuffer"),s.onopen=function(e){o.logger.log(c.Information,"WebSocket connected to "+t),o.webSocket=s,n()},s.onerror=function(t){r(t.error)},s.onmessage=function(t){o.logger.log(c.Trace,"(WebSockets transport) data received. "+y(t.data,o.logMessageContent)+"."),o.onreceive&&o.onreceive(t.data)},s.onclose=function(t){o.logger.log(c.Trace,"(WebSockets transport) socket closed."),o.onclose&&(!1===t.wasClean||1e3!==t.code?o.onclose(new Error("Websocket closed with status code: "+t.code+" ("+t.reason+")")):o.onclose())}})]}})})},t.prototype.send=function(t){return this.webSocket&&this.webSocket.readyState===WebSocket.OPEN?(this.logger.log(c.Trace,"(WebSockets transport) sending data. "+y(t,this.logMessageContent)+"."),this.webSocket.send(t),Promise.resolve()):Promise.reject("WebSocket is not in the OPEN state")},t.prototype.stop=function(){return this.webSocket&&(this.webSocket.close(),this.webSocket=null),Promise.resolve()},t}(),O=function(){function t(t,e){void 0===e&&(e={}),this.features={},m.isRequired(t,"url"),this.logger=function(t){return void 0===t?new C(c.Information):null===t?v.instance:t.log?t:new C(t)}(e.logger),this.baseUrl=this.resolveUrl(t),(e=e||{}).accessTokenFactory=e.accessTokenFactory||function(){return null},e.logMessageContent=e.logMessageContent||!1,this.httpClient=e.httpClient||new g(this.logger),this.connectionState=2,this.options=e}return t.prototype.start=function(t){return t=t||S.Binary,m.isIn(t,S,"transferFormat"),this.logger.log(c.Debug,"Starting connection with transfer format '"+S[t]+"'."),2!==this.connectionState?Promise.reject(new Error("Cannot start a connection that is not in the 'Disconnected' state.")):(this.connectionState=0,this.startPromise=this.startInternal(t),this.startPromise)},t.prototype.send=function(t){if(1!==this.connectionState)throw new Error("Cannot send data if the connection is not in the 'Connected' State.");return this.transport.send(t)},t.prototype.stop=function(t){return i(this,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:this.connectionState=2,e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.startPromise];case 2:return e.sent(),[3,4];case 3:return e.sent(),[3,4];case 4:return this.transport?(this.stopError=t,[4,this.transport.stop()]):[3,6];case 5:e.sent(),this.transport=null,e.label=6;case 6:return[2]}})})},t.prototype.startInternal=function(t){return i(this,void 0,void 0,function(){var e,n,o,r,s,i,u,l=this;return a(this,function(h){switch(h.label){case 0:e=this.baseUrl,this.accessTokenFactory=this.options.accessTokenFactory,h.label=1;case 1:return h.trys.push([1,12,,13]),this.options.skipNegotiation?this.options.transport!==w.WebSockets?[3,3]:(this.transport=this.constructTransport(w.WebSockets),[4,this.transport.connect(e,t)]):[3,5];case 2:return h.sent(),[3,4];case 3:throw Error("Negotiation can only be skipped when using the WebSocket transport directly.");case 4:return[3,11];case 5:n=null,o=0,r=function(){var t;return a(this,function(r){switch(r.label){case 0:return[4,s.getNegotiationResponse(e)];case 1:return n=r.sent(),2===s.connectionState?[2,{value:void 0}]:(n.url&&(e=n.url),n.accessToken&&(t=n.accessToken,s.accessTokenFactory=function(){return t}),o++,[2])}})},s=this,h.label=6;case 6:return[5,r()];case 7:if("object"==typeof(i=h.sent()))return[2,i.value];h.label=8;case 8:if(n.url&&o<100)return[3,6];h.label=9;case 9:if(100===o&&n.url)throw Error("Negotiate redirection limit exceeded.");return[4,this.createTransport(e,this.options.transport,n,t)];case 10:h.sent(),h.label=11;case 11:return this.transport instanceof x&&(this.features.inherentKeepAlive=!0),this.transport.onreceive=this.onreceive,this.transport.onclose=function(t){return l.stopConnection(t)},this.changeState(0,1),[3,13];case 12:throw u=h.sent(),this.logger.log(c.Error,"Failed to start the connection: "+u),this.connectionState=2,this.transport=null,u;case 13:return[2]}})})},t.prototype.getNegotiationResponse=function(t){return i(this,void 0,void 0,function(){var e,n,o,r,s,i;return a(this,function(a){switch(a.label){case 0:return[4,this.accessTokenFactory()];case 1:(e=a.sent())&&((i={}).Authorization="Bearer "+e,n=i),o=this.resolveNegotiateUrl(t),this.logger.log(c.Debug,"Sending negotiation request: "+o),a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this.httpClient.post(o,{content:"",headers:n})];case 3:if(200!==(r=a.sent()).statusCode)throw Error("Unexpected status code returned from negotiate "+r.statusCode);return[2,JSON.parse(r.content)];case 4:throw s=a.sent(),this.logger.log(c.Error,"Failed to complete negotiation with the server: "+s),s;case 5:return[2]}})})},t.prototype.createConnectUrl=function(t,e){return t+(-1===t.indexOf("?")?"?":"&")+"id="+e},t.prototype.createTransport=function(t,e,n,o){return i(this,void 0,void 0,function(){var r,s,i,u,l,h,p;return a(this,function(a){switch(a.label){case 0:return r=this.createConnectUrl(t,n.connectionId),this.isITransport(e)?(this.logger.log(c.Debug,"Connection was provided an instance of ITransport, using that directly."),this.transport=e,[4,this.transport.connect(r,o)]):[3,2];case 1:return a.sent(),this.changeState(0,1),[2];case 2:s=n.availableTransports,i=0,u=s,a.label=3;case 3:return i<u.length?(l=u[i],this.connectionState=0,"number"!=typeof(h=this.resolveTransport(l,e,o))?[3,8]:(this.transport=this.constructTransport(h),null!==n.connectionId?[3,5]:[4,this.getNegotiationResponse(t)])):[3,9];case 4:n=a.sent(),r=this.createConnectUrl(t,n.connectionId),a.label=5;case 5:return a.trys.push([5,7,,8]),[4,this.transport.connect(r,o)];case 6:return a.sent(),this.changeState(0,1),[2];case 7:return p=a.sent(),this.logger.log(c.Error,"Failed to start the transport '"+w[h]+"': "+p),this.connectionState=2,n.connectionId=null,[3,8];case 8:return i++,[3,3];case 9:throw new Error("Unable to initialize any of the available transports.")}})})},t.prototype.constructTransport=function(t){switch(t){case w.WebSockets:return new M(this.accessTokenFactory,this.logger,this.options.logMessageContent);case w.ServerSentEvents:return new R(this.httpClient,this.accessTokenFactory,this.logger,this.options.logMessageContent);case w.LongPolling:return new x(this.httpClient,this.accessTokenFactory,this.logger,this.options.logMessageContent);default:throw new Error("Unknown transport: "+t+".")}},t.prototype.resolveTransport=function(t,e,n){var o=w[t.transport];if(null===o||void 0===o)this.logger.log(c.Debug,"Skipping transport '"+t.transport+"' because it is not supported by this client.");else{var r=t.transferFormats.map(function(t){return S[t]});if(function(t,e){return!t||0!=(e&t)}(e,o))if(r.indexOf(n)>=0){if(!(o===w.WebSockets&&"undefined"==typeof WebSocket||o===w.ServerSentEvents&&"undefined"==typeof EventSource))return this.logger.log(c.Debug,"Selecting transport '"+w[o]+"'"),o;this.logger.log(c.Debug,"Skipping transport '"+w[o]+"' because it is not supported in your environment.'")}else this.logger.log(c.Debug,"Skipping transport '"+w[o]+"' because it does not support the requested transfer format '"+S[n]+"'.");else this.logger.log(c.Debug,"Skipping transport '"+w[o]+"' because it was disabled by the client.")}return null},t.prototype.isITransport=function(t){return t&&"object"==typeof t&&"connect"in t},t.prototype.changeState=function(t,e){return this.connectionState===t&&(this.connectionState=e,!0)},t.prototype.stopConnection=function(t){return i(this,void 0,void 0,function(){return a(this,function(e){return this.transport=null,(t=this.stopError||t)?this.logger.log(c.Error,"Connection disconnected with error '"+t+"'."):this.logger.log(c.Information,"Connection disconnected."),this.connectionState=2,this.onclose&&this.onclose(t),[2]})})},t.prototype.resolveUrl=function(t){if(0===t.lastIndexOf("https://",0)||0===t.lastIndexOf("http://",0))return t;if("undefined"==typeof window||!window||!window.document)throw new Error("Cannot resolve '"+t+"'.");var e=window.document.createElement("a");return e.href=t,this.logger.log(c.Information,"Normalizing '"+t+"' to '"+e.href+"'."),e.href},t.prototype.resolveNegotiateUrl=function(t){var e=t.indexOf("?"),n=t.substring(0,-1===e?t.length:e);return"/"!==n[n.length-1]&&(n+="/"),n+="negotiate",n+=-1===e?"":t.substring(e)},t}();var F="json",q=function(){function t(){this.name=F,this.version=1,this.transferFormat=S.Text}return t.prototype.parseMessages=function(t,e){if("string"!=typeof t)throw new Error("Invalid input for JSON hub protocol. Expected a string.");if(!t)return[];null===e&&(e=v.instance);for(var n=[],o=0,r=f.parse(t);o<r.length;o++){var s=r[o],i=JSON.parse(s);if("number"!=typeof i.type)throw new Error("Invalid payload.");switch(i.type){case h.Invocation:this.isInvocationMessage(i);break;case h.StreamItem:this.isStreamItemMessage(i);break;case h.Completion:this.isCompletionMessage(i);break;case h.Ping:case h.Close:break;default:e.log(c.Information,"Unknown message type '"+i.type+"' ignored.");continue}n.push(i)}return n},t.prototype.writeMessage=function(t){return f.write(JSON.stringify(t))},t.prototype.isInvocationMessage=function(t){this.assertNotEmptyString(t.target,"Invalid payload for Invocation message."),void 0!==t.invocationId&&this.assertNotEmptyString(t.invocationId,"Invalid payload for Invocation message.")},t.prototype.isStreamItemMessage=function(t){if(this.assertNotEmptyString(t.invocationId,"Invalid payload for StreamItem message."),void 0===t.item)throw new Error("Invalid payload for StreamItem message.")},t.prototype.isCompletionMessage=function(t){if(t.result&&t.error)throw new Error("Invalid payload for Completion message.");!t.result&&t.error&&this.assertNotEmptyString(t.error,"Invalid payload for Completion message."),this.assertNotEmptyString(t.invocationId,"Invalid payload for Completion message.")},t.prototype.assertNotEmptyString=function(t,e){if("string"!=typeof t||""===t)throw new Error(e)},t}(),H=function(){function t(){}return t.prototype.configureLogging=function(t){return m.isRequired(t,"logging"),!function(t){return void 0!==t.log}(t)?this.logger=new C(t):this.logger=t,this},t.prototype.withUrl=function(t,e){return m.isRequired(t,"url"),this.url=t,this.httpConnectionOptions="object"==typeof e?e:{transport:e},this},t.prototype.withHubProtocol=function(t){return m.isRequired(t,"protocol"),this.protocol=t,this},t.prototype.build=function(){var t=this.httpConnectionOptions||{};if(void 0===t.logger&&(t.logger=this.logger),!this.url)throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");var e=new O(this.url,t);return I.create(e,this.logger||v.instance,this.protocol||new q)},t}();new class{constructor(t,e,n){this.backdrop=document.getElementById(t),this.frontLayer=document.getElementById(e),this.menuButton=document.getElementById(n)}register(){this.registerButtonEvent(),this.registerFrontLayerEvent()}registerButtonEvent(){this.menuButton.addEventListener("click",()=>{this.backdrop.classList.contains("hidden")?this.backdrop.classList.remove("hidden"):this.backdrop.classList.add("hidden"),this.menuButton.classList.contains("open")?this.menuButton.classList.remove("open"):this.menuButton.classList.add("open")})}registerFrontLayerEvent(){this.frontLayer.addEventListener("click",()=>{this.backdrop.classList.add("hidden"),this.menuButton.classList.remove("open")})}}("menu","front-layer","show-menu").register();const j=(new H).withUrl("http://89.183.31.151:5000/chatHub").configureLogging(c.Information).build();j.on("ReceiveMessage",(t,e)=>{let n=t+" says "+e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),o=document.createElement("li");o.textContent=n,document.getElementById("message-list").appendChild(o)}),document.getElementById("send-button").addEventListener("click",()=>{let t=document.getElementById("user-input").value,e=document.getElementById("message-input").value;j.invoke("SendMessage",t,e).catch(function(t){return console.error(t.toString())}),event.preventDefault()}),j.start().catch(t=>console.error(t.toString()))}]);