import { useDispatch } from 'react-redux'
import {
  registerUser as registerUserAction,
  loginUser as loginUserAction,
  logoutUser as logOutUserAction,
  setUserData as setUserAction,
} from '../reducers/auth'
import { UserData, UserDataRegister } from '../../types'
import { useNavigate } from 'react-router-dom'
import { getUserProfileData } from '../../Users/services/users'

export const useAuthActions = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const registerUser = (res: UserDataRegister) => {
    dispatch(registerUserAction(res))
  }

  const loginUser = (res: UserData) => {
    dispatch(loginUserAction(res))
  }

  const logOutUser = () => {
    dispatch(logOutUserAction())
    navigate('/')
  }

  const getUserData = async () => {
    const userData = await getUserProfileData()
    if (userData) {
      dispatch(setUserAction(userData))
    }
  }

  return { registerUser, loginUser, logOutUser, getUserData }
}
