import { ApolloProvider } from '@apollo/client'
import { App } from '@/app'
import { client } from '@/lib/apollo'

export function Root() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}
