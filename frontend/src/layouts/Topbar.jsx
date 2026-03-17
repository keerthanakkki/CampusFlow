import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Search, Bell, Settings } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

const PAGE_TITLES = {
  '/':          'Dashboard',
  '/tasks':     'Tasks',
  '/calendar':  'Calendar',
  '/analytics': 'Analytics',
  '/team':      'Team',
  '/settings':  'Settings',
}

export default function Topbar() {
  const { user } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const title = PAGE_TITLES[location.pathname] || 'FlowDesk'

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center gap-4 px-6 sticky top-0 z-30">
      {/* Page title */}
      <span className="font-display text-[18px] font-bold text-slate-900 min-w-[120px]">
        {title}
      </span>

      {/* Search */}
      <div className="flex-1 max-w-[360px] relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects, tasks, people…"
          className="w-full pl-8 pr-3 py-2 text-[13px] bg-slate-50 border border-slate-200 rounded-[10px] outline-none focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100 transition-all"
        />
      </div>

      {/* Actions */}
      <div className="ml-auto flex items-center gap-3">
        {/* Notifications */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-[9px] border border-slate-200 hover:border-green-400 transition-colors">
          <Bell size={16} className="text-slate-500" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        {/* Settings shortcut */}
        <button
          onClick={() => navigate('/settings')}
          className="w-9 h-9 flex items-center justify-center rounded-[9px] border border-slate-200 hover:border-green-400 transition-colors"
        >
          <Settings size={16} className="text-slate-500" />
        </button>

        {/* Avatar */}
        <button
          onClick={() => navigate('/settings')}
          className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-[13px] font-bold text-white border-2 border-green-300 hover:border-green-500 transition-colors"
        >
          {user?.initials || 'JD'}
        </button>
      </div>
    </header>
  )
}
