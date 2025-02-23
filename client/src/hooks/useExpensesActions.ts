import { clearExpenses, editExpenses, getUserExpenses, setExpenses } from "../libs/slices/expenses"
import { clearExpensesApi, getExpensesApi, setExpensesApi, updateExpensesApi } from "../services/expenses"
import { useAppDispatch } from "../store/hooks/useStore"
import { Expenses } from "../types"
import useError from "./useError"

const useExpensesActions = () => {
    const dispatch = useAppDispatch()
    const { handleError } = useError()

    const getExpensesData = async () => {
        try {
            const expenseData = await getExpensesApi()
            if (expenseData.error) {
                handleError(expenseData.error)
                return
            }
            dispatch(getUserExpenses(expenseData))
        } catch (e) {
            console.log('Error getting expenses', e)
            handleError('Error getting expenses')
        }
    }

    const postExpensesData = async (expense: Expenses) => {
        try {
            const expenseData = await setExpensesApi(expense)
            if (expenseData.error) {
                handleError(expenseData.error)
                return
            }
            dispatch(setExpenses(expenseData))
        } catch (e) {
            console.log('Error creating expenses', e)
            handleError('Error creating expenses')
        }
    }

    const clearExpensesData = async (id: string) => {
        try {
            const res = await clearExpensesApi(id)
            if (res.error) {
                handleError(res.error)
                return
            }
            dispatch(clearExpenses({ id }))
        } catch (e) {
            console.log('Error creating expenses', e)
            handleError('Error creating expenses')
        }
    }

    const editExpensesData = async (id: string, updateExpensesData: Expenses) => {
        try {
            const res = await updateExpensesApi(id, updateExpensesData)
            if (res.error) {
                handleError(res.error)
                return
            }
            dispatch(editExpenses(updateExpensesData))
        } catch (e) {
            console.log('Error updating expenses', e)
            handleError('Error updating expenses')
        }
    }

    return { getExpensesData, postExpensesData, clearExpensesData, editExpensesData }
}

export default useExpensesActions