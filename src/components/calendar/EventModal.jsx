import { useForm } from 'react-hook-form'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { REPEAT_OPTIONS } from '@/utils/constants'
import clsx from 'clsx'

export default function EventModal({ isOpen, onClose, onSave, selectedDate }) {
  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm({
    defaultValues: { type: 'Event', allDay: false, repeat: 'Never' }
  })

  const type   = watch('type')
  const allDay = watch('allDay')

  const dateStr = selectedDate
    ? `${selectedDate.year}-${String(selectedDate.month).padStart(2,'0')}-${String(selectedDate.day).padStart(2,'0')}`
    : ''

  const onSubmit = (data) => {
    onSave?.({ ...data, date: dateStr })
    reset()
    onClose()
  }

  const handleClose = () => { reset(); onClose() }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={`New ${type}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Event / Reminder toggle */}
        <div className="flex border border-slate-200 rounded-[10px] overflow-hidden">
          {['Event', 'Reminder'].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setValue('type', t)}
              className={clsx(
                'flex-1 py-2.5 text-[13px] font-semibold transition-all',
                type === t
                  ? 'bg-green-500 text-white'
                  : 'text-slate-500 hover:bg-slate-50'
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Title */}
        <Input
          label={type === 'Event' ? 'Event title' : 'Reminder title'}
          placeholder={type === 'Event' ? 'e.g. Team standup' : 'e.g. Review document'}
          error={errors.title?.message}
          {...register('title', { required: 'Title is required' })}
        />

        {/* Date + Time */}
        <div className="grid grid-cols-2 gap-3">
          <Input label="Date" type="date" defaultValue={dateStr} {...register('date')} />
          <Input label="Time" type="time" defaultValue="09:00" disabled={allDay} {...register('time')} />
        </div>

        {/* Repeat + All-day */}
        <div className="grid grid-cols-2 gap-3 items-end">
          <div>
            <label className="text-[13px] font-medium text-slate-700 mb-1.5 block">Repeat</label>
            <select
              className="w-full px-3.5 py-[11px] border border-slate-200 rounded-[10px] text-[14px] outline-none focus:border-green-500 bg-white"
              {...register('repeat')}
            >
              {REPEAT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <label className="flex items-center gap-2.5 pb-3 cursor-pointer select-none text-[13px] text-slate-700">
            <input
              type="checkbox"
              className="w-4 h-4 accent-green-500"
              {...register('allDay')}
            />
            All day
          </label>
        </div>

        {/* Footer */}
        <div className="flex gap-3 pt-1">
          <Button type="button" variant="ghost" className="flex-1" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" className="flex-[2]">
            Save {type}
          </Button>
        </div>
      </form>
    </Modal>
  )
}
