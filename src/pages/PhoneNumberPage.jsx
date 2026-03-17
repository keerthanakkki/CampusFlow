import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import Button from '@/components/ui/Button'

export default function PhoneNumberPage() {
  const { savePhone } = useAuth()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async ({ phone }) => {
    await new Promise((r) => setTimeout(r, 400))
    savePhone(phone)
    navigate('/')
  }

  const handleSkip = () => navigate('/')

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
      <div className="auth-blob w-[380px] h-[380px] -top-20 -right-20" />
      <div className="auth-blob w-[280px] h-[280px] -bottom-12 -left-12" />

      <div className="relative z-10 bg-white rounded-3xl shadow-lg p-10 w-[420px] max-w-[calc(100vw-2rem)]">
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-9 h-9 bg-green-500 rounded-[10px] flex items-center justify-center">
            <svg viewBox="0 0 20 20" fill="white" width="18" height="18">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
            </svg>
          </div>
          <span className="font-display text-[20px] font-bold text-slate-900">FlowDesk</span>
        </div>

        {/* WhatsApp icon */}
        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-5">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#16a34a">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>

        <h1 className="text-[22px] font-bold text-slate-900 mb-1">Connect WhatsApp</h1>
        <p className="text-[14px] text-slate-500 mb-7">
          Get reminders and updates directly on WhatsApp
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="text-[13px] font-medium text-slate-700 mb-1.5 block">
              Phone Number
            </label>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              {/* Country code */}
              <div className="flex items-center gap-2 px-3 py-[11px] border border-slate-200 rounded-[10px] bg-slate-50">
                <span className="text-lg leading-none">🇮🇳</span>
                <span className="text-[14px] font-medium text-slate-500">+91</span>
              </div>
              <input
                type="tel"
                placeholder="9876543210"
                className="px-3.5 py-[11px] rounded-[10px] border border-slate-200 text-[14px] outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: { value: /^[0-9]{10}$/, message: 'Enter a valid 10-digit number' },
                })}
              />
            </div>
            {errors.phone && (
              <p className="text-[12px] text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full mt-1" size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Saving…' : 'Continue to Dashboard'}
          </Button>
        </form>

        <p className="text-center text-[13px] text-slate-500 mt-4">
          <span
            onClick={handleSkip}
            className="text-green-700 font-medium cursor-pointer hover:underline"
          >
            Skip for now
          </span>
        </p>
      </div>
    </div>
  )
}
