'use client'

import Link from 'next/link'
import { Dictionary } from '@/shared/lib/dictionary'

interface HeroProps {
  dict: Dictionary
  lang: 'es' | 'en'
}

export default function Hero({ dict, lang }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900" />
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
          <span className="text-white/90 text-sm font-medium">
            📍 San Marcos, TX
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          {dict.hero.title}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
            {dict.hero.subtitle}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-6 font-medium">
          {dict.hero.subtitle}
        </p>

        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          {dict.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/${lang}/contact`}
            className="px-8 py-4 bg-accent-500 text-white rounded-full font-semibold text-lg hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50"
          >
            {dict.hero.cta}
          </Link>
          <Link
            href={`/${lang}/services`}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
          >
            {dict.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg
          className="w-6 h-6 text-white/50 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}