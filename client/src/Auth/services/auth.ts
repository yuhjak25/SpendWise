import axios from 'axios'
import { url } from '../../constants'
import { UserData } from '../../types'

export const registerReq = async (userData: UserData) => {
  try {
    const res = await axios.post(`${url}/api/auth/register`, userData, {
      withCredentials: true,
    })
    return res.data
  } catch (error) {
    console.log('something went wrong', error)
  }
}

export const loginReq = async (userData: UserData) => {
  try {
    const res = await axios.post(`${url}/api/auth/login`, userData, {
      withCredentials: true,
    })
    return res.data
  } catch (error) {
    console.log('something went wrong', error)
  }
}

export const logOutReq = async () => {
  try {
    return await axios.post(`${url}/api/auth/logout`)
  } catch (error) {
    console.log('something went wrong', error)
  }
}
