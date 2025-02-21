import { useEffect } from 'react'
import { useAuthActions } from '../../Auth/hooks/authAction'
import { logOutReq } from '../../Auth/services/auth'
import { getUserExpenses } from '../services/expenses'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useStore'
import { getExpenses } from '../reducers/expenses'
import type { Expenses } from '../../types'
import { useNavigate } from 'react-router-dom'
import { useExpenses } from '../hook/useExpenses'
import { useUser } from '../../Users/hooks/useUser'

const Expenses = () => {
  const username = useUser()
  const { logOutUser } = useAuthActions()
  const { deleteAExpense } = useExpenses()
  const dispatch = useAppDispatch()
  const expenses = useAppSelector((state) => state.expenses)
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
        dispatch(getExpenses(data))
      } catch (error) {
        console.error('❌ Error obteniendo los gastos:', error)
      }
    }

    fetchExpenses()
  }, [dispatch])

  return (
    <article>
      <h1> Bienvenido {username} </h1>
      <h1>Gastos</h1>

      <button onClick={logOut}>Log out</button>

      {Array.isArray(expenses) && expenses.length > 0 ? (
        <ul>
          {expenses
            .filter((expense) => expense !== undefined)
            .map((expense) => (
              <li key={expense._id}>
                {expense.category} {expense.description} - {expense.amount}€ -
                {expense.date}
                <button onClick={() => deleteAExpense(expense._id)}>
                  Eliminar
                </button>
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
