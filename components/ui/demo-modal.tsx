'use client'

import { useEffect, useCallback } from 'react'
import { X, ExternalLink, Info } from 'lucide-react'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  // Handle escape key
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }, [onClose])

  const handleCloseClick = useCallback(() => {
    onClose()
  }, [onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 sm:p-6"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      aria-describedby="demo-modal-description"
    >
      <div 
        className="bg-white rounded-course shadow-2xl max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <h2 
              id="demo-modal-title"
              className="text-lg sm:text-xl lg:text-2xl font-montserrat font-bold text-gray-900"
            >
              Página de Demostración
            </h2>
          </div>
          <button
            onClick={handleCloseClick}
            className="p-1 sm:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div id="demo-modal-description">
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Esta es una <strong>página de demostración</strong> creada como parte del portafolio de 
              <span className="text-primary font-semibold"> SolveMxx</span>. 
              Muestra nuestras capacidades integrales en <strong>ingeniería de software</strong>, <strong>análisis de datos</strong> e <strong>inteligencia artificial</strong> para la transformación digital de startups y emprendedores.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-course p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
                <strong>Nota:</strong> Los botones de inscripción y formularios están configurados para mostrar este aviso. 
                En un entorno de producción, estos elementos procesarían pagos reales y manejarían inscripciones.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                Características demostradas:
              </h3>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Ingeniería de software con Next.js y TypeScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Análisis de datos y tracking de conversión</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>A/B testing automatizado con IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Diseño UX/UI profesional y accesible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Optimización SEO y performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-6 border-t border-gray-200">
          <button
            onClick={handleCloseClick}
            className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-course transition-colors font-medium text-sm sm:text-base"
          >
            Continuar Explorando
          </button>
          
          <a
            href="https://solvemxx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 bg-primary hover:bg-primary/90 text-white rounded-course transition-colors font-medium text-sm sm:text-base flex items-center justify-center gap-2"
          >
            <span>Visitar SolveMxx</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
} 
 

