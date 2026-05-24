export function ActivityFeed() {
  const activities = [
    {
      user: 'Sarah Chen',
      action: 'deployed',
      target: 'Marketing Campaign AI',
      time: '2 minutes ago',
      avatar: 'SC',
      color: 'bg-green-500',
    },
    {
      user: 'Michael Park',
      action: 'trained',
      target: 'Customer Support Model v2',
      time: '15 minutes ago',
      avatar: 'MP',
      color: 'bg-emerald-600',
    },
    {
      user: 'Emma Wilson',
      action: 'analyzed',
      target: 'Q4 Sales Data',
      time: '1 hour ago',
      avatar: 'EW',
      color: 'bg-teal-500',
    },
    {
      user: 'James Lee',
      action: 'generated',
      target: 'Monthly Report',
      time: '2 hours ago',
      avatar: 'JL',
      color: 'bg-cyan-500',
    },
    {
      user: 'Lisa Brown',
      action: 'optimized',
      target: 'API Endpoint Performance',
      time: '3 hours ago',
      avatar: 'LB',
      color: 'bg-green-600',
    },
  ]

  return (
    <div className="p-4 lg:p-6 rounded-2xl bg-[#1A1F1C] border border-white/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 lg:mb-6 gap-2">
        <div>
          <h3 className="text-base lg:text-lg font-semibold">Recent Activity</h3>
          <p className="text-gray-400 text-xs lg:text-sm mt-1">Latest actions from your team</p>
        </div>
        <button className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs lg:text-sm transition-all">
          View All
        </button>
      </div>
      
      <div className="space-y-2 lg:space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
          >
            <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full ${activity.color} flex items-center justify-center text-xs lg:text-sm font-medium shrink-0`}>
              {activity.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs lg:text-sm truncate">
                <span className="font-medium">{activity.user}</span>
                <span className="text-gray-400"> {activity.action} </span>
                <span className="text-green-400">{activity.target}</span>
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
            </div>
            <button className="p-1.5 lg:p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-white/10 transition-all shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}