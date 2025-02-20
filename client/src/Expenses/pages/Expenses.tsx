import { useEffect } from 'react'
import { useAuthActions } from '../../Auth/hooks/authAction'
import { logOutReq } from '../../Auth/services/auth'
import { getUserExpenses } from '../services/expenses'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useStore'
import { getExpenses } from '../reducers/expenses'
import type { Expenses } from '../../types'
import { useNavigate } from 'react-router-dom'

const Expenses = () => {
  const { logOutUser } = useAuthActions()
  const dispatch = useAppDispatch()
  const expenses = useAppSelector((state) => state.expenses)
  console.log(
    'Estado global:',
    useAppSelector((state) => state.expenses)
  )
  const navigate = useNavigate()

  const logOut = async () => {
    try {
      const res = await logOutReq()
      if (res) logOutUser()
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getUserExpenses()
        console.log('Datos recibidos: ', data)
        if (data.length > 0) {
          dispatch(getExpenses(data))
        }
      } catch (error) {
        console.error('❌ Error obteniendo los gastos:', error)
      }
    }

    fetchExpenses()
  }, [dispatch])

  return (
    <article>
      <h1>Gastos</h1>

      <button onClick={logOut}>Log out</button>

      {Array.isArray(expenses) && expenses.length > 0 ? (
        <ul>
          {expenses.map((expense) => (
            <li key={expense._id}>
              {expense.description} - {expense.amount}€
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay gastos registrados.</p>
      )}

      <button onClick={() => navigate('/create-expenses')}>Añadir gasto</button>
    </article>
  )
}

export default Expenses
