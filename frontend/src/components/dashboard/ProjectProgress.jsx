import { mockProjects } from '@/data/mockProjects'

export default function ProjectProgress() {
  const active = mockProjects.filter((p) => p.status !== 'completed').slice(0, 5)

  return (
    <div className="flex flex-col gap-3">
      {active.map((p) => (
        <div key={p.id}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[12px] font-medium text-slate-800">{p.name}</span>
            <span className="text-[12px] text-slate-400">{p.progress}%</span>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${p.progress}%`, background: p.color }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
