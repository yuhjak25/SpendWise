import axios from 'axios'
import { url } from '../../constants'

export const getUserProfileData = async () => {
  try {
    const res = await axios.get(`${url}/api/user/profile`, {
      withCredentials: true,
    })
    return res.data
  } catch (error) {
    console.log('something went wrong', error)
  }
}
