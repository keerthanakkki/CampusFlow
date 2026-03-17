import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { weeklyActivity } from '@/data/mockProjects'

const data = weeklyActivity.labels.map((day, i) => ({
  day,
  Done:        weeklyActivity.done[i],
  'In Progress': weeklyActivity.inProg[i],
}))

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-slate-900 text-white rounded-xl px-3 py-2 text-[12px] shadow-lg">
      <p className="font-semibold mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>{p.name}: {p.value}</p>
      ))}
    </div>
  )
}

export default function ActivityChart() {
  return (
    <ResponsiveContainer width="100%" height={210}>
      <BarChart data={data} barSize={14} barGap={4}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#94a3b8', fontFamily: 'DM Sans' }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#94a3b8', fontFamily: 'DM Sans' }}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc', radius: 6 }} />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ fontSize: '12px', fontFamily: 'DM Sans', paddingTop: '8px' }}
        />
        <Bar dataKey="Done"        fill="#22c55e" radius={[5,5,0,0]} />
        <Bar dataKey="In Progress" fill="#86efac" radius={[5,5,0,0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
