import { useNavigate } from 'react-router-dom'
import { deleteLocalStorage } from '~/utils/localStorage'

export const useLogout = () => {
  const navigate = useNavigate()

  const logout = () => {
    deleteLocalStorage('user')
    deleteLocalStorage('account')
    navigate('/')
  }
  return logout
}
