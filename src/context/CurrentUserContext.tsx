import { createContext, useContext, useState } from 'react'
import { User } from 'types'

interface IUserContext {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  removeUser: () => void
}

const CurrentUserContext = createContext({} as IUserContext)

export const useCurrentUser = () => useContext(CurrentUserContext)

export const CurrentUserContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User | null>(null)

  const removeUser = () => setUser(null)

  return (
    <CurrentUserContext.Provider value={{ user, setUser, removeUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
