'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Play, Award, Users, Star } from 'lucide-react'
import instructorData from '@/data/instructor.json'
import { Instructor } from '@/types'

export default function InstructorSection() {
  const instructor = instructorData as Instructor
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  return (
    <section className="section-padding bg-gray-50" id="instructor">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-6">
                  Conoce a tu Instructora
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Una experta que entiende los desafíos financieros únicos de los jóvenes colombianos.
                </p>
              </div>

              {/* Instructor card */}
              <div className="bg-white rounded-course p-8 shadow-course">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary/20">
                    <Image 
                      src={instructor.avatar}
                      alt={instructor.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-gray-900">{instructor.name}</h3>
                    <p className="text-lg text-primary font-medium">{instructor.title}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {instructor.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Credenciales:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {instructor.credentials.map((credential, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm text-gray-600">Años de experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-gray-600">Estudiantes</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <div className="text-2xl font-bold text-primary">4.9</div>
                      <Star className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" />
                    </div>
                    <div className="text-sm text-gray-600">Calificación</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right content - Video */}
            <div className="space-y-6">
              <div className="relative rounded-course overflow-hidden shadow-course-hover">
                {!isVideoPlaying ? (
                  <div 
                    className="relative aspect-[4/5] bg-gradient-to-br from-gray-900 to-gray-800 cursor-pointer group"
                    onClick={handleVideoPlay}
                  >
                    <Image 
                      src="https://img.youtube.com/vi/p2AWYanIHkc/maxresdefault.jpg"
                      alt={`Video de introducción de ${instructor.name}`}
                      width={640}
                      height={480}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-accent hover:bg-accent/90 text-white p-6 rounded-full transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                        <Play className="w-8 h-8 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/60 text-white p-4 rounded-course">
                        <h4 className="font-semibold mb-1">Mensaje Personal de {instructor.name}</h4>
                        <p className="text-sm opacity-90">Descubre por qué miles de jóvenes han transformado sus finanzas</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[4/5]">
                    <iframe
                      src={`${instructor.videoUrl}?autoplay=1&mute=1&controls=1&rel=0`}
                      title={`Video de introducción de ${instructor.name}`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
              
              {/* Social proof */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-course p-6 shadow-course text-center">
                  <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">2,847</div>
                  <div className="text-sm text-gray-600">Estudiantes activos</div>
                </div>
                <div className="bg-white rounded-course p-6 shadow-course text-center">
                  <Award className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Tasa de éxito</div>
                </div>
              </div>
              
              {/* Quote */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-course p-6">
                <blockquote className="text-lg text-gray-800 italic leading-relaxed">
                  &ldquo;Mi misión es simple: darte las herramientas exactas que necesitas para tomar control de tu dinero y construir la vida que sueñas.&rdquo;
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold text-gray-900">{instructor.name}</div>
                  <div className="text-primary text-sm">{instructor.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 