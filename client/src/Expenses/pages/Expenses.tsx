import { useEffect, useState } from 'react'
import { useAuthActions } from '../../Auth/hooks/authAction'
import { logOutReq } from '../../Auth/services/auth'
import { getUserExpenses } from '../services/expenses'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useStore'
import { getExpenses } from '../reducers/expenses'
import type { Expenses } from '../../types'
import { useExpenses } from '../hook/useExpenses'

const Expenses = () => {
  const [formData, setFormData] = useState<Expenses>({
    description: '',
    amount: 0,
    category: '',
  })
  const { logOutUser } = useAuthActions()
  const { createAExpense } = useExpenses()
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

  const submitExpense = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      await createAExpense(formData)
      setFormData({
        description: '',
        amount: 0,
        category: '',
      })
    } catch (error) {
      console.log('Error happened', error)
    }
  }

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

      <form onSubmit={submitExpense}>
        <input
          type="text"
          placeholder="Descripción"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: Number(e.target.value) })
          }
        />
        <input
          type="text"
          placeholder="Categoría"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />
        <button type="submit">Añadir gasto</button>
      </form>
    </article>
  )
}

export default Expenses
