import axios from 'axios'
import { url } from '../../constants'
import { UserDataRegister } from '../../types'

export const registerReq = async (userData: UserDataRegister) => {
  try {
    const res = await axios.post(`${url}/api/auth/register`, userData)
    return res.data
  } catch (error) {
    console.log('something went wrong', error)
  }
}
