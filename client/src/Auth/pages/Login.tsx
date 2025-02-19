import { useState } from 'react'
import { UserData } from '../../types'
import { useAuthActions } from '../hooks/authAction'
import { loginReq } from '../services/auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState<UserData>({
    email: '',
    password: '',
  })
  const { loginUser } = useAuthActions()
  const navigate = useNavigate()

  const submitAuth = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      const res = await loginReq(formData)
      loginUser(res)
      navigate('/dashboard')
    } catch (error) {
      console.log('Error happened', error)
    }
  }

  return (
    <div>
      <form onSubmit={submitAuth}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        You don't have an account?
        <button onClick={() => navigate('/register')}>Register</button>
      </p>
    </div>
  )
}

export default Register
