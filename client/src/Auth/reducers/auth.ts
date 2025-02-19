import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserData, UserDataRegister } from '../../types'

interface AuthState {
  isAuthenticated: boolean
  user: UserData | UserDataRegister | null
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
    loginUser(state, action: PayloadAction<UserData>) {
      state.isAuthenticated = true
      state.user = action.payload
    },
  },
})

export const { registerUser, loginUser } = authSlice.actions
export default authSlice.reducer
