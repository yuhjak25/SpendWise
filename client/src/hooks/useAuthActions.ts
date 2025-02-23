import { setUser } from "../libs/slices/auth"
import { loginApi, registerApi } from "../services/auth"
import { useAppDispatch } from "../store/hooks/useStore"
import { UserData, UserDataRegister } from "../types"
import useError from "./useError"

const userAuthActions = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { handleError } = useError()

    const setUserData = async (user: UserData) => {
        try {
            const userData = await loginApi(user)
            if (userData.error) {
                handleError(userData.error)
                return
            }
            dispatch(setUser(userData));
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
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
            dispatch(setUser(userData));
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            handleError('Login failed')
        }
    }

    return { setUserData, setNewUserData }
}

export default userAuthActions
