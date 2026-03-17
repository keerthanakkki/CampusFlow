export const mockProjects = [
  { id: 1, name: 'FlowDesk v3.0',    status: 'running',   progress: 78, dueDate: '2025-03-28', color: '#22c55e' },
  { id: 2, name: 'Mobile App',        status: 'running',   progress: 52, dueDate: '2025-04-10', color: '#3b82f6' },
  { id: 3, name: 'API Refactor',      status: 'running',   progress: 91, dueDate: '2025-03-20', color: '#10b981' },
  { id: 4, name: 'Marketing Site',    status: 'pending',   progress: 35, dueDate: '2025-03-18', color: '#f59e0b' },
  { id: 5, name: 'Data Pipeline',     status: 'running',   progress: 60, dueDate: '2025-04-01', color: '#8b5cf6' },
  { id: 6, name: 'Auth Service',      status: 'completed', progress: 100, dueDate: '2025-03-01', color: '#22c55e' },
  { id: 7, name: 'Admin Dashboard',   status: 'completed', progress: 100, dueDate: '2025-02-20', color: '#3b82f6' },
  { id: 8, name: 'Payment Gateway',   status: 'pending',   progress: 15,  dueDate: '2025-03-17', color: '#ef4444' },
]

export const weeklyActivity = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  done:   [8, 12, 7, 15, 10, 5, 3],
  inProg: [5,  7, 9,  6,  8, 3, 2],
}

export const reminders = [
  { id: 1, title: 'Design Review — Alpha UI',  time: 'Today, 2:00 PM',     color: 'green' },
  { id: 2, title: 'Sprint Planning Session',    time: 'Tomorrow, 10:00 AM', color: 'amber' },
  { id: 3, title: 'Investor Deck Due',          time: 'Mar 22, 9:00 AM',    color: 'blue'  },
  { id: 4, title: 'QA Handoff — v2.1',          time: 'Mar 25, 3:00 PM',    color: 'green' },
]
