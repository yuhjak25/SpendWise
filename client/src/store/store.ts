import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../Auth/reducers/auth'
import expenseSlice from '../Expenses/reducers/expenses'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    expenses: expenseSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
