import { useAppSelector } from '../store/hooks/useStore'

const Expenses = () => {
  const auth = useAppSelector((state) => state.auth)
  return (
    <article>
      <h1>Hello {auth.user?.username} </h1>
    </article>
  )
}

export default Expenses
