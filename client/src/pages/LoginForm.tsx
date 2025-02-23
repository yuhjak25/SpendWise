import { useState } from 'react'
import userAuthActions from '../hooks/useAuthActions'
import useError from '../hooks/useError'
import { useAppSelector } from '../store/hooks/useStore'
import { UserData } from '../types'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<UserData>({
    email: '',
    password: '',
  })
  const { setUserData } = userAuthActions()
  const { handleError } = useError()

  const error = useAppSelector((state) => state.error.error)

  const submitUserLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    try {
      await setUserData(formData)

      setFormData({
        email: '',
        password: '',
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      handleError('Something went wrong')
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={submitUserLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
      <span>
        You don't have an account?
        <button onClick={() => navigate('/register')}>Register</button>
      </span>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default LoginForm
