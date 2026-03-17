import { mockProjects } from '@/data/mockProjects'
import Badge from '@/components/ui/Badge'
import { formatDueDate, getDueDateStatus } from '@/utils/dateHelpers'

export default function ProjectDueList() {
  const sorted = [...mockProjects]
    .filter((p) => p.status !== 'completed')
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5)

  return (
    <div className="flex flex-col divide-y divide-slate-100">
      {sorted.map((p) => {
        const status = getDueDateStatus(p.dueDate)
        const label  = status === 'late' ? 'Overdue' : status === 'soon' ? 'Due soon' : 'On track'
        return (
          <div key={p.id} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
            <span className="flex-1 text-[13px] font-medium text-slate-800 truncate">{p.name}</span>
            <span className="text-[11px] text-slate-400">{formatDueDate(p.dueDate)}</span>
            <Badge variant={status}>{label}</Badge>
          </div>
        )
      })}
    </div>
  )
}
