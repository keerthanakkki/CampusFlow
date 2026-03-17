import { mockTeam } from '@/data/mockTeam'
import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'

export default function TeamPanel() {
  return (
    <div className="flex flex-col divide-y divide-slate-100">
      {mockTeam.slice(0, 4).map((m) => (
        <div key={m.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
          <Avatar initials={m.initials} color={m.color} size="sm" />
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-slate-800 truncate">{m.name}</p>
            <p className="text-[11px] text-slate-400 truncate">{m.currentTask}</p>
          </div>
          <Badge variant={m.status}>
            {m.status === 'done' ? 'Done' : m.status === 'inprogress' ? 'In Progress' : 'To Do'}
          </Badge>
        </div>
      ))}
    </div>
  )
}
