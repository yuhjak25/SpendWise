import axios, { AxiosError } from "axios"
import { url } from "../constants"
import { Expenses } from "../types"

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

const setExpensesApi = async (expensesData: Expenses) => {
    try {
        const res = await axios.post(`${url}/api/expenses/create-expenses`, expensesData, { withCredentials: true })
        return res.data
    } catch (e) {
        if (e instanceof AxiosError && e.response?.data?.error) {
            return { error: e.response.data.error }
        }

        return { error: 'Something went wrong' }
    }
}

const clearExpensesApi = async (id: string) => {
    try {
        const res = await axios.delete(`${url}/api/expenses/${id}`, { withCredentials: true })
        return res.data
    } catch (e) {
        if (e instanceof AxiosError && e.response?.data?.error) {
            return { error: e.response.data.error }
        }

        return { error: 'Something went wrong' }
    }
}

const updateExpensesApi = async (id: string, expenseData: Expenses) => {
    try {
        const res = await axios.put(`${url}/api/expenses/${id}`, expenseData, { withCredentials: true })
        return res.data
    } catch (e) {
        if (e instanceof AxiosError && e.response?.data?.error) {
            return { error: e.response.data.error }
        }

        return { error: 'Something went wrong' }
    }
}

export {
    getExpensesApi,
    setExpensesApi,
    clearExpensesApi,
    updateExpensesApi
}