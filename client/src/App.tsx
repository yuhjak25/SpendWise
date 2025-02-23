import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './share/ProtectedRoutes'
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm'
import Username from './pages/Username'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Username />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
