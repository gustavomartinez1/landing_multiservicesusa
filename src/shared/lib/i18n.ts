export const dictionaries = {
  es: () => import('../../features/home/content/es').then((module) => module.default),
  en: () => import('../../features/home/content/en').then((module) => module.default),
}

export const dictionary = {
  es: 'Español',
  en: 'English',
}

export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'es'
