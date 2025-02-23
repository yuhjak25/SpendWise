import { useNavigate } from "react-router-dom"
import { setUser } from "../libs/slices/auth"
import { loginApi, registerApi } from "../services/auth"
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
            console.log('Login failed', error)
            handleError('Login failed')
        }
    }

    return { setUserData, setNewUserData }
}

export default useUserAuthActions
