import axios, { AxiosError } from 'axios'
import { UserData, UserDataRegister } from '../types'
import { url } from '../constants'

const loginApi = async (loginUserData: UserData) => {
    try {
        const res = await axios.post(`${url}/api/auth/login`, loginUserData, { withCredentials: true })
        return res.data
    } catch (e) {
        if (e instanceof AxiosError && e.response?.status === 401) {
            return { error: 'Invalid email or password' }
        }

        if (e instanceof AxiosError && e.response?.status === 409) {
            return { error: 'Email already exists' }
        }

        if (e instanceof AxiosError && e.response?.data?.error) {
            return { error: e.response.data.error }
        }

        return { error: 'Something went wrong' }
    }
}

const registerApi = async (registerUserData: UserDataRegister) => {
    try {
        const res = await axios.post(`${url}/api/auth/register`, registerUserData, { withCredentials: true })
        return res.data
    } catch (e) {
        if (e instanceof AxiosError && e.response?.status === 401) {
            return { error: 'Invalid email or password' }
        }
        if (e instanceof AxiosError && e.response?.status === 409) {
            return { error: 'Email already exists' }
        }

        if (e instanceof AxiosError && e.response?.data?.error) {
            return { error: e.response.data.error }
        }

        return { error: 'Something went wrong' }
    }
}

const logOutApi = async () => {
    try {
        const res = await axios.post(`${url}/api/auth/logout`, {}, { withCredentials: true })
        return res.data
    } catch (e) {
        if (e instanceof AxiosError && e.response?.data?.error) {
            return { error: e.response.data.error }
        }

        return { error: 'Something went wrong' }
    }
}

export { loginApi, registerApi, logOutApi }