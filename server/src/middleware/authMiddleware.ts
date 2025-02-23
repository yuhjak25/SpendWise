import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { SECRET } from '../utils/constants'

export interface AuthenticatedRequest extends Request {
  user?: { id: string; username: string }
}

export const authMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.cookies) {
      res.status(401).json({ message: 'unauthorized' })
      return
    }
    const { token } = req.cookies
    if (!token) {
      res.status(401).json({ message: 'unauthorized' })
      return
    }
    const user = jwt.verify(token, SECRET) as { id: string; username: string }

    if (!user) {
      res.status(401).json({ message: 'unauthorized' })
      return
    }

    req.user = user
    next()
  } catch (error) {
    res.status(401).json({ message: 'unauthorized' })
    return
  }
}
