import { Button, Card, Table, UserUpdateModal } from 'components'
import { useState } from 'react'

const user = {
  id: '1',
  firstName: 'Jan',
  lastName: 'Kowalsko',
  username: 'jkowalksi',
  age: 24,
  email: 'jkowalski@gmail.com',
  roles: ['ADMIN'],
}

export const User = () => {
  const [isUserUpdateModalOpen, setIsUserUpdateModalOpen] = useState(false)

  const onUserUpdateModalOpen = () => setIsUserUpdateModalOpen((prev) => !prev)

  return (
    <>
      <Card>
        <Card.Header>User Management - User Details</Card.Header>
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
          <Button onClick={onUserUpdateModalOpen}>Edit</Button>
        </Card.Footer>
      </Card>
      <UserUpdateModal
        user={user}
        isOpen={isUserUpdateModalOpen}
        onOpen={onUserUpdateModalOpen}
      />
    </>
  )
}
