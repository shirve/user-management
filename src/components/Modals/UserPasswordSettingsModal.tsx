import { Button, Card, Form, ModalWrapper } from 'components'
import { useForm } from 'react-hook-form'
import { User } from 'types'

type FormFields = {
  passwordLength: number
  numbers: boolean
  letters: boolean
  passwordDuration: number
}

const formFields: {
  name: keyof FormFields
  type: string
  placeholder?: string
  label?: string
  component: string
}[] = [
  {
    name: 'passwordLength',
    type: 'number',
    label: 'Password Length',
    placeholder: '8',
    component: 'input',
  },
  {
    name: 'numbers',
    type: 'checkbox',
    label: 'Special Characters or Numbers',
    component: 'checkbox',
  },
  {
    name: 'letters',
    type: 'checkbox',
    label: 'Small and Big Letters',
    component: 'checkbox',
  },
  {
    name: 'passwordDuration',
    type: 'number',
    label: 'Password Duration [days]',
    placeholder: '30',
    component: 'input',
  },
]

interface Props {
  user?: User
  isOpen: boolean
  onOpen: () => void
}

export const UserPasswordSettingsModal = ({ user, isOpen, onOpen }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>()

  const onSubmit = (data: FormFields) => console.log(data)

  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={onOpen}>
      <Card>
        <Card.Header>User Password Settings</Card.Header>
        <Card.Content>
          <Form>
            {formFields.map(({ name, type, placeholder, label, component }) => (
              <Form.Field key={name}>
                {component === 'input' && (
                  <Form.Field.Input
                    register={register}
                    errors={errors}
                    name={name}
                    type={type}
                    label={label}
                    placeholder={placeholder}
                  />
                )}
                {component === 'checkbox' && (
                  <Form.Field.Checkbox
                    register={register}
                    errors={errors}
                    name={name}
                    type={type}
                    label={label}
                  />
                )}
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
