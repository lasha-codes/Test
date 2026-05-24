'use client'

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', tokens: 2400, requests: 1800 },
  { name: 'Tue', tokens: 3200, requests: 2400 },
  { name: 'Wed', tokens: 2800, requests: 2100 },
  { name: 'Thu', tokens: 3600, requests: 2800 },
  { name: 'Fri', tokens: 4200, requests: 3200 },
  { name: 'Sat', tokens: 3100, requests: 2500 },
  { name: 'Sun', tokens: 2900, requests: 2200 },
]

const modelData = [
  { name: 'GPT-4', usage: 45, color: '#22C55E' },
  { name: 'Claude', usage: 28, color: '#10B981' },
  { name: 'Gemini', usage: 18, color: '#14B8A6' },
  { name: 'Llama', usage: 9, color: '#0D9488' },
]

export function AnalyticsChart() {
  return (
    <div className="p-4 lg:p-6 rounded-2xl bg-[#1A1F1C] border border-white/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 lg:mb-6 gap-2">
        <div>
          <h3 className="text-base lg:text-lg font-semibold">Usage Analytics</h3>
          <p className="text-gray-400 text-xs lg:text-sm mt-1">Token usage over the week</p>
        </div>
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500"></div>
            <span className="text-xs lg:text-sm text-gray-400 hidden sm:inline">Tokens</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-emerald-500"></div>
            <span className="text-xs lg:text-sm text-gray-400 hidden sm:inline">Requests</span>
          </div>
        </div>
      </div>
      
      <div className="h-48 lg:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 10 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 10 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1F1C',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Area type="monotone" dataKey="tokens" stroke="#22C55E" fill="url(#colorTokens)" strokeWidth={2} />
            <Area type="monotone" dataKey="requests" stroke="#10B981" fill="url(#colorRequests)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-white/10">
        <p className="text-xs lg:text-sm text-gray-400 mb-3 lg:mb-4">Model Distribution</p>
        <div className="space-y-2 lg:space-y-3">
          {modelData.map((model, index) => (
            <div key={index} className="flex items-center gap-3 lg:gap-4">
              <span className="text-xs lg:text-sm w-16 lg:w-20">{model.name}</span>
              <div className="flex-1 h-1.5 lg:h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${model.usage}%`, backgroundColor: model.color }}
                ></div>
              </div>
              <span className="text-xs lg:text-sm text-gray-400 w-10 lg:w-12 text-right">{model.usage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}