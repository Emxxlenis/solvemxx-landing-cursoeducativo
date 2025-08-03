'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Clock, CheckCircle, Lock, CreditCard, Banknote, Users, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatCurrency, trackEvent } from '@/lib/utils'


import DemoModal from '@/components/ui/demo-modal'

interface CountdownTimerProps {
  targetDate: Date
  onExpire?: () => void
}

function CountdownTimer({ targetDate, onExpire }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
        onExpire?.()
        return
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ hours, minutes, seconds })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [targetDate, onExpire])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-4 text-white">
        <div className="text-center">
          <div className="text-2xl font-bold">00</div>
          <div className="text-xs">HORAS</div>
        </div>
        <div className="text-xl">:</div>
        <div className="text-center">
          <div className="text-2xl font-bold">00</div>
          <div className="text-xs">MIN</div>
        </div>
        <div className="text-xl">:</div>
        <div className="text-center">
          <div className="text-2xl font-bold">00</div>
          <div className="text-xs">SEG</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-4 text-white" suppressHydrationWarning={true}>
      <div className="text-center">
        <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className="text-xs">HORAS</div>
      </div>
      <div className="text-xl">:</div>
      <div className="text-center">
        <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className="text-xs">MIN</div>
      </div>
      <div className="text-xl">:</div>
      <div className="text-center">
        <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
        <div className="text-xs">SEG</div>
      </div>
    </div>
  )
}



export default function PricingSection() {
  const [enrollmentCount, setEnrollmentCount] = useState(2847)
  const [mounted, setMounted] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)
  
  // Calculate midnight of current day (Colombian time)
  const midnight = new Date()
  midnight.setHours(23, 59, 59, 999)

  useEffect(() => {
    setMounted(true)
    
    // Simulate real-time enrollments
    const interval = setInterval(() => {
      setEnrollmentCount(prev => prev + Math.floor(Math.random() * 2))
    }, 45000)

    return () => clearInterval(interval)
  }, [])

  const handleEnrollClick = () => {
    setShowDemoModal(true)
    trackEvent('pricing_cta_click', { 
      price: 97000,
      original_price: 297000,
      action: 'demo_modal_shown'
    })
  }



  return (
    <>
      <section className="section-padding bg-primary text-white" id="pricing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
                Acceso Especial por Tiempo Limitado
              </h2>
              <p className="text-xl opacity-90">
                Únete ahora y obtén acceso completo al curso que está transformando la vida financiera de miles de jóvenes
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-course shadow-course-hover overflow-hidden">
              {/* Countdown Timer */}
              <div className="bg-accent text-white p-4 text-center">
                <div className="flex items-center justify-center gap-4">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">¡Oferta termina en:</span>
                  <CountdownTimer 
                    targetDate={midnight}
                    onExpire={() => console.log('Offer expired!')}
                  />
                </div>
              </div>

              <div className="p-8 lg:p-12">
                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-2xl text-gray-500 line-through">$297.000 COP</span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      67% OFF
                    </span>
                  </div>
                  <div className="text-5xl lg:text-6xl font-bold text-primary mb-2" suppressHydrationWarning={true}>
                    {mounted ? formatCurrency(97000) : '$ 97.000'}
                  </div>
                  <p className="text-gray-600">
                    Precio especial para los primeros 100 estudiantes
                  </p>
                </div>

                {/* What's Included */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                    Todo lo que obtienes:
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">6 módulos completos (5h 20min de contenido)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Workbooks y plantillas descargables</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Acceso de por vida al contenido</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Grupo privado de estudiantes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Sesiones de Q&A en vivo mensuales</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Calculadoras financieras exclusivas</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Certificado de finalización</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Soporte por email prioritario</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Actualizaciones gratuitas futuras</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Garantía de 30 días sin preguntas</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mb-8">
                  <Button
                    onClick={handleEnrollClick}
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-bold text-xl px-12 py-4 rounded-course shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[60px]"
                  >
                    Inscribirme Ahora
                  </Button>
                </div>

                {/* Payment Methods */}
                <div className="text-center mb-8">
                  <p className="text-gray-600 mb-4">Métodos de pago seguros:</p>
                  <div className="flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CreditCard className="w-5 h-5" />
                      <span className="text-sm">Visa</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CreditCard className="w-5 h-5" />
                      <span className="text-sm">Mastercard</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Banknote className="w-5 h-5" />
                      <span className="text-sm">PSE</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Lock className="w-5 h-5" />
                      <span className="text-sm">PayU</span>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">Garantía 30 días</div>
                    <div className="text-xs text-gray-600">100% de devolución</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900" suppressHydrationWarning={true}>
                      {mounted ? `${enrollmentCount}+ estudiantes` : '2,847+ estudiantes'}
                    </div>
                    <div className="text-xs text-gray-600">Ya confían en nosotros</div>
                  </div>
                  <div className="text-center">
                    <Lock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">Pago seguro</div>
                    <div className="text-xs text-gray-600">Encriptación SSL</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="text-center mt-12 text-white/80">
              <p className="mb-4">
                &ldquo;Gracias al curso, en 2 meses pagué $800K en deudas y ahora ahorro $400K mensuales&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Juan Carlos M."
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-medium">Juan Carlos M.</div>
                  <div className="text-sm opacity-75">Graduado del curso</div>
                </div>
              </div>
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