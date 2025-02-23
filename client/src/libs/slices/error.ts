import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ErrorDetails {
    error: string | null
}

const initialState: ErrorDetails = {
    error: null
}

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<ErrorDetails>) => {
            state.error = action.payload.error

        },
        clearError: (state) => {
            state.error = null
        }
    }
})

export const { setError, clearError } = errorSlice.actions
export default errorSlice.reducer