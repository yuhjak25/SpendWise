import { useEffect, useState } from 'react'
import { useUser } from '../hooks/useUser'
import useExpensesActions from '../hooks/useExpensesActions'
import { useAppSelector } from '../store/hooks/useStore'
import useUserAuthActions from '../hooks/useAuthActions'
import { useNavigate } from 'react-router-dom'
import useError from '../hooks/useError'
import { Expenses } from '../types'

const Expense = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<Expenses>({
    _id: '',
    amount: 0,
    category: '',
    description: '',
  })
  const username = useUser()
  const { handleError } = useError()
  const { clearUserData } = useUserAuthActions()
  const { getExpensesData, postExpensesData, clearExpensesData } =
    useExpensesActions()
  const expenses = useAppSelector((state) => state.expenses)
  const error = useAppSelector((state) => state.error.error)

  useEffect(() => {
    if (expenses.length === 0) {
      getExpensesData()
    }
  }, [expenses, getExpensesData])

  const submitExpenses = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    try {
      await postExpensesData(formData)

      setFormData({
        _id: '',
        amount: 0,
        category: '',
        description: '',
      })
    } catch (error) {
      console.log('Something went wrong', error)
      handleError('Something went wrong')
    }
  }

  return (
    <div>
      <h1>Welcome {username} </h1>
      <form onSubmit={submitExpenses}>
        <div>
          <label>Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
          />
          <label>Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
          <label>Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: Number(e.target.value) })
            }
            required
          />
          <button type="submit">Submit</button>
        </div>
      </form>

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
