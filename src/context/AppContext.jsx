import { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [toast, setToast] = useState(null)

  const showToast = useCallback((message, type = 'success', duration = 2800) => {
    setToast({ message, type, id: Date.now() })
    setTimeout(() => setToast(null), duration)
  }, [])

  return (
    <AppContext.Provider value={{ toast, showToast }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
