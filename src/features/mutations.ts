import { useMutation } from '@tanstack/react-query'
import { register, login } from './services'

export const useRegister = (options = {}) =>
  useMutation(register, { mutationKey: ['register'], ...options })

export const useLogin = (options = {}) =>
  useMutation(login, { mutationKey: ['login'], ...options })
