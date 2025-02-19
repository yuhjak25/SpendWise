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
    createExpenses(state, action: PayloadAction<Expenses[]>) {
      state.push(...action.payload)
    },
  },
})

export const { getExpenses } = expenseSlice.actions
export default expenseSlice.reducer
