import Main from './components/Main'
import SignUp from './components/SignUp'
import LogIn from './components/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import EmailVerify from './components/EmailVerify'

function App() {
  const user = localStorage.getItem('token')
  return (
    <Routes>
      {user && <Route path="/" element={<Main />} />}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
    </Routes>
  )
}

export default App
