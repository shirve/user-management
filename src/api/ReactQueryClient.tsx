import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

interface Props {
  children: React.ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
  queryCache: new QueryCache(),
})

export const ReactQueryClient = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
