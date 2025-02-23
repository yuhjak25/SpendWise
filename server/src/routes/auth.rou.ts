import express from 'express'
import { userLogin, userLogOut, userRegister } from '../services/auth.serv'
import { schemaValidator } from '../middleware/schemaValidator'
import { loginSchema, registerSchema } from '../schemas/auth.validation'

export const authRoute = express
  .Router()
  .post('/register', schemaValidator(registerSchema), async (req, res) => {
    return await userRegister(req, res)
  })
  .post('/login', schemaValidator(loginSchema), async (req, res) => {
    return await userLogin(req, res)
  })
  .post('/logout', async (_req, res) => {
    return await userLogOut(_req, res)
  })
