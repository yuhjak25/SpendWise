import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware'
import { createExpense } from '../services/expenses.serv'

export const expensesRoute = express
  .Router()
  .post('/create-expenses', authMiddleware, async (req, res) => {
    return await createExpense(req, res)
  })
