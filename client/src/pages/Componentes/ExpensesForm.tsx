import { useState } from 'react'
import { Expenses } from '../../types'
import useExpensesActions from '../../hooks/useExpensesActions'
import useError from '../../hooks/useError'

const ExpensesForm = () => {
  const [formData, setFormData] = useState<Omit<Expenses, '_id'>>({
    amount: 0,
    category: '',
    description: '',
  })
  const { postExpensesData } = useExpensesActions()
  const { handleError } = useError()

  const submitExpenses = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    try {
      await postExpensesData({ ...formData, _id: '' })
      setFormData({ amount: 0, category: '', description: '' })
    } catch (error) {
      console.error('Error submitting expense:', error)
      handleError('Something went wrong')
    }
  }

  return (
    <>
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
            min="0"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: Number(e.target.value) })
            }
            required
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default ExpensesForm
