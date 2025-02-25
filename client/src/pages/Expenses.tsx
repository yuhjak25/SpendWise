import { useEffect } from 'react'
import { useUser } from '../hooks/useUser'
import useExpensesActions from '../hooks/useExpensesActions'
import { useAppSelector } from '../store/hooks/useStore'
import useUserAuthActions from '../hooks/useAuthActions'
import { useNavigate } from 'react-router-dom'
import ExpensesForm from './Componentes/ExpensesForm'

const Expense = () => {
  const navigate = useNavigate()

  const username = useUser()
  const { clearUserData } = useUserAuthActions()
  const { getExpensesData, clearExpensesData } = useExpensesActions()
  const expenses = useAppSelector((state) => state.expenses)
  const error = useAppSelector((state) => state.error.error)

  useEffect(() => {
    if (expenses.length === 0) {
      getExpensesData()
    }
  }, [expenses, getExpensesData])

  return (
    <div>
      <h1>Welcome {username} </h1>

      <ExpensesForm />

      {expenses && expenses.length > 0 ? (
        <ul>
          {expenses.map((expense) => (
            <li key={expense._id}>
              {expense.date} - {expense.category} / {expense.description} -{' '}
              {expense.amount} €
              <button onClick={() => clearExpensesData(expense._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No expenses available</p>
      )}
      <button
        onClick={() => {
          navigate('/login')
          clearUserData()
        }}>
        Logout
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Expense
