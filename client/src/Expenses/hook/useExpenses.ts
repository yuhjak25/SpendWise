import { Expenses } from '../../types'
import { postExpenses } from '../services/expenses'
import { createExpenses } from '../reducers/expenses'
import { useAppDispatch } from '../../store/hooks/useStore'

export const useExpenses = () => {
  const dispatch = useAppDispatch()
  const createAExpense = async (data: Expenses) => {
    try {
      const res = await postExpenses(data)
      dispatch(createExpenses(res))
    } catch (error) {
      console.error('Failed to create expense:', error)
    }
  }

  return {
    createAExpense,
  }
}
