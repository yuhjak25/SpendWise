import { useState } from 'react'
import { UserDataRegister } from '../../types'
import { useAuthActions } from '../hooks/authAction'
import { registerReq } from '../services/auth'

const Register = () => {
  const [formData, setFormData] = useState<UserDataRegister>({
    username: '',
    email: '',
    password: '',
  })
  const { registerUser } = useAuthActions()

  const submitAuth = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      const res = await registerReq(formData)
      registerUser(res)
    } catch (error) {
      console.log('Error happened', error)
    }
  }

  return (
    <div>
      <form onSubmit={submitAuth}>
        <input
          type="text"
          placeholder="Name"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
