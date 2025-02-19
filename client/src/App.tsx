import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Auth/pages/Register'
import Login from './Auth/pages/Login'
import ProtectedRoutes from './share/ProtectedRoutes'
import Expenses from './Expenses/pages/Expenses'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route
            element={
              <ProtectedRoutes>
                <Expenses />
              </ProtectedRoutes>
            }>
            <Route path="/dashboard" element={<Expenses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
