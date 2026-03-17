import { useEffect } from 'react'
import { X } from 'lucide-react'
import clsx from 'clsx'

export default function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-[440px]',
    lg: 'max-w-2xl',
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className={clsx(
        'bg-white rounded-2xl shadow-lg w-full p-6 animate-[fadeSlideIn_.2s_ease_both]',
        sizes[size]
      )}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[18px] font-bold text-slate-900">{title}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-[8px] border border-slate-200 text-slate-400 hover:border-red-400 hover:text-red-500 transition-colors"
          >
            <X size={15} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
