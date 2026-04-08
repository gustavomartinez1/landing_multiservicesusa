import { Locale } from './i18n'

const dictionaries: Record<Locale, () => Promise<any>> = {
  es: () => import('@/features/home/content/es').then((module) => module.default),
  en: () => import('@/features/home/content/en').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>