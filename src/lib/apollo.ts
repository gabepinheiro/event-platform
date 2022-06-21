import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oeqvlt222i01z7h5mq2tul/master',
  cache: new InMemoryCache(),
})
