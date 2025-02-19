import express from 'express'
import cookieParser from 'cookie-parser'
import { authRoute } from './routes/auth.rou'
import { userRoute } from './routes/user.rou'
import { expensesRoute } from './routes/expenses.rou'
export const app = express()

app
  .use(express.json())
  .use(cookieParser())
  .use('/api/auth', authRoute)
  .use('/api/user', userRoute)
  .use('/api/expenses', expensesRoute)
