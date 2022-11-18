import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { useCurrentUser } from 'context'
import { UserRole } from 'types'

type Navigation = {
  path: string
  label: string
  roles: UserRole[]
}

const navigation: Navigation[] = [
  {
    path: '/profile',
    label: 'Profile',
    roles: ['ROLE_ADMIN', 'ROLE_USER'],
  },
  {
    path: '/users',
    label: 'Users',
    roles: ['ROLE_ADMIN'],
  },
]

export const Navbar = () => {
  const { user } = useCurrentUser()

  const onLogout = () => console.log('logout')

  return (
    <nav className='navbar'>
      <div className='navbar-links'>
        {user &&
          navigation
            .filter(({ roles }) =>
              roles.find((role) => user.roles.includes(role))
            )
            .map(({ path, label }) => (
              <NavigationLink key={path} path={path}>
                {label}
              </NavigationLink>
            ))}
      </div>
      <div className='navbar-links'>
        {user ? (
          <span className='navbar-link' onClick={onLogout}>
            Logout
          </span>
        ) : (
          <>
            <NavigationLink path='/login'>Login</NavigationLink>
            <NavigationLink path='/register'>Register</NavigationLink>
          </>
        )}
      </div>
    </nav>
  )
}

const NavigationLink = ({
  path,
  children,
}: React.PropsWithChildren<{ path: string }>) => (
  <NavLink
    className={(navData) =>
      classNames('navbar-link', {
        'navbar-link--active': navData.isActive,
      })
    }
    to={path}
  >
    {children}
  </NavLink>
)
