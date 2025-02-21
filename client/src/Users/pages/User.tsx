import { useUser } from '../hooks/useUser'

const User = () => {
  const username = useUser()
  return (
    <div>
      <h1>Hello {username} </h1>
    </div>
  )
}

export default User
