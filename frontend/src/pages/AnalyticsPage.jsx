import Card, { CardHeader } from '@/components/ui/Card'
import StatCard from '@/components/dashboard/StatCard'
import AnalyticsLineChart from '@/components/analytics/LineChart'
import DoughnutChart from '@/components/analytics/DoughnutChart'
import { TrendingUp, Clock, CheckSquare } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="page-enter space-y-5">
      <div>
        <h2 className="text-[22px] font-bold text-slate-900">Analytics</h2>
        <p className="text-[13px] text-slate-500 mt-0.5">Track performance and project insights</p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Tasks Completed"      value="142" delta="+18% this month"   deltaType="positive" icon={CheckSquare} color="green" />
        <StatCard label="On-time Delivery"     value="87%" delta="+5% this month"    deltaType="positive" icon={TrendingUp}  color="teal"  />
        <StatCard label="Avg Completion (days)" value="4.2" delta="-0.8 vs last month" deltaType="positive" icon={Clock}      color="blue"  />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-[1fr_280px] gap-4">
        <Card className="p-5">
          <CardHeader title="Project Completion Over Time" />
          <AnalyticsLineChart />
        </Card>

        <Card className="p-5">
          <CardHeader title="Status Breakdown" />
          <DoughnutChart />
        </Card>
      </div>

      {/* Monthly summary table */}
      <Card className="p-5">
        <CardHeader title="Monthly Summary" />
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-slate-100">
                {['Month','Total Projects','Completed','Running','Pending','On-time %'].map((h) => (
                  <th key={h} className="text-left py-2 pr-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['January',  20, 6,  10, 4, '82%'],
                ['February', 22, 9,  11, 2, '84%'],
                ['March',    24, 8,  12, 4, '87%'],
              ].map(([month, total, done, running, pending, rate]) => (
                <tr key={month} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="py-3 pr-4 font-medium text-slate-800">{month}</td>
                  <td className="py-3 pr-4 text-slate-600">{total}</td>
                  <td className="py-3 pr-4 text-green-600 font-medium">{done}</td>
                  <td className="py-3 pr-4 text-blue-600 font-medium">{running}</td>
                  <td className="py-3 pr-4 text-amber-600 font-medium">{pending}</td>
                  <td className="py-3 pr-4 text-slate-700 font-semibold">{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
