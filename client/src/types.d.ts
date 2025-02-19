export interface UserData {
  id: string
  email: string
  password: string
}

export interface UserDataRegister extends UserData {
  username: string
}
