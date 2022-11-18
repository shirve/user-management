import React from 'react'
import classNames from 'classnames'
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form'

interface InputFieldProps<TFieldValues extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<TFieldValues>
  errors: FieldErrors<TFieldValues>
  name: string
  label?: string
}

export const Form = ({
  children,
  ...props
}: React.PropsWithChildren<React.FormHTMLAttributes<HTMLFormElement>>) => (
  <form className='form' {...props}>
    {children}
  </form>
)

const Field = ({ children }: React.PropsWithChildren) => (
  <div className='form-field'>{children}</div>
)

const Error = ({ children }: React.PropsWithChildren) => (
  <span className='form-field-error'>{children}</span>
)

const Input = <TFieldValues extends Record<string, unknown>>({
  register,
  errors,
  name,
  label,
  ...props
}: InputFieldProps<TFieldValues>) => (
  <>
    <label>{label}</label>
    <input
      {...register(name as Path<TFieldValues>)}
      className={classNames('form-field-input', {
        'form-field-input--error': errors[name],
      })}
      {...props}
    />
  </>
)

const Checkbox = <TFieldValues extends Record<string, unknown>>({
  register,
  errors,
  name,
  label,
  ...props
}: InputFieldProps<TFieldValues>) => (
  <div className='form-field-with-in-row-label'>
    <input
      {...register(name as Path<TFieldValues>)}
      className={classNames('form-field-input', {
        'form-field-input--error': errors[name],
      })}
      {...props}
    />
    <label>{label}</label>
  </div>
)

Field.Input = Input
Field.Checkbox = Checkbox
Field.Error = Error

Form.Field = Field
