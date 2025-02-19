import { useAuthActions } from '../Auth/hooks/authAction'
import { logOutReq } from '../Auth/services/auth'

const Expenses = () => {
  const { logOutUser } = useAuthActions()

  const logOut = async () => {
    const res = await logOutReq()
    if (res) {
      logOutUser()
    }
  }

  return (
    <article>
      <h1>Hello </h1>

      <button
        onClick={() => {
          logOut()
        }}>
        Log out
      </button>
    </article>
  )
}

export default Expenses
