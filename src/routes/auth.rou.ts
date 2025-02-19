import express from 'express'
import { getUser, userLogin, userRegister } from '../services/auth.serv'
import { authMiddleware } from '../middleware/authMiddleware'

export const authRoute = express
  .Router()
  .get('/profile', authMiddleware, async (req, res) => {
    return await getUser(req, res)
  })
  .post('/register', async (req, res) => {
    return await userRegister(req, res)
  })
  .post('/login', async (req, res) => {
    return await userLogin(req, res)
  })
