import { useQuery } from '@tanstack/react-query'

export const useExample = (options = {}) =>
  useQuery(['example'], () => {}, { ...options })
