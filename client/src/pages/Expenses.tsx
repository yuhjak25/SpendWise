import { useEffect } from 'react'
import { useUser } from '../hooks/useUser'
import useExpensesActions from '../hooks/useExpensesActions'
import { useAppSelector } from '../store/hooks/useStore'
import useUserAuthActions from '../hooks/useAuthActions'
import { useNavigate } from 'react-router-dom'

const Expenses = () => {
  const username = useUser()
  const navigate = useNavigate()
  const { clearUserData } = useUserAuthActions()
  const { getExpensesData } = useExpensesActions()
  const expenses = useAppSelector((state) => state.expenses)

  useEffect(() => {
    if (expenses.length === 0) {
      getExpensesData()
    }
  }, [expenses, getExpensesData])

  return (
    <div>
      <h1>Welcome {username} </h1>

      {expenses && expenses.length > 0 ? (
        <ul>
          {expenses.map((expense) => (
            <li key={expense._id}>
              {expense.date} - {expense.category} / {expense.description} -
              {expense.amount}
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
    </div>
  )
}

export default Expenses
