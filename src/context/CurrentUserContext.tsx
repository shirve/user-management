import { createContext, useContext, useState } from 'react'
import { TUser } from 'types'

interface IUserContext {
  user: TUser | null
  setUser: (user: TUser | null) => void
  removeUser: () => void
}

const CurrentUserContext = createContext({} as IUserContext)

export const useCurrentUser = () => useContext(CurrentUserContext)

export const CurrentUserContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<TUser | null>(null)

  const removeUser = () => setUser(null)

  return (
    <CurrentUserContext.Provider value={{ user, setUser, removeUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
