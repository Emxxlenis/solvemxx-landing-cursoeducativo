'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BenefitsGrid from '@/components/BenefitsGrid'
import CurriculumTimeline from '@/components/CurriculumTimeline'
import InstructorSection from '@/components/InstructorSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import { getABTestVariant, trackEvent } from '@/lib/utils'

export default function FinanceCoursePage() {
  useEffect(() => {
    // Track page view with A/B test variant
    const variant = getABTestVariant('hero') as 'A' | 'B'
    trackEvent('page_view', {
      path: window.location.pathname,
      variant: variant,
    })

    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
      
      if (scrollPercent >= 25 && !sessionStorage.getItem('scroll_25')) {
        trackEvent('scroll_depth', { depth: 25 })
        sessionStorage.setItem('scroll_25', 'true')
      }
      if (scrollPercent >= 50 && !sessionStorage.getItem('scroll_50')) {
        trackEvent('scroll_depth', { depth: 50 })
        sessionStorage.setItem('scroll_50', 'true')
      }
      if (scrollPercent >= 75 && !sessionStorage.getItem('scroll_75')) {
        trackEvent('scroll_depth', { depth: 75 })
        sessionStorage.setItem('scroll_75', 'true')
      }
      if (scrollPercent >= 90 && !sessionStorage.getItem('scroll_90')) {
        trackEvent('scroll_depth', { depth: 90 })
        sessionStorage.setItem('scroll_90', 'true')
      }
    }

    window.addEventListener('scroll', trackScrollDepth, { passive: true })
    return () => window.removeEventListener('scroll', trackScrollDepth)
  }, [])

  return (
    <main className="min-h-screen" suppressHydrationWarning={true}>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="benefits">
        <BenefitsGrid />
      </section>
      <section id="curriculum">
        <CurriculumTimeline />
      </section>
      <section id="instructor">
        <InstructorSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <FinalCTA />
      <Footer />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50" suppressHydrationWarning={true}>
        <a
          href="https://wa.me/573001234567?text=Hola,%20tengo%20preguntas%20sobre%20el%20curso%20Master%20Your%20Money"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-course-hover transition-all duration-300 hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.52 7.14c.14 0 .27.06.38.17s.17.24.17.38c0 .14-.06.27-.17.38l-1.45 1.45c-.1.1-.24.17-.38.17s-.27-.06-.38-.17l-1.45-1.45c-.1-.1-.17-.24-.17-.38s.06-.27.17-.38l1.45-1.45c.1-.1.24-.17.38-.17z"/>
          </svg>
        </a>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  )
}

function ScrollToTopButton() {
  useEffect(() => {
    const button = document.getElementById('scroll-to-top')
    if (!button) return

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        button.style.display = 'flex'
      } else {
        button.style.display = 'none'
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
    trackEvent('scroll_to_top_click')
  }

  return (
    <button
      id="scroll-to-top"
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full items-center justify-center shadow-course transition-all duration-300 hover:scale-110 hidden"
      aria-label="Scroll to top"
      suppressHydrationWarning={true}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
} 