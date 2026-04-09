'use client'

import Link from 'next/link'
import { Dictionary } from '@/shared/lib/dictionary'

interface CTASectionProps {
  dict: Dictionary
  lang: 'es' | 'en'
}

export default function CTASection({ dict, lang }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {dict.cta.title}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {dict.cta.description}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            {dict.cta.button}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}