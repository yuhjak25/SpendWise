import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Auth/pages/Register'
import Login from './Auth/pages/Login'
import Expenses from './Expenses/pages/Expenses'
import ProtectedRoutes from './share/ProtectedRoutes'
import ExpenseForm from './Expenses/pages/ExpenseForm'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Expenses />} />
          <Route path="/create-expenses" element={<ExpenseForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
