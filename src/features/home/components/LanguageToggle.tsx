'use client'

import { motion } from 'framer-motion'

interface LanguageToggleProps {
  currentLang: 'es' | 'en'
}

export default function LanguageToggle({ currentLang }: LanguageToggleProps) {
  const otherLang = currentLang === 'es' ? 'en' : 'es'
  const otherLangLabel = currentLang === 'es' ? 'EN' : 'ES'
  const otherLangFull = currentLang === 'es' ? 'English' : 'Español'

  return (
    <motion.a
      href={`/${otherLang}`}
      className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Switch to ${otherLangFull}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <span>{otherLangLabel}</span>
    </motion.a>
  )
}