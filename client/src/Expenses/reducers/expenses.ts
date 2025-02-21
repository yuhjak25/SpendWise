import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Expenses } from '../../types'

const initialState: Expenses[] = []

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    getExpenses(_state, action: PayloadAction<Expenses[]>) {
      return action.payload
    },
    createExpenses(state, action: PayloadAction<Expenses>) {
      return [...state, action.payload]
    },
    deleteExpenses(state, action: PayloadAction<string>) {
      return state.filter((expense) => expense._id !== action.payload)
    },
  },
})

export const { getExpenses, createExpenses, deleteExpenses } =
  expenseSlice.actions
export default expenseSlice.reducer
