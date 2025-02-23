import { getUserExpenses } from "../libs/slices/expenses"
import { getExpensesApi } from "../services/expenses"
import { useAppDispatch } from "../store/hooks/useStore"
import useError from "./useError"

const useExpensesActions = () => {
    const dispatch = useAppDispatch()
    const { handleError } = useError()

    const getExpensesData = async () => {
        try {
            const expenseData = await getExpensesApi()
            dispatch(getUserExpenses(expenseData))
        } catch (error) {
            console.log('Error getting expenses', error)
            handleError('Errro getting expenses')
        }
    }
    return { getExpensesData }
}

export default useExpensesActions