import { useState } from 'react'
import { useExpenses } from '../hook/useExpenses'
import { Expenses } from '../../types'
import { useAppSelector } from '../../store/hooks/useStore'
import { useNavigate } from 'react-router-dom'

const ExpenseForm = () => {
  const [formData, setFormData] = useState<Expenses>({
    description: '',
    amount: 0,
    category: '',
  })
  const { createAExpense } = useExpenses()
  console.log(
    'Estado global:',
    useAppSelector((state) => state.expenses)
  )
  const navigate = useNavigate()

  const submitExpense = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      const newExpenses = await createAExpense(formData)
      setFormData({
        description: '',
        amount: 0,
        category: '',
      })

      console.log('gastos: ', newExpenses)
    } catch (error) {
      console.log('Error happened', error)
    }
  }

  return (
    <div>
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
        <button type="submit" onClick={() => navigate('/dashboard')}>
          Añadir gasto
        </button>
      </form>
    </div>
  )
}

export default ExpenseForm
