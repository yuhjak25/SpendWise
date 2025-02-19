import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks/useStore'
import { ReactNode } from 'react'

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const auth = useAppSelector((state) => state.auth.isAuthenticated)

  if (!auth) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default ProtectedRoutes
