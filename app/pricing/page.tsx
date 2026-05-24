'use client'

import { useState } from 'react'
import Link from 'next/link'

const plans = [
  {
    name: 'Free',
    description: 'Perfect for getting started with AI',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      '100,000 tokens/month',
      '3 AI models',
      'Basic analytics',
      'Email support',
      'Community access',
    ],
    notIncluded: [
      'Advanced models',
      'API access',
      'Custom training',
      'Priority support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Best for teams and professionals',
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      '10M tokens/month',
      'All AI models',
      'Advanced analytics',
      'API access',
      'Priority support',
      'Custom training',
      'Team collaboration',
    ],
    notIncluded: [
      'Dedicated account manager',
      'Custom contracts',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    monthlyPrice: null,
    annualPrice: null,
    features: [
      'Unlimited tokens',
      'All AI models',
      'Advanced analytics',
      'API access',
      '24/7 dedicated support',
      'Custom training',
      'Team collaboration',
      'Dedicated account manager',
      'Custom contracts',
      'SLA guarantee',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  },
]

const faqs = [
  {
    question: 'What counts as a token?',
    answer: 'A token is roughly 4 characters of text. Our AI models process text in tokens, and different features use different amounts of tokens based on complexity.',
  },
  {
    question: 'Can I switch plans anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate your billing accordingly.',
  },
  {
    question: 'What happens if I exceed my token limit?',
    answer: 'You can purchase additional tokens at competitive rates, or upgrade to a higher plan. We\'ll notify you when you reach 80% of your limit.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 14-day money-back guarantee for all new subscriptions. Contact our support team for assistance.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise customers. All payments are processed securely.',
  },
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#0A0F0C]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0F140F]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-semibold text-xl">NeuralAI</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link>
              <Link href="/pricing" className="text-white transition-colors">Pricing</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Support</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/auth" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
                Sign in
              </Link>
              <Link href="/auth" className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-sm font-medium hover:opacity-90 transition-opacity">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[120px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Choose the plan that fits your needs. Start free and scale as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-xl bg-white/5 border border-white/10 mb-16">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !isAnnual ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                isAnnual ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
              <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-[#1A1F1C] to-[#0F140F] border-green-500/50 scale-105'
                    : 'bg-[#1A1F1C] border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                
                <div className="mb-6">
                  {plan.monthlyPrice === null ? (
                    <div className="text-4xl font-semibold">Custom</div>
                  ) : plan.monthlyPrice === 0 ? (
                    <div className="text-4xl font-semibold">Free</div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-semibold">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                      {isAnnual && (
                        <p className="text-sm text-green-400 mt-1">Billed annually (${plan.annualPrice! * 12}/year)</p>
                      )}
                    </>
                  )}
                </div>
                
                <button
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all mb-8 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90'
                      : 'bg-white/10 hover:bg-white/20 border border-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-400">What's included:</p>
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3 opacity-50">
                      <svg className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 lg:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Compare plans</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See the full feature comparison to find the perfect plan for your needs.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 font-medium text-gray-400">Feature</th>
                  <th className="text-center py-4 px-6 font-medium">Free</th>
                  <th className="text-center py-4 px-6 font-medium text-green-400">Pro</th>
                  <th className="text-center py-4 px-6 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Monthly tokens', free: '100K', pro: '10M', enterprise: 'Unlimited' },
                  { feature: 'AI models', free: '3', pro: 'All', enterprise: 'All + Custom' },
                  { feature: 'Analytics', free: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
                  { feature: 'API access', free: false, pro: true, enterprise: true },
                  { feature: 'Team members', free: '1', pro: '10', enterprise: 'Unlimited' },
                  { feature: 'Custom training', free: false, pro: true, enterprise: true },
                  { feature: 'Priority support', free: false, pro: true, enterprise: true },
                  { feature: 'Dedicated manager', free: false, pro: false, enterprise: true },
                  { feature: 'SLA guarantee', free: false, pro: false, enterprise: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-sm">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-sm">{typeof row.free === 'boolean' ? (row.free ? '✓' : '—') : row.free}</td>
                    <td className="py-4 px-6 text-center text-sm text-green-400">{typeof row.pro === 'boolean' ? (row.pro ? '✓' : '—') : row.pro}</td>
                    <td className="py-4 px-6 text-center text-sm">{typeof row.enterprise === 'boolean' ? (row.enterprise ? '✓' : '—') : row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Frequently asked questions</h2>
            <p className="text-gray-400">
              Can't find the answer you're looking for? Reach out to our support team.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
            Ready to get started?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Start building with AI today. No credit card required for free tier.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth" className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 font-medium hover:opacity-90 transition-opacity">
              Start Free Trial
            </Link>
            <Link href="#" className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 font-medium hover:bg-white/10 transition-colors">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-semibold">NeuralAI</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Status</Link>
              <p>© 2024 NeuralAI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}