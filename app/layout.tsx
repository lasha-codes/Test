import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin-ext'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'NeuralAI - AI SaaS Dashboard',
  description: 'Build with AI that thinks ahead',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}