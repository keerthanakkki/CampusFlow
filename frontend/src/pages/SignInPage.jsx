import { useForm } from 'react-hook-form'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function SignInPage() {
  const { signIn, user } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  // Already signed in → go home
  if (user) return <Navigate to="/" replace />

  const onSubmit = async ({ email, password }) => {
    // Simulate a brief network delay
    await new Promise((r) => setTimeout(r, 600))
    signIn(email)
    navigate('/setup-phone')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="auth-blob w-[420px] h-[420px] -top-24 -left-24" />
      <div className="auth-blob w-[300px] h-[300px] -bottom-16 -right-16" />

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

        <h1 className="text-[22px] font-bold text-slate-900 mb-1">Welcome back</h1>
        <p className="text-[14px] text-slate-500 mb-7">Sign in to your workspace</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            label="Email address"
            type="email"
            placeholder="you@company.com"
            error={errors.email?.message}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' },
            })}
          />

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[13px] font-medium text-slate-700">Password</label>
              <span className="text-[12px] text-green-700 font-medium cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>
            <Input
              type="password"
              placeholder="••••••••"
              error={errors.password?.message}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 4, message: 'Minimum 4 characters' },
              })}
            />
          </div>

          <Button type="submit" className="w-full mt-2" size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in…' : 'Sign in to FlowDesk'}
          </Button>
        </form>

        <p className="text-center text-[13px] text-slate-500 mt-5">
          Don't have an account?{' '}
          <span className="text-green-700 font-medium cursor-pointer hover:underline">
            Create one
          </span>
        </p>
      </div>
    </div>
  )
}
