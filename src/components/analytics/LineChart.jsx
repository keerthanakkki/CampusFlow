import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts'

const data = [
  { month: 'Jan', Completed: 6,  Running: 10 },
  { month: 'Feb', Completed: 9,  Running: 12 },
  { month: 'Mar', Completed: 8,  Running: 11 },
  { month: 'Apr', Completed: 12, Running: 14 },
  { month: 'May', Completed: 10, Running: 13 },
  { month: 'Jun', Completed: 14, Running: 15 },
]

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

export default function AnalyticsLineChart() {
  return (
    <ResponsiveContainer width="100%" height={210}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#94a3b8', fontFamily: 'DM Sans' }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#94a3b8', fontFamily: 'DM Sans' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ fontSize: '12px', fontFamily: 'DM Sans', paddingTop: '8px' }}
        />
        <Line type="monotone" dataKey="Completed" stroke="#22c55e" strokeWidth={2.5} dot={{ r: 4, fill: '#22c55e' }} activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="Running"   stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4, fill: '#3b82f6' }} activeDot={{ r: 6 }} strokeDasharray="5 4" />
      </LineChart>
    </ResponsiveContainer>
  )
}
