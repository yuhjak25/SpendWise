import type { Response } from 'express'
import type { AuthenticatedRequest } from '../middleware/authMiddleware'
import { Expense } from '../models/Expenses'
import { User } from '../models/Users'

export const createExpense = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const { description, amount, category } = req.body

    if (!description && !amount && category) {
      res.status(400).json({
        error: 'malformed request syntax',
      })
      return
    }

    const newExpense = new Expense({
      userId: req.user.id,
      description,
      amount,
      category,
    })

    await newExpense.save()

    await User.updateOne(
      { _id: req.user.id },
      { $push: { expenses: newExpense._id } }
    )
    console.log('nuevo gasto', newExpense)
    res.status(201).json(newExpense)
  } catch (error) {
    res
      .status(500)
      .json({ error: error instanceof Error ? error.message : 'Unknown error' })
    return
  }
}

export const getExpenses = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const expenses = await Expense.find({ userId: req.user.id })

    res.status(200).json(expenses)
  } catch (error) {
    res
      .status(500)
      .json({ error: error instanceof Error ? error.message : 'Unknown error' })
    return
  }
}

export const deleteExpenses = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const { id } = req.params

    if (!id) {
      res.status(400).json({ error: 'malformed request syntax' })
      return
    }

    const expense = await Expense.findByIdAndDelete(id)

    if (!expense) {
      res.status(404).json({ error: 'Expense not found' })
      return
    }

    res.status(204).json()
  } catch (error) {
    res
      .status(500)
      .json({ error: error instanceof Error ? error.message : 'Unknown error' })
  }
}
