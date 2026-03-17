import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('fd_user')
    return saved ? JSON.parse(saved) : null
  })

  const signIn = (email) => {
    const userData = { email, name: 'Jane Doe', initials: 'JD', phone: null }
    setUser(userData)
    localStorage.setItem('fd_user', JSON.stringify(userData))
    return userData
  }

  const savePhone = (phone) => {
    const updated = { ...user, phone }
    setUser(updated)
    localStorage.setItem('fd_user', JSON.stringify(updated))
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('fd_user')
  }

  return (
    <AuthContext.Provider value={{ user, signIn, savePhone, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
