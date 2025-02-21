import type { Response } from 'express'
import type { AuthenticatedRequest } from '../middleware/authMiddleware'
import { User } from '../models/Users'

export const getUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user
    const foundUser = await User.findById(user?.id)
    if (!foundUser) {
      res.status(404).json({ error: 'user not found' })
      return
    }
    res.json({
      username: foundUser.username,
      email: foundUser.email,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'something went wrong' })
    return
  }
}
