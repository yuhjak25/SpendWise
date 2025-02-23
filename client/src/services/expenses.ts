import axios, { AxiosError } from "axios"
import { url } from "../constants"

const getExpensesApi = async () => {
    try {
        const res = await axios.get(`${url}/api/expenses/get-expenses`, { withCredentials: true })
        return res.data
    } catch (e) {
        if (e instanceof AxiosError && e.response?.data?.error) {
            return { error: e.response.data.error }
        }
        return { error: 'Something went wrong' }
    }
}


export {
    getExpensesApi
}