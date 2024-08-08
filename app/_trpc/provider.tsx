'use client'

import { ReactNode, useState } from "react"
import { trpc } from "./client"
import { httpBatchLink } from "@trpc/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface ServerProviderProps {
  children: ReactNode
}

export const ServerProvider = ({children}: ServerProviderProps) => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `http://localhost:3000/api/trpc`,
        }),
      ],
    }),
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}