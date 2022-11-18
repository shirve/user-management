import {
  Button,
  Card,
  PasswordChangeModal,
  Table,
  UserUpdateModal,
} from 'components'
import { useState } from 'react'

const user = {
  firstName: 'Jan',
  lastName: 'Kowalsko',
  username: 'jkowalksi',
  age: 24,
  email: 'jkowalski@gmail.com',
  roles: ['ADMIN'],
}

export const Profile = () => {
  const [isPasswordChangeModalOpen, setIsPasswordChangeModalOpen] =
    useState(false)
  const [isUserUpdateModalOpen, setIsUserUpdateModalOpen] = useState(false)

  const onPasswordChangeModalOpen = () =>
    setIsPasswordChangeModalOpen((prev) => !prev)
  const onUserUpdateModalOpen = () => setIsUserUpdateModalOpen((prev) => !prev)

  return (
    <>
      <Card>
        <Card.Header>User Management - Profile</Card.Header>
        <Card.Content>
          <Table>
            <Table.Body>
              {Object.entries(user).map(([key, value]) => (
                <Table.Row key={key}>
                  <Table.Col>{key}</Table.Col>
                  <Table.Col>{value}</Table.Col>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card.Content>
        <Card.Footer>
          <Button onClick={onPasswordChangeModalOpen} outlined>
            Change Password
          </Button>
          <Button onClick={onUserUpdateModalOpen}>Edit</Button>
        </Card.Footer>
      </Card>
      <PasswordChangeModal
        user={user}
        isOpen={isPasswordChangeModalOpen}
        onOpen={onPasswordChangeModalOpen}
      />
      <UserUpdateModal
        user={user}
        isOpen={isUserUpdateModalOpen}
        onOpen={onUserUpdateModalOpen}
      />
    </>
  )
}
