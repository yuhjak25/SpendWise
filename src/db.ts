import mongoose from 'mongoose'
import { MONGODB_URI } from './utils/constants'

export const connectDb = () => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log('Connected to db.')
    })
    .catch((error) => {
      console.log('An error happened: ', error)
    })
}
