import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'YP Multiservices - Taxes, ITIN, Wedding Officiant in San Marcos, TX',
  description: 'Professional tax services, ITIN & SSN assistance, and wedding officiant services in San Marcos, TX. Bilingual Spanish-English.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}