import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

interface LangLayoutProps {
  children: React.ReactNode
  params: Promise<{ lang: 'es' | 'en' }>
}

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const { lang } = await params
  const isSpanish = lang === 'es'
  
  return {
    title: isSpanish 
      ? 'YP Multiservices - Impuestos, ITIN, Oficiante de Bodas en San Marcos, TX'
      : 'YP Multiservices - Taxes, ITIN, Wedding Officiant in San Marcos, TX',
    description: isSpanish
      ? 'Servicios profesionales de impuestos, asistencia con ITIN y SSN, y servicios de oficante de bodas en San Marcos, TX. Bilingüe Español-Inglés.'
      : 'Professional tax services, ITIN & SSN assistance, and wedding officiant services in San Marcos, TX. Bilingual Spanish-English.',
    keywords: isSpanish
      ? 'servicios de impuestos San Marcos TX, contador español San Marcos, servicios ITIN, oficial de bodas Texas, SSN servicios'
      : 'tax services San Marcos TX, Spanish accountant San Marcos, ITIN services, wedding officiant Texas, SSN services',
    alternates: {
      canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || 'pending'}/${lang}`,
      languages: {
        es: `https://${process.env.NEXT_PUBLIC_DOMAIN || 'pending'}/es`,
        en: `https://${process.env.NEXT_PUBLIC_DOMAIN || 'pending'}/en`,
      },
    },
  }
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params
  
  return (
    <html lang={lang}>
      <head>
        {/* JSON-LD Schema for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'YP Multiservices',
              image: `https://${process.env.NEXT_PUBLIC_DOMAIN || 'pending'}/logo.png`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'San Marcos',
                addressRegion: 'TX',
                addressCountry: 'US',
              },
              telephone: `+1${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace('+', '') || '15205850085'}`,
              email: process.env.NEXT_PUBLIC_EMAIL || 'yperezservices@yahoo.com',
              priceRange: '$$',
              openingHours: 'Mo-Fr 09:00-18:00',
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 29.8833,
                  longitude: -97.9414,
                },
                geoRadius: '30 mi',
              },
              serviceType: [
                'Tax Preparation',
                'ITIN Services',
                'SSN Assistance',
                'Wedding Officiant',
              ],
              sameAs: [
                `https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM || 'ypmultiservicesusa'}`,
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}