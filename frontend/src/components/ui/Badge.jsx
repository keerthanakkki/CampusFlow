import clsx from 'clsx'

export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default:    'bg-slate-100 text-slate-600',
    green:      'bg-green-100 text-green-700',
    blue:       'bg-blue-100 text-blue-700',
    amber:      'bg-amber-100 text-amber-700',
    red:        'bg-red-100 text-red-700',
    purple:     'bg-purple-100 text-purple-700',
    high:       'bg-red-100 text-red-700',
    med:        'bg-amber-100 text-amber-700',
    low:        'bg-green-100 text-green-700',
    done:       'bg-green-100 text-green-700',
    inprogress: 'bg-blue-100 text-blue-700',
    todo:       'bg-slate-100 text-slate-600',
    ontrack:    'bg-green-100 text-green-700',
    soon:       'bg-amber-100 text-amber-700',
    late:       'bg-red-100 text-red-700',
  }

  return (
    <span className={clsx(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold',
      variants[variant] || variants.default,
      className
    )}>
      {children}
    </span>
  )
}
