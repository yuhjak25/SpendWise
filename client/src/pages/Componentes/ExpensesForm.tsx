import { useState } from 'react'
import { Expenses } from '../../types'
import useExpensesActions from '../../hooks/useExpensesActions'
import useError from '../../hooks/useError'
import Form from '../../share/Form'

const ExpensesForm = () => {
  const [formData, setFormData] = useState<Omit<Expenses, '_id'>>({
    amount: 0,
    category: '',
    description: '',
  })
  const { postExpensesData } = useExpensesActions()
  const { handleError } = useError()

  const handleSubmitExpenses = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'number' ? Number(value) : value,
    })
  }

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
      <Form
        fields={[
          {
            label: 'Category:',
            name: 'category',
            type: 'text',
            required: true,
          },
          {
            label: 'Description:',
            name: 'description',
            type: 'text',
            required: true,
          },
          {
            label: 'Amount:',
            name: 'amount',
            type: 'number',
            required: true,
          },
        ]}
        onSubmit={submitExpenses}
        onChange={handleSubmitExpenses}
        values={formData}
      />
    </>
  )
}

export default ExpensesForm
