export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', path: '/'          },
  { id: 'tasks',     label: 'Tasks',     path: '/tasks'     },
  { id: 'calendar',  label: 'Calendar',  path: '/calendar'  },
  { id: 'analytics', label: 'Analytics', path: '/analytics' },
  { id: 'team',      label: 'Team',      path: '/team'      },
]

export const PRIORITY_CONFIG = {
  high: { label: 'High',   bg: 'bg-red-100',    text: 'text-red-700'    },
  med:  { label: 'Medium', bg: 'bg-amber-100',  text: 'text-amber-700'  },
  low:  { label: 'Low',    bg: 'bg-green-100',  text: 'text-green-700'  },
}

export const STATUS_CONFIG = {
  done:        { label: 'Done',        bg: 'bg-green-100', text: 'text-green-700'  },
  inprogress:  { label: 'In Progress', bg: 'bg-blue-100',  text: 'text-blue-700'   },
  todo:        { label: 'To Do',       bg: 'bg-slate-100', text: 'text-slate-600'  },
}

export const REPEAT_OPTIONS = ['Never', 'Daily', 'Weekly', 'Monthly', 'Yearly']

export const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
]

export const DAY_NAMES_SHORT = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
