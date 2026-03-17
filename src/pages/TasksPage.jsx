import { useState } from 'react'
import { Plus } from 'lucide-react'
import { mockTasks } from '@/data/mockTasks'
import TaskColumn from '@/components/tasks/TaskColumn'
import Button from '@/components/ui/Button'
import { useApp } from '@/context/AppContext'
import clsx from 'clsx'

const FILTERS = ['All', 'High', 'Medium', 'Low']

export default function TasksPage() {
  const { showToast } = useApp()
  const [filter, setFilter] = useState('All')

  const filtered = mockTasks.filter((t) => {
    if (filter === 'All')    return true
    if (filter === 'High')   return t.priority === 'high'
    if (filter === 'Medium') return t.priority === 'med'
    if (filter === 'Low')    return t.priority === 'low'
    return true
  })

  const byStatus = (status) => filtered.filter((t) => t.status === status)

  return (
    <div className="page-enter space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[22px] font-bold text-slate-900">Tasks</h2>
          <p className="text-[13px] text-slate-500 mt-0.5">Manage and track all your tasks</p>
        </div>
        <Button onClick={() => showToast('New task created!')} size="md">
          <Plus size={15} /> New Task
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={clsx(
              'px-4 py-1.5 rounded-full text-[13px] font-medium border transition-all duration-150',
              filter === f
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-white text-slate-500 border-slate-200 hover:border-green-400'
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Kanban board */}
      <div className="grid grid-cols-3 gap-5">
        <TaskColumn status="todo"       tasks={byStatus('todo')}       onAdd={(s) => showToast(`Task added to ${s}`)} />
        <TaskColumn status="inprogress" tasks={byStatus('inprogress')} onAdd={(s) => showToast(`Task added to ${s}`)} />
        <TaskColumn status="completed"  tasks={byStatus('completed')}  onAdd={(s) => showToast(`Task added to ${s}`)} />
      </div>
    </div>
  )
}
