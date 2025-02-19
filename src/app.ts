import express from 'express'
import { authRoute } from './routes/auth.rou'
import cookieParser from 'cookie-parser'
export const app = express()

app.use(express.json()).use(cookieParser()).use('/api/auth', authRoute)
