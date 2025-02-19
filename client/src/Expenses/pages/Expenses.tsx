import { useEffect } from 'react'
import { useAuthActions } from '../../Auth/hooks/authAction'
import { logOutReq } from '../../Auth/services/auth'
import { getUserExpenses } from '../services/expenses'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useStore'
import { getExpenses } from '../reducers/expenses'

const Expenses = () => {
  const { logOutUser } = useAuthActions()
  const dispatch = useAppDispatch()
  const expenses = useAppSelector((state) => state.expenses)

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

        if (data.length > 0) {
          dispatch(getExpenses(data))
        }
      } catch (error) {
        console.error('❌ Error obteniendo los gastos:', error)
      }
    }

    fetchExpenses()
  }, [dispatch])

  console.log('Gastos en Redux:', expenses)

  return (
    <article>
      <h1>Gastos</h1>

      <button onClick={logOut}>Log out</button>

      {expenses.length === 0 ? (
        <p>No hay gastos registrados.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense._id}>
              {expense.description} - {expense.amount}€
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default Expenses
