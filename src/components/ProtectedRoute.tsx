import { useCurrentUser } from 'context'
import { Navigate, Outlet } from 'react-router-dom'
import { UserRole } from 'types'

interface Props {
  roles?: UserRole[]
}

export const ProtectedRoute = ({ roles }: Props) => {
  const { user } = useCurrentUser()

  return (!roles && user) ||
    user?.roles.some((role) => roles?.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to='/unauthorized' />
  )
}
