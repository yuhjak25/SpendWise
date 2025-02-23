import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PublicUserData } from "../../types"

interface AuthDetails {
    isAuthenticated: boolean
    user: PublicUserData | null
}

const initialState: AuthDetails = {
    isAuthenticated: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthDetails>) => {
            state.isAuthenticated = true
            state.user = action.payload.user
        },
        clearUser: (state) => {
            state.isAuthenticated = false
            state.user = null
        }
    }
})

export const { setUser, clearUser } = authSlice.actions
export default authSlice.reducer