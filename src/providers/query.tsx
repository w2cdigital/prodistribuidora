"use client"

import { QueryClient, QueryClientProvider } from "react-query"

const QueryData = new QueryClient()

function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={QueryData}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
