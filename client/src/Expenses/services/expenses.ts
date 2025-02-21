import axios from 'axios'
import { url } from '../../constants'
import { Expenses } from '../../types'

export const getUserExpenses = async () => {
  try {
    const res = await axios.get(`${url}/api/expenses/get-expenses`, {
      withCredentials: true,
    })
    return res.data
  } catch (error) {
    console.error('❌ Error obteniendo los gastos:', error)
    return []
  }
}

export const postExpenses = async (expensesData: Expenses) => {
  try {
    const res = await axios.post(
      `${url}/api/expenses/create-expenses`,
      expensesData,
      {
        withCredentials: true,
      }
    )
    return res.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('error axios', error.response?.data)
    } else {
      console.error('Error creando el gasto:', error)
    }
  }
}

export const deleteExpenses = async (id: string) => {
  try {
    const res = await axios.delete(`${url}/api/expenses/${id}`, {
      withCredentials: true,
    })
    console.log('ID recibido para eliminar:', id)
    return res.data
  } catch (error) {
    console.error('❌ Error eliminando el gasto:', error)
  }
}
