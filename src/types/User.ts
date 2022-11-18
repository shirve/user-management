import { UserRole } from 'types'

export type User = {
  username: string
  email: string
  firstName: string
  lastName: string
  age: number
  roles: UserRole[]
}
