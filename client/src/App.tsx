import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks/useStore'
import { registerUser } from './Auth/reducers/auth'
import { registerReq } from './Auth/services/auth'
import { UserDataRegister } from './types'

const App = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')

  const auth = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const submitAuth = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const userData: UserDataRegister = {
      username,
      email,
      password,
    }

    try {
      const res = await registerReq(userData)
      dispatch(registerUser(res))

      setEmail('')
      setPassword('')
      setUsername('')
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>

      {auth.isAuthenticated && auth.user && (
        <div>
          <h2>Welcome, {auth.user.name}</h2>
          <p>Email: {auth.user.email}</p>
        </div>
      )}
    </div>
  )
}

export default App
