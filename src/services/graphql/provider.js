
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from
} from "@apollo/client"

import {onError} from "@apollo/client/link/error";
import {GITHUB_GRAPHQL_TOKEN, GITHUB_GRAPHQL_URI} from "../../config/constants";

const errorLink = onError(({graphqlErrors, networkErrors}) => {
    if (graphqlErrors){
        graphqlErrors.map(({
            message, location, path
        }) => {
            console.error(`Graphql error ${message}`)
        })
    }
})

const link = from([
    errorLink,
    new HttpLink({
        uri: GITHUB_GRAPHQL_URI,
        headers: {
            authorization: `Bearer ${GITHUB_GRAPHQL_TOKEN}`
        }
    })
])

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})

const GithubGraphQlProvider = ({children}) => {
    return <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
}

export {
    GithubGraphQlProvider
}