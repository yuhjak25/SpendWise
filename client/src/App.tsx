import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Auth/pages/Register'
import Login from './Auth/pages/Login'
import Expenses from './Expenses/Expenses'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Expenses />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
