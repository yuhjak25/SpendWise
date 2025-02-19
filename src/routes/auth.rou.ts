import express from 'express'
import { userLogin, userRegister } from '../services/auth.serv'

export const authRoute = express
  .Router()
  .post('/register', async (req, res) => {
    return await userRegister(req, res)
  })
  .post('/login', async (req, res) => {
    return await userLogin(req, res)
  })
