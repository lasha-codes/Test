'use client'

import { DashboardOverview } from '@/components/DashboardOverview'
import { MetricsGrid } from '@/components/MetricsGrid'
import { AnalyticsChart } from '@/components/AnalyticsChart'
import { ActivityFeed } from '@/components/ActivityFeed'
import { AIPanel } from '@/components/AIPanel'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#0A0F0C] text-white">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 border-b border-white/10 bg-[#0F140F]">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-semibold text-lg">NeuralAI</span>
        </Link>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#0A0F0C]/95 backdrop-blur-sm">
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-semibold text-lg">NeuralAI</span>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/5"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <nav className="space-y-2">
              {[
                { icon: 'LayoutDashboard', label: 'Dashboard', active: true, href: '/' },
                { icon: 'Brain', label: 'AI Models', active: false, href: '#' },
                { icon: 'BarChart3', label: 'Analytics', active: false, href: '#' },
                { icon: 'CreditCard', label: 'Pricing', active: false, href: '/pricing' },
                { icon: 'Users', label: 'Team', active: false, href: '#' },
                { icon: 'Settings', label: 'Settings', active: false, href: '#' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    item.active 
                      ? 'bg-white/10 text-white' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.icon === 'LayoutDashboard' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" rx="1"/>
                      <rect x="14" y="3" width="7" height="7" rx="1"/>
                      <rect x="14" y="14" width="7" height="7" rx="1"/>
                      <rect x="3" y="14" width="7" height="7" rx="1"/>
                    </svg>
                  )}
                  {item.icon === 'Brain' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 4.5a2.5 2.5 0 0 0-4.5-.5 4 4 0 0 0-4 4 3.5 3.5 0 0 0 .5 5.5"/>
                      <path d="M12 4.5a2.5 2.5 0 0 1 4.5-.5 4 4 0 0 1 4 4 3.5 3.5 0 0 1-.5 5.5"/>
                      <path d="M10 10a1 1 0 0 0-1 1v3a4 4 0 0 0 2 3"/>
                      <path d="M14 10a1 1 0 0 1 1 1v3a4 4 0 0 1-2 3"/>
                      <circle cx="12" cy="17" r="2"/>
                    </svg>
                  )}
                  {item.icon === 'BarChart3' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18"/>
                      <path d="M18 17V9"/>
                      <path d="M13 17V5"/>
                      <path d="M8 17v-3"/>
                    </svg>
                  )}
                  {item.icon === 'CreditCard' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                      <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                  )}
                  {item.icon === 'Users' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  )}
                  {item.icon === 'Settings' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                  )}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-white/10">
              <p className="text-sm font-medium mb-1">Upgrade to Pro</p>
              <p className="text-xs text-gray-400 mb-3">Unlock all AI models</p>
              <Link href="/pricing" className="block w-full py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-sm font-medium hover:opacity-90 transition-opacity text-center">
                Upgrade Now
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex lg:flex-col w-64 min-h-screen bg-[#0F140F] border-r border-white/10 p-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-semibold text-lg">NeuralAI</span>
          </div>
          
          <nav className="flex-1 space-y-2">
            {[
              { icon: 'LayoutDashboard', label: 'Dashboard', active: true, href: '/' },
              { icon: 'Brain', label: 'AI Models', active: false, href: '#' },
              { icon: 'BarChart3', label: 'Analytics', active: false, href: '#' },
              { icon: 'CreditCard', label: 'Pricing', active: false, href: '/pricing' },
              { icon: 'Users', label: 'Team', active: false, href: '#' },
              { icon: 'Settings', label: 'Settings', active: false, href: '#' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  item.active 
                    ? 'bg-white/10 text-white' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.icon === 'LayoutDashboard' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="14" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/>
                  </svg>
                )}
                {item.icon === 'Brain' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4.5a2.5 2.5 0 0 0-4.5-.5 4 4 0 0 0-4 4 3.5 3.5 0 0 0 .5 5.5"/>
                    <path d="M12 4.5a2.5 2.5 0 0 1 4.5-.5 4 4 0 0 1 4 4 3.5 3.5 0 0 1-.5 5.5"/>
                    <path d="M10 10a1 1 0 0 0-1 1v3a4 4 0 0 0 2 3"/>
                    <path d="M14 10a1 1 0 0 1 1 1v3a4 4 0 0 1-2 3"/>
                    <circle cx="12" cy="17" r="2"/>
                  </svg>
                )}
                {item.icon === 'BarChart3' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18"/>
                    <path d="M18 17V9"/>
                    <path d="M13 17V5"/>
                    <path d="M8 17v-3"/>
                  </svg>
                )}
                {item.icon === 'CreditCard' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                )}
                {item.icon === 'Users' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                )}
                {item.icon === 'Settings' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                )}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-white/10">
            <p className="text-sm font-medium mb-1">Upgrade to Pro</p>
            <p className="text-xs text-gray-400 mb-3">Unlock all AI models</p>
            <Link href="/pricing" className="block w-full py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-sm font-medium hover:opacity-90 transition-opacity text-center">
              Upgrade Now
            </Link>
          </div>
        </aside>
        
        <div className="flex-1 p-4 lg:p-8">
          <header className="flex items-center justify-between mb-6 lg:mb-8">
            <div>
              <h1 className="text-xl lg:text-2xl font-semibold">Dashboard</h1>
              <p className="text-gray-400 text-sm mt-1 hidden sm:block">Welcome back, explore your AI workspace</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 lg:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </button>
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-xs lg:text-sm font-medium">
                JD
              </div>
            </div>
          </header>
          
          <DashboardOverview />
          <MetricsGrid />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 lg:mt-8">
            <div className="lg:col-span-2">
              <AnalyticsChart />
            </div>
            <div className="lg:col-span-1">
              <AIPanel />
            </div>
          </div>
          
          <div className="mt-6 lg:mt-8">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </main>
  )
}