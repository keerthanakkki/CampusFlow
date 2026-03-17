import clsx from 'clsx'

export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl border border-slate-200 shadow-card',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ title, action }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-[14px] font-bold text-slate-900">{title}</h3>
      {action && (
        <span className="text-[12px] text-green-700 font-medium cursor-pointer hover:underline">
          {action}
        </span>
      )}
    </div>
  )
}
