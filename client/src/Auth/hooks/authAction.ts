import { useDispatch } from 'react-redux'
import {
  registerUser as registerUserAction,
  loginUser as loginUserAction,
  logoutUser,
} from '../reducers/auth'
import { UserData } from '../../types'

export const useAuthActions = () => {
  const dispatch = useDispatch()

  const registerUser = (res: UserData) => {
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
