import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoutes = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('token')

    if (!token) {
      navigate('/')
    }
  }, [navigate])

  return <Outlet />
}

export default ProtectedRoutes
