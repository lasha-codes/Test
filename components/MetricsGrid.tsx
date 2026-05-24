export function MetricsGrid() {
  const metrics = [
    {
      label: 'Total Requests',
      value: '847,293',
      change: '+12.5%',
      positive: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
    },
    {
      label: 'Avg Latency',
      value: '124ms',
      change: '-8.3%',
      positive: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
    },
    {
      label: 'Cost Savings',
      value: '$12.4K',
      change: '+23.1%',
      positive: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
    },
    {
      label: 'Active Users',
      value: '3,847',
      change: '+5.2%',
      positive: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="p-4 lg:p-5 rounded-xl bg-[#1A1F1C] border border-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between mb-3 lg:mb-4">
            <div className="p-2 rounded-lg bg-white/5 text-gray-400">
              {metric.icon}
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                metric.positive
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              {metric.change}
            </span>
          </div>
          <p className="text-gray-400 text-xs lg:text-sm mb-1">{metric.label}</p>
          <p className="text-xl lg:text-2xl font-semibold">{metric.value}</p>
        </div>
      ))}
    </div>
  )
}