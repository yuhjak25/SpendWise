import { configureStore } from '@reduxjs/toolkit'
import errorSlice from '../libs/slices/error'
import authSlice from '../libs/slices/auth'


export const store = configureStore({
  reducer: {
    error: errorSlice,
    auth: authSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
