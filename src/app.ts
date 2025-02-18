import express from 'express'
import { authRoute } from './routes/auth.rou'
export const app = express()

app.use(express.json()).use('/api/auth', authRoute)
