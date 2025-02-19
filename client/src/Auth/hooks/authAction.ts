import { useDispatch } from 'react-redux'
import {
  registerUser as registerUserAction,
  loginUser as loginUserAction,
  logoutUser,
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

  const logOutUser = () => {
    dispatch(logoutUser())
  }

  return { registerUser, loginUser, logOutUser }
}
