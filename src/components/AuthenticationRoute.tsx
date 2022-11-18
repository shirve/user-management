import { Outlet } from 'react-router-dom'
import { Loader } from 'components'
import { useState, useEffect } from 'react'
import { setAxiosAuthorizationHeaders } from 'api'
import { useLocalStorage } from 'hooks'

export const AuthenticationRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const { getItem } = useLocalStorage()

  useEffect(() => {
    const token = getItem('token')
    if (token) {
      setAxiosAuthorizationHeaders(token)
    }
    setIsAuthenticated(true)
  }, [])

  return isAuthenticated ? <Outlet /> : <Loader />
}
