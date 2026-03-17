import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Running',   value: 12, color: '#3b82f6' },
  { name: 'Completed', value: 8,  color: '#22c55e' },
  { name: 'Pending',   value: 4,  color: '#f59e0b' },
]

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-slate-900 text-white rounded-xl px-3 py-2 text-[12px] shadow-lg">
      <p style={{ color: payload[0].payload.color }}>{payload[0].name}: {payload[0].value}</p>
    </div>
  )
}

export default function DoughnutChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-col gap-2 mt-2">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-2 text-[12px]">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
            <span className="flex-1 text-slate-500">{d.name}</span>
            <span className="font-semibold text-slate-800">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
