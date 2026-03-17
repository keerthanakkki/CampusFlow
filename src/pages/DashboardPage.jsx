import { useNavigate } from 'react-router-dom'
import { LayoutDashboard, BarChart2, CheckSquare, Clock } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import Card, { CardHeader } from '@/components/ui/Card'
import StatCard from '@/components/dashboard/StatCard'
import ActivityChart from '@/components/dashboard/ActivityChart'
import ReminderPanel from '@/components/dashboard/ReminderPanel'
import TeamPanel from '@/components/dashboard/TeamPanel'
import ProjectProgress from '@/components/dashboard/ProjectProgress'
import ProjectDueList from '@/components/dashboard/ProjectDueList'

export default function DashboardPage() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const firstName = user?.name?.split(' ')[0] || 'there'

  return (
    <div className="page-enter space-y-5">
      {/* Header */}
      <div>
        <h2 className="text-[22px] font-bold text-slate-900">
          Good morning, {firstName} 👋
        </h2>
        <p className="text-[13px] text-slate-500 mt-0.5">
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Total Projects"   value="24" delta="+3 this month"  deltaType="positive" icon={LayoutDashboard} color="green" />
        <StatCard label="Running"          value="12" delta="50% of total"   deltaType="positive" icon={BarChart2}       color="blue"  />
        <StatCard label="Completed"        value="8"  delta="+2 this week"   deltaType="positive" icon={CheckSquare}     color="teal"  />
        <StatCard label="Pending"          value="4"  delta="2 overdue"      deltaType="negative" icon={Clock}           color="amber" />
      </div>

      {/* Mid row */}
      <div className="grid grid-cols-[1fr_320px] gap-4">
        <Card className="p-5">
          <CardHeader title="Weekly Activity" action="Full report →" />
          <ActivityChart />
        </Card>

        <Card className="p-5">
          <CardHeader title="Upcoming Reminders" action="View all →" />
          <ReminderPanel />
        </Card>
      </div>

      {/* Due dates */}
      <Card className="p-5">
        <CardHeader title="Project Due Dates" action="View all →" />
        <ProjectDueList />
      </Card>

      {/* Bottom row */}
      <div className="grid grid-cols-[1fr_320px] gap-4">
        <Card className="p-5">
          <CardHeader
            title="Team Collaboration"
            action={<span onClick={() => navigate('/team')} className="cursor-pointer">View team →</span>}
          />
          <TeamPanel />
        </Card>

        <Card className="p-5">
          <CardHeader title="Project Progress" />
          <ProjectProgress />
        </Card>
      </div>
    </div>
  )
}
