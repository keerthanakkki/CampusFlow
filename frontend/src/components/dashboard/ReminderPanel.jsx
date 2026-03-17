import { reminders } from '@/data/mockProjects'
import clsx from 'clsx'

const dotColor = {
  green: 'bg-green-500',
  amber: 'bg-amber-500',
  blue:  'bg-blue-500',
}

export default function ReminderPanel() {
  return (
    <div className="flex flex-col divide-y divide-slate-100">
      {reminders.map((r) => (
        <div key={r.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
          <span className={clsx('w-2 h-2 rounded-full mt-1.5 flex-shrink-0', dotColor[r.color] || 'bg-green-500')} />
          <div>
            <p className="text-[13px] font-medium text-slate-800">{r.title}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">{r.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
