export interface UserData {
  email: string
  password: string
}

export interface UserDataRegister extends UserData {
  username: string
}

export interface Expenses {
  _id: string
  description: string
  amount: number
  category: string
}
