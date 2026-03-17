import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, CheckSquare, Calendar, BarChart2,
  Users, Settings, LogOut
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useApp } from '@/context/AppContext'
import clsx from 'clsx'

const NAV = [
  { path: '/',          label: 'Dashboard', icon: LayoutDashboard },
  { path: '/tasks',     label: 'Tasks',     icon: CheckSquare     },
  { path: '/calendar',  label: 'Calendar',  icon: Calendar        },
  { path: '/analytics', label: 'Analytics', icon: BarChart2       },
  { path: '/team',      label: 'Team',      icon: Users           },
]

export default function Sidebar() {
  const { signOut, user } = useAuth()
  const { showToast } = useApp()
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut()
    showToast('Signed out successfully', 'info')
    navigate('/signin')
  }

  return (
    <aside className="w-[240px] bg-slate-900 flex flex-col px-3 py-6 fixed top-0 left-0 h-screen z-40">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-3 mb-8">
        <div className="w-8 h-8 bg-green-500 rounded-[9px] flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 20 20" fill="white" width="16" height="16">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
          </svg>
        </div>
        <span className="font-display text-[18px] font-bold text-white">FlowDesk</span>
      </div>

      {/* Main nav */}
      <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest px-3 mb-2">
        Main Menu
      </p>

      <nav className="flex flex-col gap-0.5">
        {NAV.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) => clsx(
              'flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] text-[14px] font-medium transition-all duration-150',
              isActive
                ? 'bg-green-500/20 text-green-400'
                : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
            )}
          >
            <Icon size={17} className="flex-shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto flex flex-col gap-0.5">
        <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest px-3 mb-2">
          Account
        </p>
        <NavLink
          to="/settings"
          className={({ isActive }) => clsx(
            'flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] text-[14px] font-medium transition-all duration-150',
            isActive
              ? 'bg-green-500/20 text-green-400'
              : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
          )}
        >
          <Settings size={17} className="flex-shrink-0" />
          Settings
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] text-[14px] font-medium text-red-400 hover:bg-red-500/10 transition-all duration-150 w-full text-left"
        >
          <LogOut size={17} className="flex-shrink-0" />
          Logout
        </button>

        {/* User chip */}
        <div className="mt-4 mx-1 flex items-center gap-2.5 bg-white/5 rounded-xl p-2.5">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-[12px] font-bold text-white flex-shrink-0">
            {user?.initials || 'JD'}
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-medium text-slate-200 truncate">{user?.name || 'Jane Doe'}</p>
            <p className="text-[11px] text-slate-500 truncate">{user?.email || ''}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
