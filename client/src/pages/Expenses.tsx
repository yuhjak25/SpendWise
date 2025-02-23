import { useEffect } from 'react'
import { useUser } from '../hooks/useUser'
import useExpensesActions from '../hooks/useExpensesActions'
import { useAppSelector } from '../store/hooks/useStore'

const Expenses = () => {
  const username = useUser()
  const { getExpensesData } = useExpensesActions()
  const expenses = useAppSelector((state) => state.expenses)

  useEffect(() => {
    getExpensesData()
  }, [getExpensesData])

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
    </div>
  )
}

export default Expenses
