import { User } from 'types'

export const mockUser: User = {
  firstName: 'Jan',
  lastName: 'Kowalsko',
  username: 'jkowalksi',
  age: 24,
  email: 'jkowalski@gmail.com',
  roles: ['ROLE_ADMIN'],
}

export const mockUsers: User[] = [
  {
    firstName: 'Jan',
    lastName: 'Kowalsko',
    username: 'jkowalksi',
    age: 24,
    email: 'jkowalski@gmail.com',
    roles: ['ROLE_ADMIN'],
  },
  {
    firstName: 'Andrzej',
    lastName: 'Nowak',
    username: 'anowak',
    age: 33,
    email: 'anwkak@gmail.com',
    roles: ['ROLE_USER'],
  },
]
