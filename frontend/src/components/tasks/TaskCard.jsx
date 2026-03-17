import Badge from '@/components/ui/Badge'

export default function TaskCard({ task }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-card hover:shadow-md transition-shadow">
      <p className="text-[13px] font-semibold text-slate-800 mb-2 leading-snug">
        {task.title}
      </p>

      <div className="flex items-center justify-between">
        <Badge variant={task.priority}>
          {task.priority === 'high' ? 'High' : task.priority === 'med' ? 'Medium' : 'Low'}
        </Badge>
        <span className="text-[11px] text-slate-400">{task.dueDate}</span>
      </div>

      {task.progress > 0 && (
        <div className="mt-2.5 h-1 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${task.progress}%` }}
          />
        </div>
      )}
    </div>
  )
}
