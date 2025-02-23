import { useState } from 'react'
import userAuthActions from '../hooks/useAuthActions'
import useError from '../hooks/useError'
import { useAppSelector } from '../store/hooks/useStore'
import { UserDataRegister } from '../types'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<UserDataRegister>({
    username: '',
    email: '',
    password: '',
  })
  const { setNewUserData } = userAuthActions()
  const { handleError } = useError()

  const error = useAppSelector((state) => state.error.error)

  const submitUserRegister = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    try {
      await setNewUserData(formData)

      setFormData({
        username: '',
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

      <form onSubmit={submitUserRegister}>
        <div>
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            id="user"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />
        </div>
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
        You have an account?
        <button onClick={() => navigate('/login')}>Login</button>
      </span>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default RegisterForm
