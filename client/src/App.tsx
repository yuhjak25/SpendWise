import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './share/ProtectedRoutes'
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm'
import Expense from './pages/Expenses'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Expense />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
