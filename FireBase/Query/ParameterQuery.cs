using System;

namespace Firebase.Database.Query
{
    /// <summary>
    ///     Represents a parameter in firebase query, e.g. "?data=foo".
    /// </summary>
    public abstract class ParameterQuery : FirebaseQuery
    {
        private readonly Func<string> parameterFactory;
        private readonly string separator;

        /// <summary>
        ///     Initializes a new instance of the <see cref="ParameterQuery" /> class.
        /// </summary>
        /// <param name="parent"> The parent of this query. </param>
        /// <param name="parameterFactory"> The parameter. </param>
        /// <param name="client"> The owning client. </param>
        protected ParameterQuery(FirebaseQuery parent, Func<string> parameterFactory, FirebaseClient client)
            : base(parent, client)
        {
            this.parameterFactory = parameterFactory;
            separator = Parent is ChildQuery ? "?" : "&";
        }

        /// <summary>
        ///     Build the url segment represented by this query.
        /// </summary>
        /// <param name="child"> The child. </param>
        /// <returns> The <see cref="string" />. </returns>
        protected override string BuildUrlSegment(FirebaseQuery child)
        {
            return $"{separator}{parameterFactory()}={BuildUrlParameter(child)}";
        }

        /// <summary>
        ///     The build url parameter.
        /// </summary>
        /// <param name="child"> The child. </param>
        /// <returns> The <see cref="string" />. </returns>
        protected abstract string BuildUrlParameter(FirebaseQuery child);
    }
}