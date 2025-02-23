import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware'
import {
  createExpense,
  getExpenses,
  deleteExpenses,
  updateExpenses,
} from '../services/expenses.serv'
import { schemaValidator } from '../middleware/schemaValidator'
import { expenseSchema } from '../schemas/expenses.validation'

export const expensesRoute = express
  .Router()
  .post('/create-expenses', schemaValidator(expenseSchema), authMiddleware, async (req, res) => {
    return await createExpense(req, res)
  })
  .get('/get-expenses', schemaValidator(expenseSchema), authMiddleware, async (req, res) => {
    return await getExpenses(req, res)
  })
  .delete('/:id', schemaValidator(expenseSchema), authMiddleware, async (req, res) => {
    return await deleteExpenses(req, res)
  })
  .put('/:id', schemaValidator(expenseSchema), authMiddleware, async (req, res) => {
    return await updateExpenses(req, res)
  })