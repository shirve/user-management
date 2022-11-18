import { useForm } from 'react-hook-form'
import { Button, Card, Form } from 'components'
import { Link, useNavigate } from 'react-router-dom'
import { LoginData } from 'types'
import { useLogin } from 'features'
import { useLocalStorage } from 'hooks'

type FormFields = LoginData

const formFields: {
  name: keyof FormFields
  type: string
  placeholder: string
}[] = [
  { name: 'username', type: 'text', placeholder: 'Username' },
  { name: 'password', type: 'password', placeholder: 'Password' },
]

export const Login = () => {
  const navigate = useNavigate()
  const { setItem } = useLocalStorage()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>()

  const { mutate } = useLogin({
    onSuccess: (data: string) => {
      setItem('token', data)
      navigate('/profile')
    },
  })

  const onSubmit = (data: FormFields) => mutate(data)

  return (
    <Card>
      <Card.Header>User Management - Login</Card.Header>
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
        <Link className='link link--underlined' to='/register'>
          Don't have an account?
        </Link>
        <Button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
          Login
        </Button>
      </Card.Footer>
    </Card>
  )
}
