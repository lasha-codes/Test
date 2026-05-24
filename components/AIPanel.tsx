'use client'

import { useState } from 'react'

type QuickAction = 'generate-report' | 'analyze-data' | 'create-content'

interface ResponseData {
  title: string
  content: React.ReactNode
}

export function AIPanel() {
  const [inputValue, setInputValue] = useState('')
  const [selectedAction, setSelectedAction] = useState<QuickAction | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [responseData, setResponseData] = useState<ResponseData | null>(null)

  const suggestions = [
    { 
      title: 'Generate Report', 
      desc: 'Create weekly summary', 
      icon: '📊',
      action: 'generate-report' as QuickAction
    },
    { 
      title: 'Analyze Data', 
      desc: 'Find patterns in data', 
      icon: '🔍',
      action: 'analyze-data' as QuickAction
    },
    { 
      title: 'Create Content', 
      desc: 'Generate marketing copy', 
      icon: '✍️',
      action: 'create-content' as QuickAction
    },
  ]

  const handleQuickAction = async (action: QuickAction) => {
    setSelectedAction(action)
    setIsLoading(true)
    setResponseData(null)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    if (action === 'generate-report') {
      setResponseData({
        title: 'Weekly AI Usage Report',
        content: (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-xs text-gray-400">Total Tokens</p>
                <p className="text-xl font-semibold text-green-400">2.4M</p>
                <p className="text-xs text-green-400">+18.2% vs last week</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-xs text-gray-400">API Calls</p>
                <p className="text-xl font-semibold">847,293</p>
                <p className="text-xs text-green-400">+12.5% vs last week</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-xs text-gray-400">Avg Latency</p>
                <p className="text-xl font-semibold">124ms</p>
                <p className="text-xs text-green-400">-8.3% improvement</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-xs text-gray-400">Cost Savings</p>
                <p className="text-xl font-semibold text-green-400">$12.4K</p>
                <p className="text-xs text-green-400">+23.1% vs last week</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-sm font-medium text-green-400 mb-2">Top Performing Models</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs">GPT-4</span>
                  <span className="text-xs text-green-400">45% usage</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-green-500" style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Claude</span>
                  <span className="text-xs text-green-400">28% usage</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: '28%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Gemini</span>
                  <span className="text-xs text-green-400">18% usage</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-teal-500" style={{ width: '18%' }}></div>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-white/5">
              <p className="text-sm font-medium mb-2">Recommendations</p>
              <ul className="space-y-1.5">
                <li className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  Consider optimizing batch processing during off-peak hours
                </li>
                <li className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  Llama model shows high accuracy - consider expanding usage
                </li>
                <li className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  Token usage trending up - plan for capacity upgrade
                </li>
              </ul>
            </div>
          </div>
        )
      })
    } else if (action === 'analyze-data') {
      setResponseData({
        title: 'Data Pattern Analysis',
        content: (
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-sm font-medium text-green-400 mb-3">Key Insights Found</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Traffic Spike Pattern</p>
                    <p className="text-xs text-gray-400">Usage increases 40% every Tuesday at 2 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Latency Correlation</p>
                    <p className="text-xs text-gray-400">Response time linked to batch size</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium">User Segmentation</p>
                    <p className="text-xs text-gray-400">3 distinct usage clusters identified</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-white/5">
              <p className="text-sm font-medium mb-3">Anomaly Detection</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs">Friday drop in requests</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">Investigating</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">API timeout spike</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">Resolved</span>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-white/5">
              <p className="text-sm font-medium mb-2">Suggested Actions</p>
              <ul className="space-y-1.5">
                <li className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  Schedule capacity review for Tuesday afternoons
                </li>
                <li className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  Implement request queuing during peak hours
                </li>
                <li className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-green-400">→</span>
                  Review Friday API configuration
                </li>
              </ul>
            </div>
          </div>
        )
      })
    } else if (action === 'create-content') {
      setResponseData({
        title: 'Marketing Content Generated',
        content: (
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-sm font-medium text-green-400 mb-3">Email Campaign</p>
              <div className="space-y-2">
                <p className="text-xs text-gray-400">Subject Line Options:</p>
                <div className="p-2 rounded-lg bg-white/5">
                  <p className="text-xs">"Boost Your Workflow with NeuralAI - Get 2.4M Free Tokens"</p>
                </div>
                <div className="p-2 rounded-lg bg-white/5">
                  <p className="text-xs">"How Teams Save $12K/Month with AI Automation"</p>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-white/5">
              <p className="text-sm font-medium mb-3">Social Media Posts</p>
              <div className="space-y-3">
                <div className="p-2 rounded-lg bg-white/5">
                  <p className="text-xs text-gray-400 mb-1">Twitter/X:</p>
                  <p className="text-xs">🚀 Teams using NeuralAI see 40% faster deployment times. Join 12,000+ teams already building with AI that thinks ahead. #AI #NoCode</p>
                </div>
                <div className="p-2 rounded-lg bg-white/5">
                  <p className="text-xs text-gray-400 mb-1">LinkedIn:</p>
                  <p className="text-xs">We're excited to share that NeuralAI now processes 50M+ tokens daily for teams worldwide. From startups to enterprises, AI-powered development is the new standard. What will you build?</p>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-white/5">
              <p className="text-sm font-medium mb-2">Blog Post Outline</p>
              <ol className="space-y-1.5">
                <li className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-green-400 font-medium">1.</span>
                  The State of AI in 2024
                </li>
                <li className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-green-400 font-medium">2.</span>
                  Why Teams Are Switching to NeuralAI
                </li>
                <li className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-green-400 font-medium">3.</span>
                  Real Results: 3 Case Studies
                </li>
                <li className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-green-400 font-medium">4.</span>
                  Getting Started Guide
                </li>
              </ol>
            </div>
          </div>
        )
      })
    }
    
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    
    setSelectedAction(null)
    setIsLoading(true)
    setResponseData(null)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setResponseData({
      title: 'AI Response',
      content: (
        <div className="p-3 rounded-lg bg-white/5">
          <p className="text-sm mb-2">Based on your query about "{inputValue}", here's what I found:</p>
          <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
            <p className="text-xs text-green-400 font-medium mb-1">Analysis Complete</p>
            <p className="text-xs text-gray-400">Your request has been processed. The system analyzed 847,293 API calls and found significant patterns related to your query. Average response time: 124ms with a 99.2% success rate.</p>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-white/5 text-xs hover:bg-white/10 transition-colors">
              Export Data
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-green-500/20 text-xs text-green-400 hover:bg-green-500/30 transition-colors">
              Generate Report
            </button>
          </div>
        </div>
      )
    })
    
    setIsLoading(false)
  }

  const clearResponse = () => {
    setResponseData(null)
    setSelectedAction(null)
  }

  return (
    <div className="p-4 lg:p-6 rounded-2xl bg-[#1A1F1C] border border-white/10 h-full">
      <div className="flex items-center justify-between mb-4 lg:mb-6">
        <div>
          <h3 className="text-base lg:text-lg font-semibold">AI Assistant</h3>
          <p className="text-gray-400 text-xs lg:text-sm mt-1">Powered by GPT-4</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">Online</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-4 lg:mb-6">
        <div className="flex gap-2 lg:gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl bg-white/5 border border-white/10 text-sm placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
          />
          <button 
            type="submit"
            className="p-2.5 lg:p-3 rounded-xl bg-green-500 hover:bg-green-600 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>
      </form>
      
      {!responseData && !isLoading && (
        <>
          <div className="mb-4 lg:mb-6">
            <p className="text-xs lg:text-sm text-gray-400 mb-3">Quick Actions</p>
            <div className="space-y-2 lg:space-y-3">
              {suggestions.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(item.action)}
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
          </div>
          
          <div className="p-3 lg:p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20">
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
        </>
      )}
      
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 border-4 border-green-500/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent rounded-full border-t-green-500 animate-spin"></div>
            <div className="absolute inset-2 border-4 border-transparent rounded-full border-t-emerald-500 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
          </div>
          <p className="text-sm text-gray-400 mb-1">Analyzing your request...</p>
          <p className="text-xs text-gray-500">Processing 847,293 data points</p>
        </div>
      )}
      
      {responseData && !isLoading && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-green-400">{responseData.title}</p>
            <button 
              onClick={clearResponse}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
            {responseData.content}
          </div>
        </div>
      )}
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  )
}