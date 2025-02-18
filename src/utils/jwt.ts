import jwt from 'jsonwebtoken'
import { SECRET } from './constants'

export const generateAccessToken = (payload: object): string | null => {
  try {
    return jwt.sign(payload, SECRET, { expiresIn: '1d' })
  } catch (error) {
    console.error('Error generando el token:', error)
    return null
  }
}
