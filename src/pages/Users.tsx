import {
  Button,
  IconButton,
  Card,
  NewUserModal,
  Table,
  UserPasswordSettingsModal,
} from 'components'
import { useState } from 'react'
import { IoSettingsSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { User } from 'types'
import { mockUsers } from 'constants/mocks'

export const Users = () => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false)
  const [chosenUser, setChosenUser] = useState<User | undefined>(undefined)

  const onUserChooseAndPasswordModalOpen = async (user: User) => {
    await setChosenUser(user)
    onPasswordModalOpen()
  }

  const onPasswordModalOpen = () => setIsPasswordModalOpen((prev) => !prev)
  const onNewUserModalOpen = () => setIsNewUserModalOpen((prev) => !prev)

  return (
    <>
      <Card>
        <Card.Header>User Management - Users</Card.Header>
        <Card.Content>
          <Table>
            <Table.Body>
              {mockUsers.length
                ? mockUsers.map((user) => (
                    <Table.Row key={user.username}>
                      <Table.Col>
                        <Link className='link' to={`/users/${user.username}`}>
                          {user.firstName} {user.lastName}
                        </Link>
                      </Table.Col>
                      <Table.Col>
                        <IconButton
                          onClick={() => onUserChooseAndPasswordModalOpen(user)}
                        >
                          <IoSettingsSharp />
                        </IconButton>
                      </Table.Col>
                    </Table.Row>
                  ))
                : 'No users found :('}
            </Table.Body>
          </Table>
        </Card.Content>
        <Card.Footer>
          <Button onClick={onNewUserModalOpen} outlined>
            Add New
          </Button>
        </Card.Footer>
      </Card>
      <UserPasswordSettingsModal
        user={chosenUser}
        isOpen={isPasswordModalOpen}
        onOpen={onPasswordModalOpen}
      />
      <NewUserModal isOpen={isNewUserModalOpen} onOpen={onNewUserModalOpen} />
    </>
  )
}
