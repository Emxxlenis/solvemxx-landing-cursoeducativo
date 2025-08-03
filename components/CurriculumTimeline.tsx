'use client'

import { Play, Clock, CheckCircle } from 'lucide-react'
import courseModules from '@/data/course-modules.json'
import { CourseModule } from '@/types'

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  GraduationCap: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  Calculator: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="16" y2="18" />
    </svg>
  ),
  CreditCard: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
  Shield: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  TrendingUp: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Target: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

interface ModuleCardProps {
  module: CourseModule
  index: number
  isLast: boolean
  onPreviewClick: (module: CourseModule) => void
}

function ModuleCard({ module, index, isLast, onPreviewClick }: ModuleCardProps) {
  const Icon = iconMap[module.icon] || iconMap['GraduationCap']
  
  return (
    <div className="relative flex gap-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-secondary" />
      )}
      
      {/* Timeline dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-course">
          {index + 1}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="bg-white rounded-course p-8 shadow-course card-hover group">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            {/* Main content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Icon className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold text-primary">Módulo {index + 1}</span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {module.duration}
                </div>
              </div>
              
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {module.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {module.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Lo que aprenderás:</h4>
                <ul className="space-y-2">
                  {module.outcomes.map((outcome, outcomeIndex) => (
                    <li key={outcomeIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Preview section */}
            {module.videoUrl && (
              <div className="lg:w-80">
                <div 
                  className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-course overflow-hidden cursor-pointer group/video"
                  onClick={() => onPreviewClick(module)}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://img.youtube.com/vi/p2AWYanIHkc/maxresdefault.jpg')`
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 transform group-hover/video:scale-110">
                      <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/60 text-white px-2 py-1 rounded text-xs">
                    Vista previa • {module.duration}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CurriculumTimeline() {
  const modules = courseModules as CourseModule[]
  
  const handlePreviewClick = (module: CourseModule) => {
    console.log('Opening YouTube preview for:', module.title)
    // Open YouTube video in a new window/tab
    if (module.videoUrl) {
      const youtubeUrl = module.videoUrl.replace('/embed/', '/watch?v=')
      window.open(youtubeUrl, '_blank', 'noopener,noreferrer')
    }
  }
  
  // Calculate total duration in minutes
  const totalMinutes = modules.reduce((total, module) => {
    const minutes = parseInt(module.duration.replace(' min', ''))
    return total + minutes
  }, 0)
  
  const formatTotalDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  return (
    <section className="section-padding bg-white" id="curriculum">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-6">
            Tu Hoja de Ruta Hacia la Libertad Financiera
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Un plan estructurado y probado que te llevará de principiante a experto en finanzas personales en solo 30 días.
          </p>
          
          {/* Stats */}
          <div className="inline-flex items-center justify-center gap-8 bg-gray-50 rounded-course px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{modules.length}</div>
              <div className="text-sm text-gray-600">Módulos</div>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{formatTotalDuration(totalMinutes)}</div>
              <div className="text-sm text-gray-600">Contenido</div>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">30</div>
              <div className="text-sm text-gray-600">Días</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={module}
              index={index}
              isLast={index === modules.length - 1}
              onPreviewClick={handlePreviewClick}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-course">
          <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
            ¿Listo para Comenzar tu Transformación Financiera?
          </h3>
          <p className="text-gray-600 mb-6">
            Cada módulo está diseñado para construir sobre el anterior, creando una base sólida para tu éxito financiero.
          </p>
        </div>
      </div>
    </section>
  )
} 