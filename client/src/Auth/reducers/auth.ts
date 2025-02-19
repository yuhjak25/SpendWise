import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserDataRegister } from '../../types'

interface AuthState {
  isAuthenticated: boolean
  user: UserDataRegister | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser(state, action: PayloadAction<UserDataRegister>) {
      state.isAuthenticated = true
      state.user = action.payload
    },
  },
})

export const { registerUser } = authSlice.actions
export default authSlice.reducer
