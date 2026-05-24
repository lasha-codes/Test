export function AIPanel() {
  const suggestions = [
    { title: 'Generate Report', desc: 'Create weekly summary', icon: '📊' },
    { title: 'Analyze Data', desc: 'Find patterns in data', icon: '🔍' },
    { title: 'Create Content', desc: 'Generate marketing copy', icon: '✍️' },
  ]

  return (
    <div className="p-4 lg:p-6 rounded-2xl bg-[#1A1F1C] border border-white/10 h-full">
      <div className="flex items-center justify-between mb-4 lg:mb-6">
        <div>
          <h3 className="text-base lg:text-lg font-semibold">AI Assistant</h3>
          <p className="text-gray-400 text-xs lg:text-sm mt-1">Powered by GPT-4</p>
        </div>
        <div className="relative">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
        </div>
      </div>
      
      <div className="mb-4 lg:mb-6">
        <div className="flex gap-2 lg:gap-3">
          <input
            type="text"
            placeholder="Ask anything..."
            className="flex-1 px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl bg-white/5 border border-white/10 text-sm placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
          />
          <button className="p-2.5 lg:p-3 rounded-xl bg-green-500 hover:bg-green-600 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="space-y-2 lg:space-y-3">
        <p className="text-xs lg:text-sm text-gray-400">Quick Actions</p>
        {suggestions.map((item, index) => (
          <button
            key={index}
            className="w-full p-3 lg:p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="text-sm font-medium group-hover:text-green-400 transition-colors">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-4 lg:mt-6 p-3 lg:p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-green-500/20">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
              <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
              <path d="M2 17L12 22L22 17"/>
              <path d="M2 12L12 17L22 12"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Pro Tip</p>
            <p className="text-xs text-gray-400 mt-1">Use keyboard shortcut ⌘K to quickly open AI assistant</p>
          </div>
        </div>
      </div>
    </div>
  )
}