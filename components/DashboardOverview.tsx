export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
      <div className="lg:col-span-2 p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-[#1A1F1C] to-[#0F140F] border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4">
          <div>
            <p className="text-gray-400 text-sm mb-2">AI Usage This Month</p>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-2">2.4M tokens</h2>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">+18.2%</span>
              <span className="text-gray-400 text-sm">vs last month</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-green-500/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
              <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
              <path d="M2 17L12 22L22 17"/>
              <path d="M2 12L12 17L22 12"/>
            </svg>
          </div>
        </div>
        <div className="mt-5 lg:mt-6 flex flex-wrap items-center gap-4 lg:gap-8">
          <div>
            <p className="text-gray-400 text-xs">Active Models</p>
            <p className="text-lg font-semibold mt-1">12</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10"></div>
          <div>
            <p className="text-gray-400 text-xs">Avg Response</p>
            <p className="text-lg font-semibold mt-1">1.2s</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10"></div>
          <div>
            <p className="text-gray-400 text-xs">Success Rate</p>
            <p className="text-lg font-semibold mt-1">99.2%</p>
          </div>
        </div>
      </div>
      
      <div className="p-5 lg:p-6 rounded-2xl bg-[#1A1F1C] border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-full blur-3xl"></div>
        <p className="text-gray-400 text-sm mb-2">Quick Actions</p>
        <div className="space-y-3 mt-4">
          <button className="w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
            <span className="text-sm">New AI Model</span>
          </button>
          <button className="w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
            </div>
            <span className="text-sm">Upload Dataset</span>
          </button>
          <button className="w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-teal-500/20 group-hover:bg-teal-500/30 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4"/>
              </svg>
            </div>
            <span className="text-sm">API Settings</span>
          </button>
        </div>
      </div>
    </div>
  )
}