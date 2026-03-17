import { format, isToday, isTomorrow, parseISO } from 'date-fns'

export function formatDueDate(dateStr) {
  try {
    const d = parseISO(dateStr)
    if (isToday(d))    return 'Today'
    if (isTomorrow(d)) return 'Tomorrow'
    return format(d, 'MMM d')
  } catch {
    return dateStr
  }
}

export function getDueDateStatus(dateStr) {
  try {
    const d = parseISO(dateStr)
    const now = new Date()
    if (d < now) return 'late'
    const diff = (d - now) / (1000 * 60 * 60 * 24)
    if (diff <= 2) return 'soon'
    return 'ontrack'
  } catch {
    return 'ontrack'
  }
}

export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

export function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}
