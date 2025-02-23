import axios, { AxiosError } from "axios"
import { url } from "../constants"

const userApi = async () => {
    try {
        const res = await axios.get(`${url}/api/user/profile`, {
            withCredentials: true
        })
        const data = res.data
        console.log('username', data)
        return { username: data.username }
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

export { userApi }