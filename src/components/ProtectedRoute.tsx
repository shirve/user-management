import { useCurrentUser } from 'context'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  role: string
}

export const ProtectedRoute = ({ role }: Props) => {
  const { user } = useCurrentUser()

  return (!role && user) || user?.role === role ? (
    <Outlet />
  ) : (
    <Navigate to='/unauthorized' />
  )
}
