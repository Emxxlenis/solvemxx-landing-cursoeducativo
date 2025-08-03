'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Target, TrendingUp, Shield, Zap } from 'lucide-react'
import { formatNumber } from '@/lib/utils'

interface BenefitCard {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  highlight: string
}

const benefits: BenefitCard[] = [
  {
    id: 'elimina-deudas',
    icon: Target,
    title: 'Elimina Deudas Rápido',
    description: 'Aprende estrategias probadas para salir de deudas de tarjetas de crédito y préstamos en tiempo récord.',
    highlight: 'Método avalancha y bola de nieve'
  },
  {
    id: 'multiplica-ingresos',
    icon: TrendingUp,
    title: 'Multiplica tus Ingresos',
    description: 'Descubre cómo hacer que tu dinero trabaje para ti con inversiones seguras y rentables.',
    highlight: 'ROI promedio del 15% anual'
  },
  {
    id: 'emergencia-segura',
    icon: Shield,
    title: 'Fondo de Emergencia',
    description: 'Construye tu red de seguridad financiera y duerme tranquilo sabiendo que estás protegido.',
    highlight: '3-6 meses de gastos cubiertos'
  },
  {
    id: 'automatizacion',
    icon: Zap,
    title: 'Automatización Total',
    description: 'Configura sistemas que manejen tus finanzas automáticamente, sin estrés ni complicaciones.',
    highlight: 'Ahorra 10+ horas mensuales'
  }
]

// Avatares de estudiantes reales
const studentAvatars = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    alt: "Juan Carlos - Estudiante graduado"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    alt: "María Fernanda - Estudiante graduada"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    alt: "Andrés Felipe - Estudiante graduado"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    alt: "Carolina - Estudiante graduada"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    alt: "Santiago - Estudiante graduado"
  }
]

interface BenefitCardProps {
  benefit: BenefitCard
  index: number
}

function BenefitCardComponent({ benefit }: BenefitCardProps) {
  const Icon = benefit.icon
  
  return (
    <div className="group relative bg-white rounded-course p-8 shadow-course card-hover">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-course" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="inline-flex p-4 bg-gradient-to-br from-primary to-secondary rounded-course text-white mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8" />
        </div>
        
        {/* Text content */}
        <div className="space-y-4">
          <h3 className="text-xl font-montserrat font-bold text-gray-900 group-hover:text-primary transition-colors">
            {benefit.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {benefit.description}
          </p>
          <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full mr-2" />
            {benefit.highlight}
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full -z-0" />
    </div>
  )
}

export default function BenefitsGrid() {
  const [mounted, setMounted] = useState(false)
  const [studentCount] = useState(2847)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="section-padding bg-gray-50" id="benefits">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-6">
            ¿Por qué Master Your Money Funciona?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nuestro método probado ha ayudado a miles de jóvenes colombianos a transformar completamente su relación con el dinero.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCardComponent 
              key={benefit.id} 
              benefit={benefit} 
              index={index}
            />
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Únete a la comunidad de jóvenes que ya están construyendo su futuro financiero
          </p>
          
          <div className="inline-flex items-center space-x-4">
            <div className="flex -space-x-2">
              {studentAvatars.map((student) => (
                <div key={student.id} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-course">
                  <Image
                    src={student.src}
                    alt={student.alt}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-left">
              <div className="text-sm font-medium text-gray-900" suppressHydrationWarning={true}>
                {mounted ? `${formatNumber(studentCount)}+ estudiantes` : '2,847+ estudiantes'}
              </div>
              <div className="text-sm text-gray-600">
                ya transformaron sus finanzas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 