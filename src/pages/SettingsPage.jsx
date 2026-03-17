import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/context/AuthContext'
import { useApp } from '@/context/AppContext'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Avatar from '@/components/ui/Avatar'
import clsx from 'clsx'

const TABS = ['Profile', 'Notifications', 'Integrations', 'Security']

function Toggle({ on, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={clsx(
        'w-10 h-[22px] rounded-full relative transition-colors duration-200 flex-shrink-0',
        on ? 'bg-green-500' : 'bg-slate-200'
      )}
    >
      <span className={clsx(
        'absolute top-[3px] w-4 h-4 bg-white rounded-full shadow transition-all duration-200',
        on ? 'left-[22px]' : 'left-[3px]'
      )} />
    </button>
  )
}

function SettingRow({ label, description, children }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
      <div>
        <p className="text-[13px] font-medium text-slate-800">{label}</p>
        {description && <p className="text-[12px] text-slate-400 mt-0.5">{description}</p>}
      </div>
      {children}
    </div>
  )
}

export default function SettingsPage() {
  const { user } = useAuth()
  const { showToast } = useApp()
  const [tab, setTab] = useState('Profile')
  const [toggles, setToggles] = useState({
    push: true, email: false, dark: false, weekMon: true,
  })

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: 'Jane', lastName: 'Doe',
      email: user?.email || 'jane@flowdesk.com',
      phone: user?.phone || '+91 9876543210',
    },
  })

  const flip = (k) => setToggles((p) => ({ ...p, [k]: !p[k] }))

  const renderContent = () => {
    if (tab === 'Profile') return (
      <form onSubmit={handleSubmit(() => showToast('Profile saved!'))} className="space-y-4">
        <div className="flex items-center gap-4 mb-2">
          <Avatar initials={user?.initials || 'JD'} size="lg" />
          <Button type="button" variant="ghost" size="sm" onClick={() => showToast('Upload coming soon!')}>
            Change Photo
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input label="First name" defaultValue="Jane"  {...register('firstName')} />
          <Input label="Last name"  defaultValue="Doe"   {...register('lastName')}  />
        </div>
        <Input label="Email"    type="email" {...register('email')} />
        <Input label="WhatsApp" type="tel"   {...register('phone')} />
        <Button type="submit" size="md">Save Changes</Button>
      </form>
    )

    if (tab === 'Notifications') return (
      <div>
        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Notification Preferences
        </p>
        <SettingRow label="Push Notifications" description="Receive alerts in browser">
          <Toggle on={toggles.push}    onToggle={() => flip('push')}    />
        </SettingRow>
        <SettingRow label="Email Digest" description="Daily summary via email">
          <Toggle on={toggles.email}   onToggle={() => flip('email')}   />
        </SettingRow>
        <SettingRow label="Dark Mode" description="Use dark color scheme">
          <Toggle on={toggles.dark}    onToggle={() => flip('dark')}    />
        </SettingRow>
        <SettingRow label="Week starts Monday" description="Calendar preference">
          <Toggle on={toggles.weekMon} onToggle={() => flip('weekMon')} />
        </SettingRow>
      </div>
    )

    if (tab === 'Integrations') return (
      <div>
        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Connected Apps
        </p>
        {[
          { name: 'WhatsApp',        desc: 'Reminders & alerts',    color: '#25D366', connected: true  },
          { name: 'Slack',           desc: 'Team notifications',     color: '#4A154B', connected: false },
          { name: 'GitHub',          desc: 'Repository sync',        color: '#24292e', connected: false },
          { name: 'Google Calendar', desc: 'Event sync',             color: '#4285F4', connected: true  },
        ].map(({ name, desc, color, connected }) => (
          <SettingRow key={name} label={name} description={desc}>
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-[7px] flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                style={{ background: color }}
              >
                {name[0]}
              </div>
              <button
                onClick={() => showToast(`${connected ? 'Disconnected from' : 'Connected to'} ${name}!`)}
                className={clsx(
                  'px-3 py-1 rounded-full text-[12px] font-semibold border transition-all',
                  connected
                    ? 'bg-green-50 text-green-700 border-green-200'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-green-400'
                )}
              >
                {connected ? 'Connected' : 'Connect'}
              </button>
            </div>
          </SettingRow>
        ))}
      </div>
    )

    if (tab === 'Security') return (
      <form onSubmit={(e) => { e.preventDefault(); showToast('Password updated!') }} className="space-y-4">
        <Input label="Current password" type="password" placeholder="••••••••" />
        <Input label="New password"     type="password" placeholder="••••••••" />
        <Input label="Confirm password" type="password" placeholder="••••••••" />
        <Button type="submit" size="md">Update Password</Button>
      </form>
    )
  }

  return (
    <div className="page-enter space-y-5">
      <div>
        <h2 className="text-[22px] font-bold text-slate-900">Settings</h2>
        <p className="text-[13px] text-slate-500 mt-0.5">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
        {/* Sidebar menu */}
        <Card className="p-3">
          {TABS.map((t) => (
            <div
              key={t}
              onClick={() => setTab(t)}
              className={clsx(
                'px-3 py-2.5 rounded-[9px] text-[13px] font-medium cursor-pointer transition-all mb-0.5',
                tab === t
                  ? 'bg-green-50 text-green-700 font-semibold'
                  : 'text-slate-500 hover:bg-slate-50'
              )}
            >
              {t}
            </div>
          ))}
        </Card>

        {/* Content */}
        <Card className="p-6">
          {renderContent()}
        </Card>
      </div>
    </div>
  )
}
