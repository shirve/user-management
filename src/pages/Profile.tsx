import {
  Button,
  Card,
  PasswordChangeModal,
  Table,
  UserUpdateModal,
} from 'components'
import { useState } from 'react'
import { mockUser } from 'constants/mocks'

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
              {Object.entries(mockUser).map(([key, value]) => (
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
        user={mockUser}
        isOpen={isPasswordChangeModalOpen}
        onOpen={onPasswordChangeModalOpen}
      />
      <UserUpdateModal
        user={mockUser}
        isOpen={isUserUpdateModalOpen}
        onOpen={onUserUpdateModalOpen}
      />
    </>
  )
}
