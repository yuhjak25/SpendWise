import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Expenses } from "../../types"


const initialState: Expenses[] = []

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getUserExpenses: (_state, action: PayloadAction<Expenses[]>) => {
            return action.payload
        },
        setExpenses: (state, action: PayloadAction<Expenses>) => {
            state.push(action.payload)
        },
        clearExpenses: (state, action: PayloadAction<{ id: string }>) => {
            return state.filter((expense) => expense._id !== action.payload.id)
        }
    }
})

export const { getUserExpenses, setExpenses, clearExpenses } = authSlice.actions
export default authSlice.reducer