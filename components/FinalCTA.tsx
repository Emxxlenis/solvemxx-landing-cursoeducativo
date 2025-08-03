'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Users, Clock, Star, ArrowRight } from 'lucide-react'
import { formatCurrency, trackEvent, generateConfetti } from '@/lib/utils'
import DemoModal from '@/components/ui/demo-modal'

export default function FinalCTA() {
  const [enrollmentCount, setEnrollmentCount] = useState(2847)
  const [isEnrolling, setIsEnrolling] = useState(false)
  const [timeLeft, setTimeLeft] = useState('')
  const [showDemoModal, setShowDemoModal] = useState(false)

  useEffect(() => {
    // Update enrollment counter periodically
    const enrollmentInterval = setInterval(() => {
      setEnrollmentCount(prev => prev + Math.floor(Math.random() * 2 + 1))
    }, 45000)

    // Update time until midnight
    const timeInterval = setInterval(() => {
      const now = new Date()
      const midnight = new Date()
      midnight.setHours(24, 0, 0, 0)
      
      const diff = midnight.getTime() - now.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      
      setTimeLeft(`${hours}h ${minutes}m`)
    }, 60000)

    // Set initial time
    const now = new Date()
    const midnight = new Date()
    midnight.setHours(24, 0, 0, 0)
    const diff = midnight.getTime() - now.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    setTimeLeft(`${hours}h ${minutes}m`)

    return () => {
      clearInterval(enrollmentInterval)
      clearInterval(timeInterval)
    }
  }, [])

  const handleEnrollClick = () => {
    setIsEnrolling(true)
    trackEvent('final_cta_click', {
      location: 'final_section',
      enrollment_count: enrollmentCount,
      action: 'demo_modal_shown'
    })

    // Show demo modal with confetti
    setTimeout(() => {
      generateConfetti()
      setIsEnrolling(false)
      setShowDemoModal(true)
    }, 2000)
  }

  const benefits = [
    "Controla tu dinero en 30 días",
    "Elimina deudas para siempre",
    "Crea tu fondo de emergencia",
    "Multiplica tu dinero con inversiones"
  ]

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden" suppressHydrationWarning={true}>
        {/* Background Elements - Adjusted for mobile */}
        <div className="absolute inset-0 bg-black/10" suppressHydrationWarning={true} />
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" suppressHydrationWarning={true} />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full translate-x-1/2 translate-y-1/2" suppressHydrationWarning={true} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" suppressHydrationWarning={true}>
          <div className="max-w-4xl mx-auto text-center text-white" suppressHydrationWarning={true}>
            
            {/* Urgency Banner - Mobile optimized */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-accent text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium mb-6 sm:mb-8 text-sm sm:text-base" suppressHydrationWarning={true}>
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Oferta especial termina en {timeLeft}</span>
            </div>

            {/* Main Headline - Improved responsive sizing */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Tu Libertad Financiera
              <span className="block text-accent">Empieza HOY</span>
            </h2>

            <p className="text-lg sm:text-xl lg:text-2xl opacity-90 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-2 sm:px-0">
              No esperes más. Cada día que pases sin control de tus finanzas es un día menos para construir la vida que mereces.
            </p>

            {/* Benefits List - Better mobile spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0" suppressHydrationWarning={true}>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left bg-white/5 p-3 sm:p-4 rounded-lg sm:bg-transparent sm:p-0" suppressHydrationWarning={true}>
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0" suppressHydrationWarning={true}>
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-base sm:text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Social Proof - Mobile optimized */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-white/90 px-4 sm:px-0" suppressHydrationWarning={true}>
              <div className="flex items-center gap-2" suppressHydrationWarning={true}>
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">{enrollmentCount.toLocaleString()}+ estudiantes</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" suppressHydrationWarning={true} />
              <div className="flex items-center gap-2" suppressHydrationWarning={true}>
                <div className="flex items-center" suppressHydrationWarning={true}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-sm sm:text-base">4.9/5 de calificación</span>
              </div>
            </div>

            {/* Price Reminder - Mobile optimized */}
            <div className="mb-6 sm:mb-8 px-4 sm:px-0" suppressHydrationWarning={true}>
              <div className="text-xl sm:text-2xl font-bold text-accent mb-2" suppressHydrationWarning={true}>
                Solo {formatCurrency(97000)}
              </div>
              <p className="text-white/80 text-sm sm:text-base">
                En lugar de {formatCurrency(297000)} • Ahorras {formatCurrency(200000)}
              </p>
            </div>

            {/* CTA Button - Mobile optimized */}
            <div className="mb-6 sm:mb-8 px-4 sm:px-0" suppressHydrationWarning={true}>
              <Button
                onClick={handleEnrollClick}
                disabled={isEnrolling}
                className="w-full sm:w-auto text-lg sm:text-xl px-6 sm:px-12 py-4 sm:py-6 bg-accent hover:bg-accent/90 shadow-course-hover transform hover:scale-105 transition-all duration-300 font-bold min-h-[56px] sm:min-h-[60px]"
              >
                {isEnrolling ? 'Inscribiendo...' : 'Transformar mis Finanzas Ahora'}
              </Button>
              <p className="text-xs sm:text-sm text-white/80 mt-3 sm:mt-4">
                ✓ Acceso inmediato ✓ Sin pagos recurrentes ✓ Garantía 30 días
              </p>
            </div>

            {/* Live Enrollment Counter - Mobile optimized */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-course px-4 py-3 sm:px-6 sm:py-4 mx-4 sm:mx-0 max-w-full" suppressHydrationWarning={true}>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" suppressHydrationWarning={true} />
              <span className="text-xs sm:text-sm">
                <strong>María F.</strong> se inscribió hace 2 minutos en Medellín
              </span>
            </div>

            {/* Final Motivation - Mobile optimized */}
            <div className="mt-8 sm:mt-12 max-w-2xl mx-auto px-4 sm:px-0" suppressHydrationWarning={true}>
              <blockquote className="text-lg sm:text-xl italic opacity-90 leading-relaxed">
                &ldquo;El mejor momento para plantar un árbol fue hace 20 años. 
                El segundo mejor momento es ahora.&rdquo;
              </blockquote>
              <cite className="block mt-3 sm:mt-4 text-xs sm:text-sm opacity-75">
                — Proverbio chino sobre inversión en el futuro
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
    </>
  )
} 