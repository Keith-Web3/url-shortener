import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext({
  id: '',
  isLoggedIn: false,
  login: null,
  logout: null,
})

export function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [id, setId] = useState('')
  const history = useNavigate()

  function login(id) {
    setId(id)
    setIsLoggedIn(true)
    history('/homepage', { replace: true })
  }

  function logout() {
    setId('')
    setIsLoggedIn(false)
    history('/login', { replace: true })
  }
  return (
    <AuthContext.Provider
      value={{ id: id, isLoggedIn: isLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
