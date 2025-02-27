import { ChangeEvent, FormEvent } from 'react'

type FormTypes = 'text' | 'number' | 'email' | 'password'

interface Field<T> {
  label: string
  name: keyof T
  type: FormTypes
  required?: boolean
}

interface FormProps<T> {
  fields: Field<T>[]
  values: T
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Form = <T,>({ fields, values, onChange, onSubmit }: FormProps<T>) => {
  return (
    <form onSubmit={onSubmit}>
      {fields.map(({ label, name, type, required }) => (
        <div key={name.toString()}>
          <label>{label}:</label>
          <input
            type={type}
            name={name.toString()}
            value={values[name] as string | number}
            onChange={onChange}
            required={required}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
