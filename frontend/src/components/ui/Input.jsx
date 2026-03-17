import clsx from 'clsx'
import { forwardRef } from 'react'

const Input = forwardRef(function Input({ label, error, className = '', ...props }, ref) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-[13px] font-medium text-slate-700">{label}</label>
      )}
      <input
        ref={ref}
        className={clsx(
          'w-full px-3.5 py-[11px] rounded-[10px] border text-[14px] font-sans outline-none transition-all duration-150',
          'bg-white text-slate-900 placeholder:text-slate-400',
          error
            ? 'border-red-400 focus:ring-2 focus:ring-red-200'
            : 'border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100',
          className
        )}
        {...props}
      />
      {error && <p className="text-[12px] text-red-500">{error}</p>}
    </div>
  )
})

export default Input
