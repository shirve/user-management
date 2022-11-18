import { apiClient } from 'api'
import { LoginData, RegisterData } from 'types'

export const register = async (registerData: RegisterData): Promise<string> => {
  const { data } = await apiClient.post('/auth/register', registerData)
  return data
}

export const login = async (loginData: LoginData): Promise<string> => {
  const { data } = await apiClient.post('/auth/login', loginData)
  return data
}
