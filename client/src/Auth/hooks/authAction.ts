import { useDispatch } from 'react-redux'
import {
  registerUser as registerUserAction,
  loginUser as loginUserAction,
} from '../reducers/auth'
import { UserData, UserDataRegister } from '../../types'

export const useAuthActions = () => {
  const dispatch = useDispatch()

  const registerUser = (res: UserDataRegister) => {
    dispatch(registerUserAction(res))
  }

  const loginUser = (res: UserData) => {
    dispatch(loginUserAction(res))
  }

  return { registerUser, loginUser }
}
