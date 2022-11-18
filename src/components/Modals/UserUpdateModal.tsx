import { Button, Card, Form, ModalWrapper } from 'components'
import { useForm } from 'react-hook-form'
import { RegisterData, User } from 'types'

type FormFields = Omit<RegisterData, 'password'>

const formFields: {
  name: keyof FormFields
  type: string
  placeholder: string
}[] = [
  { name: 'firstName', type: 'text', placeholder: 'First Name' },
  { name: 'lastName', type: 'text', placeholder: 'Last Name' },
  { name: 'age', type: 'number', placeholder: 'Age' },
  { name: 'username', type: 'text', placeholder: 'Username' },
  { name: 'email', type: 'email', placeholder: 'E-mail' },
]

interface Props {
  user?: User
  isOpen: boolean
  onOpen: () => void
}

export const UserUpdateModal = ({ user, isOpen, onOpen }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ defaultValues: user })

  const onSubmit = (data: FormFields) => console.log(data)

  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={onOpen}>
      <Card>
        <Card.Header>User Profile Edit</Card.Header>
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
