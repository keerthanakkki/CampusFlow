import clsx from 'clsx'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-[10px] transition-all duration-150 active:scale-[.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

  const variants = {
    primary: 'bg-green-500 hover:bg-green-600 text-white border-none',
    ghost:   'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 hover:border-green-400',
    danger:  'bg-red-500 hover:bg-red-600 text-white border-none',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-[13px]',
    md: 'px-4 py-[10px] text-[14px]',
    lg: 'px-5 py-[12px] text-[15px]',
  }

  return (
    <button className={clsx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
