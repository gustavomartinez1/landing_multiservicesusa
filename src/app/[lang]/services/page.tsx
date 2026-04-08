import { getDictionary, Dictionary } from '@/shared/lib/dictionary'
import { Locale } from '@/shared/lib/i18n'
import Navbar from '@/features/shared/components/Navbar'
import Footer from '@/features/shared/components/Footer'
import WhatsAppButton from '@/features/contact/components/WhatsAppButton'
import ServicesContent from '@/features/services/content/ServicesContent'

interface ServicesPageProps {
  params: Promise<{ lang: 'es' | 'en' }>
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = await params
  const dict: Dictionary = await getDictionary(lang as Locale)

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main className="pt-20">
        <ServicesContent dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  )
}