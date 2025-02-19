export interface UserData {
  email: string
  password: string
}

export interface UserDataRegister extends UserData {
  username: string
}
