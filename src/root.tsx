import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { App } from '@/app'
import { client } from '@/lib/apollo'

export function Root() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  )
}
