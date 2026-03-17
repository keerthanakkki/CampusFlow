import clsx from 'clsx'

const accentColors = {
  green:  'bg-green-100  text-green-600',
  blue:   'bg-blue-100   text-blue-600',
  teal:   'bg-emerald-100 text-emerald-600',
  amber:  'bg-amber-100  text-amber-600',
}

export default function StatCard({ label, value, delta, deltaType = 'positive', icon: Icon, color = 'green' }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-card p-5 relative overflow-hidden">
      {/* Decorative corner */}
      <div className={clsx(
        'absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-20',
        color === 'green' ? 'bg-green-500' :
        color === 'blue'  ? 'bg-blue-500'  :
        color === 'teal'  ? 'bg-emerald-500' : 'bg-amber-500'
      )} />

      <div className={clsx(
        'w-10 h-10 rounded-[10px] flex items-center justify-center mb-3',
        accentColors[color]
      )}>
        {Icon && <Icon size={20} />}
      </div>

      <p className="text-[12px] font-medium text-slate-500 mb-1">{label}</p>
      <p className="text-[28px] font-bold text-slate-900 leading-none">{value}</p>

      {delta && (
        <p className={clsx(
          'text-[12px] font-medium mt-1.5',
          deltaType === 'positive' ? 'text-green-600' : 'text-red-500'
        )}>
          {delta}
        </p>
      )}
    </div>
  )
}
