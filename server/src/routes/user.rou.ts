import express from 'express'
import { getUser } from '../services/auth.serv'
import { authMiddleware } from '../middleware/authMiddleware'

export const userRoute = express
  .Router()
  .get('/profile', authMiddleware, async (req, res) => {
    return await getUser(req, res)
  })
