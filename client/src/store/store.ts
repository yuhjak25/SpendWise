import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../libs/slices/auth'
import userSlice from '../libs/slices/user'
import errorSlice from '../libs/slices/error'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    error: errorSlice,

  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
