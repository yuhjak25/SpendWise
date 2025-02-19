import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserData } from '../../types'

interface AuthState {
  isAuthenticated: boolean
  user: UserData | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser(state, action: PayloadAction<UserData>) {
      state.isAuthenticated = true
      state.user = action.payload
    },
  },
})

export const { registerUser } = authSlice.actions
export default authSlice.reducer
