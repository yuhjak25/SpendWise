import { useUser } from '../hooks/useUser'

const Username = () => {
  const username = useUser()

  return <p>Welcome, {username}!</p>
}

export default Username
