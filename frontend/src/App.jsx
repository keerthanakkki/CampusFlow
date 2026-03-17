import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import { AppProvider } from '@/context/AppContext'
import ProtectedRoute from '@/components/ui/ProtectedRoute'
import AppLayout from '@/layouts/AppLayout'

import SignInPage      from '@/pages/SignInPage'
import PhoneNumberPage from '@/pages/PhoneNumberPage'
import DashboardPage   from '@/pages/DashboardPage'
import TasksPage       from '@/pages/TasksPage'
import CalendarPage    from '@/pages/CalendarPage'
import AnalyticsPage   from '@/pages/AnalyticsPage'
import TeamPage        from '@/pages/TeamPage'
import SettingsPage    from '@/pages/SettingsPage'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/signin"       element={<SignInPage />} />
            <Route path="/setup-phone"  element={<PhoneNumberPage />} />

            {/* Protected routes — wrapped in AppLayout */}
            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route path="/"           element={<DashboardPage />} />
                <Route path="/tasks"      element={<TasksPage />} />
                <Route path="/calendar"   element={<CalendarPage />} />
                <Route path="/analytics"  element={<AnalyticsPage />} />
                <Route path="/team"       element={<TeamPage />} />
                <Route path="/settings"   element={<SettingsPage />} />
              </Route>
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
