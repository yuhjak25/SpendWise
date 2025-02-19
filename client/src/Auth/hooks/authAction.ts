import { useDispatch } from 'react-redux'
import { registerUser as registerUserAction } from '../reducers/auth'
import { UserDataRegister } from '../../types'

export const useAuthActions = () => {
  const dispatch = useDispatch()

  const registerUser = (res: UserDataRegister) => {
    dispatch(registerUserAction(res))
  }

  return { registerUser }
}
