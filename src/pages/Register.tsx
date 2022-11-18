import { useForm } from 'react-hook-form'
import { Button, Card, Form } from 'components'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterData } from 'types'
import { useRegister } from 'features'

type FormFields = RegisterData & { passwordConfirm: string }

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
  { name: 'password', type: 'password', placeholder: 'Password' },
  {
    name: 'passwordConfirm',
    type: 'password',
    placeholder: 'Confirm Password',
  },
]

export const Register = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>()

  const { mutate } = useRegister({
    onSuccess: () => navigate('/login'),
  })

  const onSubmit = (data: FormFields) => mutate(data)

  return (
    <Card>
      <Card.Header>User Management - Register</Card.Header>
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
        <Link className='link link--underlined' to='/login'>
          Already have an account?
        </Link>
        <Button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
          Register
        </Button>
      </Card.Footer>
    </Card>
  )
}
