import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

const setAxiosAuthorizationHeaders = (token: string) => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export { setAxiosAuthorizationHeaders, apiClient }
