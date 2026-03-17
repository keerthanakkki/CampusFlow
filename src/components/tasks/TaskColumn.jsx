import TaskCard from './TaskCard'
import clsx from 'clsx'

const countColors = {
  todo:        'bg-amber-100 text-amber-700',
  inprogress:  'bg-blue-100  text-blue-700',
  completed:   'bg-green-100 text-green-700',
}

const LABELS = {
  todo:       'To Do',
  inprogress: 'In Progress',
  completed:  'Completed',
}

export default function TaskColumn({ status, tasks, onAdd }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[13px] font-bold text-slate-900">{LABELS[status]}</span>
        <span className={clsx(
          'w-5 h-5 rounded-[6px] flex items-center justify-center text-[11px] font-bold',
          countColors[status]
        )}>
          {tasks.length}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <button
        onClick={() => onAdd?.(status)}
        className="w-full mt-3 py-2.5 border-2 border-dashed border-slate-200 rounded-xl text-[12px] text-slate-400 hover:border-green-400 hover:text-green-600 transition-colors"
      >
        + Add task
      </button>
    </div>
  )
}
