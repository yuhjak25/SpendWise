import type { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/Users'
import { generateAccessToken } from '../utils/jwt'
import type { AuthenticatedRequest } from '../middleware/authMiddleware'

export const userRegister = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body

    if (!(username && email && password)) {
      res.status(400).json({
        error: 'malformed request syntax',
      })
      return
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    })

    await newUser.save()

    const token = generateAccessToken({ id: newUser._id })
    if (!token) {
      res.status(500).json({ error: 'Failed to generate token' })
      return
    }

    res.cookie('token', token)
    res.json({
      username: newUser.username,
      email: newUser.email,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'something went wrong' })
    return
  }
}

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!(email && password)) {
      res.status(400).json({
        error: 'malformed request syntax',
      })
      return
    }

    const userExist = await User.findOne({ email })
    if (!userExist) {
      res.status(404).json({ error: 'user not found' })
      return
    }

    const comparePassword = await bcrypt.compare(password, userExist.password)
    if (!comparePassword) {
      res.status(400).json({ error: 'invalid credentials' })
      return
    }

    const token = generateAccessToken({ id: userExist._id })

    res.cookie('token', token)
    res.json({
      username: userExist.username,
      email: userExist.email,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'something went wrong' })
  }
}

export const userLogOut = async (_req: unknown, res: Response) => {
  try {
    res.cookie('token', '', { expires: new Date(0) })
    res.json({ message: 'logged out' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'something went wrong' })
  }
}
