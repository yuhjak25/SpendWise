import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware'
import {
  createExpense,
  getExpenses,
  deleteExpenses,
  updateExpenses,
} from '../services/expenses.serv'

export const expensesRoute = express
  .Router()
  .post('/create-expenses', authMiddleware, async (req, res) => {
    return await createExpense(req, res)
  })
  .get('/get-expenses', authMiddleware, async (req, res) => {
    return await getExpenses(req, res)
  })
  .delete('/:id', authMiddleware, async (req, res) => {
    return await deleteExpenses(req, res)
  })
  .put('/:id', authMiddleware, async (req, res) => {
    return await updateExpenses(req, res)
  })