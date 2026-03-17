import { UserPlus } from 'lucide-react'
import { mockTeam } from '@/data/mockTeam'
import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { useApp } from '@/context/AppContext'

export default function TeamPage() {
  const { showToast } = useApp()

  return (
    <div className="page-enter space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[22px] font-bold text-slate-900">Team</h2>
          <p className="text-[13px] text-slate-500 mt-0.5">
            {mockTeam.length} members in your workspace
          </p>
        </div>
        <Button onClick={() => showToast('Invite sent!')} size="md">
          <UserPlus size={15} /> Invite Member
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {mockTeam.map((m) => {
          const rate = Math.round((m.done / m.tasks) * 100)
          return (
            <div
              key={m.id}
              className="bg-white rounded-xl border border-slate-200 shadow-card p-5 text-center hover:shadow-md transition-shadow"
            >
              <Avatar initials={m.initials} color={m.color} size="lg" className="mx-auto mb-3" />
              <p className="text-[15px] font-bold text-slate-900">{m.name}</p>
              <p className="text-[12px] text-slate-400 mb-3">{m.role}</p>

              <div className="flex justify-center gap-5 mb-4">
                {[['Tasks', m.tasks], ['Done', m.done], ['Rate', `${rate}%`]].map(([label, val]) => (
                  <div key={label} className="text-center">
                    <p className="text-[16px] font-bold text-green-700">{val}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wide">{label}</p>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-3">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${rate}%`, background: m.color }}
                />
              </div>

              <Badge variant={m.status}>
                {m.status === 'done' ? 'Done' : m.status === 'inprogress' ? 'In Progress' : 'To Do'}
              </Badge>
            </div>
          )
        })}
      </div>
    </div>
  )
}
