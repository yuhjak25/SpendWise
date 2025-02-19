import axios from 'axios'
import { url } from '../../constants'
import { Expenses } from '../../types'

export const getUserExpenses = async () => {
  try {
    const response = await axios.get(`${url}/api/expenses/get-expenses`, {
      withCredentials: true,
    })

    return response.data
  } catch (error) {
    console.error('❌ Error obteniendo los gastos:', error)
    return []
  }
}

export const postExpenses = async (expensesData: Expenses) => {
  try {
    return await axios.post(`${url}/api/expenses/create-expenses`, {
      expensesData,
    })
  } catch (error) {
    console.error('Error creando el gasto:', error)
  }
}
