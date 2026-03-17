import { useApp } from '@/context/AppContext'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'
import clsx from 'clsx'

const icons = {
  success: <CheckCircle size={16} className="text-green-500" />,
  error:   <AlertCircle size={16} className="text-red-500" />,
  info:    <Info        size={16} className="text-blue-500" />,
}

export default function Toast() {
  const { toast } = useApp()
  if (!toast) return null

  return (
    <div className={clsx(
      'fixed bottom-6 right-6 z-[200] flex items-center gap-3',
      'bg-slate-900 text-white px-4 py-3 rounded-xl shadow-lg',
      'text-[13px] font-medium max-w-[320px]',
      'animate-[fadeSlideIn_.25s_ease_both]'
    )}>
      {icons[toast.type] || icons.success}
      <span>{toast.message}</span>
    </div>
  )
}
