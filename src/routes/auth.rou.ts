import express from 'express'
import { userLogin, userLogOut, userRegister } from '../services/auth.serv'

export const authRoute = express
  .Router()
  .post('/register', async (req, res) => {
    return await userRegister(req, res)
  })
  .post('/login', async (req, res) => {
    return await userLogin(req, res)
  })
  .post('/logout', async (_req, res) => {
    return await userLogOut(_req, res)
  })
