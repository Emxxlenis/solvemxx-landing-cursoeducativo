'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { Star, Play } from 'lucide-react'
import testimonialsData from '@/data/testimonials.json'
import { Testimonial } from '@/types'
import { formatNumber } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
  onVideoPlay: (testimonial: Testimonial) => void
}

function TestimonialCard({ testimonial, onVideoPlay }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  return (
    <div className="bg-white rounded-course p-8 shadow-course card-hover group relative">
      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-primary/20">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {renderStars(testimonial.rating)}
      </div>

      {/* Testimonial text */}
      <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Result highlight */}
      <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-course text-sm font-medium mb-6">
        <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
        {testimonial.result}
      </div>

      {/* Author info and video */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
            <Image 
              src={testimonial.avatar}
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-gray-900">{testimonial.name}</div>
            <div className="text-sm text-gray-600">{testimonial.age} años • {testimonial.city}</div>
          </div>
        </div>

        {/* Video play button */}
        {testimonial.videoUrl && (
          <button
            onClick={() => onVideoPlay(testimonial)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
          >
            <Play className="w-4 h-4" />
            Ver video
          </button>
        )}
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const testimonials = testimonialsData as Testimonial[]

  const handleVideoPlay = (testimonial: Testimonial) => {
    console.log('Playing testimonial video for:', testimonial.name)
    // Open YouTube video in a new window/tab
    if (testimonial.videoUrl) {
      const youtubeUrl = testimonial.videoUrl.replace('/embed/', '/watch?v=')
      window.open(youtubeUrl, '_blank', 'noopener,noreferrer')
    }
  }

  // Simulate real-time notifications
  useEffect(() => {
    const notifications = [
      { name: 'Ana María', action: 'se inscribió al curso', city: 'Bogotá' },
      { name: 'Carlos Eduardo', action: 'completó el módulo 3', city: 'Medellín' },
      { name: 'Laura Sofía', action: 'logró ahorrar $500K', city: 'Cali' },
    ]

    let currentIndex = 0
    const interval = setInterval(() => {
      // Here you could show toast notifications
      console.log(`${notifications[currentIndex].name} ${notifications[currentIndex].action}`)
      currentIndex = (currentIndex + 1) % notifications.length
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-6">
            Lo que Dicen Nuestros Estudiantes
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Historias reales de jóvenes que transformaron completamente su relación con el dinero.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              onVideoPlay={handleVideoPlay}
            />
          ))}
        </div>

        {/* Social proof stats */}
        <div className="bg-white rounded-course p-8 shadow-course max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{formatNumber(2847)}+</div>
              <div className="text-gray-600">Estudiantes Graduados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">95%</div>
              <div className="text-gray-600">Tasa de Satisfacción</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
                <span className="text-2xl font-bold text-gray-900 ml-2">4.9</span>
              </div>
              <div className="text-gray-600">Calificación Promedio</div>
            </div>
          </div>
        </div>

        {/* Live social proof */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-course px-6 py-4 shadow-course">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-gray-900">
                🔥 María Camila y 47 personas más se inscribieron en las últimas 24 horas
              </div>
              <div className="text-xs text-gray-600">Únete a ellos y cambia tu futuro financiero</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 