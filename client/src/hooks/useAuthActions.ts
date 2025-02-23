import { useNavigate } from "react-router-dom"
import { clearUser, setUser } from "../libs/slices/auth"
import { loginApi, logOutApi, registerApi } from "../services/auth"
import { useAppDispatch } from "../store/hooks/useStore"
import { UserData, UserDataRegister } from "../types"
import useError from "./useError"

const useUserAuthActions = () => {
    const dispatch = useAppDispatch()
    const { handleError } = useError()
    const navigate = useNavigate()

    const setUserData = async (user: UserData) => {
        try {
            const userData = await loginApi(user)
            if (userData.error) {
                handleError(userData.error)
                return
            }
            dispatch(setUser(userData))
            navigate('/')
        } catch (error) {
            console.log('Login failed', error)
            handleError('Login failed')
        }
    }

    const setNewUserData = async (user: UserDataRegister) => {
        try {
            const userData = await registerApi(user)
            if (userData.error) {
                handleError(userData.error)
                return
            }
            dispatch(setUser(userData))
            navigate('/')
        } catch (error) {
            console.log('Register failed', error)
            handleError('Register failed')
        }
    }

    const clearUserData = async () => {
        try {
            const userData = await logOutApi()
            dispatch(clearUser(userData))
        } catch (error) {
            console.log('Logout failed', error)
            handleError('Logout failed')
        }
    }

    return { setUserData, setNewUserData, clearUserData }
}

export default useUserAuthActions
