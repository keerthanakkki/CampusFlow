import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MONTH_NAMES, DAY_NAMES_SHORT } from '@/utils/constants'
import { getDaysInMonth, getFirstDayOfMonth } from '@/utils/dateHelpers'
import clsx from 'clsx'

// Initial events map: key = "YYYY-M-D"
const INITIAL_EVENTS = {
  '2025-3-5': true, '2025-3-12': true, '2025-3-17': true,
  '2025-3-22': true, '2025-3-28': true,
}

export default function CalendarGrid({ onDateClick }) {
  const today = new Date()
  const [current, setCurrent] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [events, setEvents] = useState(INITIAL_EVENTS)

  const yr  = current.getFullYear()
  const mo  = current.getMonth()

  const daysInMonth = getDaysInMonth(yr, mo)
  const firstDay    = getFirstDayOfMonth(yr, mo)
  const daysInPrev  = getDaysInMonth(yr, mo - 1)

  // Build 42-cell grid
  const cells = []
  for (let i = firstDay - 1; i >= 0; i--)
    cells.push({ day: daysInPrev - i, current: false })
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ day: d, current: true })
  while (cells.length < 42)
    cells.push({ day: cells.length - firstDay - daysInMonth + 1, current: false })

  const addEvent = (day) => {
    setEvents((prev) => ({ ...prev, [`${yr}-${mo + 1}-${day}`]: true }))
  }

  const handleClick = (cell) => {
    if (!cell.current) return
    onDateClick?.({ day: cell.day, month: mo + 1, year: yr, addEvent })
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-card p-5">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={() => setCurrent(new Date(yr, mo - 1, 1))}
          className="w-8 h-8 flex items-center justify-center rounded-[8px] border border-slate-200 text-slate-400 hover:border-green-400 hover:text-green-600 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <h3 className="text-[16px] font-bold text-slate-900">
          {MONTH_NAMES[mo]} {yr}
        </h3>
        <button
          onClick={() => setCurrent(new Date(yr, mo + 1, 1))}
          className="w-8 h-8 flex items-center justify-center rounded-[8px] border border-slate-200 text-slate-400 hover:border-green-400 hover:text-green-600 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 mb-1">
        {DAY_NAMES_SHORT.map((d) => (
          <div key={d} className="text-center text-[11px] font-semibold text-slate-400 py-1.5">
            {d}
          </div>
        ))}
      </div>

      {/* Cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((cell, i) => {
          const isToday =
            cell.current &&
            cell.day === today.getDate() &&
            mo === today.getMonth() &&
            yr === today.getFullYear()
          const key = `${yr}-${mo + 1}-${cell.day}`
          const hasEvent = cell.current && events[key]

          return (
            <div
              key={i}
              onClick={() => handleClick(cell)}
              className={clsx(
                'aspect-square flex flex-col items-center justify-center rounded-[8px] text-[13px] font-medium relative transition-all duration-100',
                cell.current
                  ? 'cursor-pointer hover:bg-green-50 hover:text-green-700'
                  : 'text-slate-300 cursor-default',
                isToday && 'bg-green-500 text-white hover:bg-green-600 hover:text-white'
              )}
            >
              {cell.day}
              {hasEvent && (
                <span className={clsx(
                  'absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full',
                  isToday ? 'bg-white' : 'bg-green-500'
                )} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
