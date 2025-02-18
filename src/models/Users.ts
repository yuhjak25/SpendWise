import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 20,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Email inválido'],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
)

export const User = model('User', userSchema)
