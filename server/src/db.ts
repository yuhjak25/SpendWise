import mongoose from 'mongoose'
import { MONGODB_URI } from './utils/constants'

if (!MONGODB_URI) {
  console.log('missing uri')
  process.exit(1)
}

export const connectDb = () => {
  mongoose
    .connect(MONGODB_URI!)
    .then(() => {
      console.log('Connected to db.')
    })
    .catch((error) => {
      console.log('An error happened: ', error)
      process.exit(1)
    })
}
