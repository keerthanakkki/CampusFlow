import { useState } from 'react'
import { Plus } from 'lucide-react'
import CalendarGrid from '@/components/calendar/CalendarGrid'
import EventModal from '@/components/calendar/EventModal'
import Button from '@/components/ui/Button'
import { useApp } from '@/context/AppContext'

export default function CalendarPage() {
  const { showToast } = useApp()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [addEventFn, setAddEventFn] = useState(null)

  const handleDateClick = ({ day, month, year, addEvent }) => {
    setSelectedDate({ day, month, year })
    setAddEventFn(() => addEvent)
    setModalOpen(true)
  }

  const handleSave = (data) => {
    addEventFn?.(selectedDate.day)
    showToast(`${data.type} "${data.title}" saved!`)
  }

  return (
    <div className="page-enter space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[22px] font-bold text-slate-900">Calendar</h2>
          <p className="text-[13px] text-slate-500 mt-0.5">
            Click any date to add a reminder or event
          </p>
        </div>
        <Button onClick={() => { setSelectedDate(null); setModalOpen(true) }} size="md">
          <Plus size={15} /> New Event
        </Button>
      </div>

      <CalendarGrid onDateClick={handleDateClick} />

      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        selectedDate={selectedDate}
      />
    </div>
  )
}
