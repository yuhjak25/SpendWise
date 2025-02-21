import { Expenses } from '../../types'
import { deleteExpenses, postExpenses } from '../services/expenses'
import {
  createExpenses,
  deleteExpenses as deleteActions,
} from '../reducers/expenses'
import { useAppDispatch } from '../../store/hooks/useStore'

export const useExpenses = () => {
  const dispatch = useAppDispatch()
  const createAExpense = async (data: Expenses) => {
    try {
      const res = await postExpenses(data)
      if (res && res._id) {
        dispatch(createExpenses(res))
      } else {
        console.error('Invalid response from server:', res)
      }
    } catch (error) {
      console.error('Failed to create expense:', error)
    }
  }

  const deleteAExpense = async (_id: string) => {
    try {
      await deleteExpenses(_id)
      dispatch(deleteActions(_id))
    } catch (error) {
      console.error('Failed to delete expense:', error)
    }
  }

  return {
    createAExpense,
    deleteAExpense,
  }
}
