export interface UserData {
  email: string
  password: string
}

export interface UserDataRegister extends UserData {
  username: string
}

export interface PublicUserData {
  email: string
  username: string
}

export type PublicUserDataType = Pick<UserDataRegister, 'email' | 'username'>

export interface Expenses {
  _id: string
  description: string
  amount: number
  category: string
  date?: string
}
