import clsx from 'clsx'

export default function Avatar({ initials, color = '#22c55e', size = 'md', className = '' }) {
  const sizes = {
    sm:  'w-8 h-8 text-[11px]',
    md:  'w-9 h-9 text-[13px]',
    lg:  'w-14 h-14 text-[18px]',
  }

  return (
    <div
      className={clsx(
        'rounded-full flex items-center justify-center font-bold text-white flex-shrink-0',
        sizes[size],
        className
      )}
      style={{ background: color }}
    >
      {initials}
    </div>
  )
}
