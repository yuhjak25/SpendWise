import { getUserExpenses, setExpenses } from "../libs/slices/expenses"
import { getExpensesApi, setExpensesApi } from "../services/expenses"
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

    return { getExpensesData, postExpensesData }
}

export default useExpensesActions