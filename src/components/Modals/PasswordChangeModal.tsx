import { Button, Card, Form, ModalWrapper } from 'components'
import { useForm } from 'react-hook-form'
import { User } from 'types'

type FormFields = {
  currentPassword: string
  newPassword: string
  newPasswordConfirm: string
}

const formFields: {
  name: keyof FormFields
  type: string
  placeholder: string
}[] = [
  {
    name: 'currentPassword',
    type: 'password',
    placeholder: 'Current Password',
  },
  { name: 'newPassword', type: 'password', placeholder: 'New Password' },
  {
    name: 'newPasswordConfirm',
    type: 'password',
    placeholder: 'Confirm New Password',
  },
]

interface Props {
  user?: User
  isOpen: boolean
  onOpen: () => void
}

export const PasswordChangeModal = ({ user, isOpen, onOpen }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>()

  const onSubmit = (data: FormFields) => console.log(data)

  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={onOpen}>
      <Card>
        <Card.Header>Change Password</Card.Header>
        <Card.Content>
          <Form>
            {formFields.map(({ name, type, placeholder }) => (
              <Form.Field key={name}>
                <Form.Field.Input
                  register={register}
                  errors={errors}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                />
                <Form.Field.Error>{errors[name]?.message}</Form.Field.Error>
              </Form.Field>
            ))}
          </Form>
        </Card.Content>
        <Card.Footer>
          <Button onClick={onOpen} outlined>
            Cancel
          </Button>
          <Button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
            Save
          </Button>
        </Card.Footer>
      </Card>
    </ModalWrapper>
  )
}
