import { getDictionary, Dictionary } from '@/shared/lib/dictionary'
import { Locale } from '@/shared/lib/i18n'
import Navbar from '@/features/shared/components/Navbar'
import Footer from '@/features/shared/components/Footer'
import WhatsAppButton from '@/features/contact/components/WhatsAppButton'
import Hero from '@/features/home/components/Hero'
import ServicesPreview from '@/features/home/components/ServicesPreview'
import Testimonials from '@/features/home/components/Testimonials'
import CTASection from '@/features/home/components/CTASection'

interface HomePageProps {
  params: Promise<{ lang: 'es' | 'en' }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params
  const dict: Dictionary = await getDictionary(lang as Locale)

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} lang={lang} />
        <ServicesPreview dict={dict} lang={lang} />
        <Testimonials dict={dict} />
        <CTASection dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  )
}