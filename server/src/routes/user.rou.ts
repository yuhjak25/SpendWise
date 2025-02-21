import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware'
import { getUser } from '../services/user.serv'

export const userRoute = express
  .Router()
  .get('/profile', authMiddleware, async (req, res) => {
    return await getUser(req, res)
  })
