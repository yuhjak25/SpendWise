import axios from 'axios'
import { url } from '../../constants'

export const getUserExpenses = async () => {
  return await axios.get(`${url}/api/expenses/get-expenses`, {
    withCredentials: true,
  })
}
