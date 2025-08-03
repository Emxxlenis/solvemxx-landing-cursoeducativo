import type { Metadata } from 'next'
import Link from 'next/link'
import { Eye, Ear, Keyboard, Users, CheckCircle, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accesibilidad - Master Your Money',
  description: 'Información sobre las características de accesibilidad del curso Master Your Money.',
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MM</span>
              </div>
              <span className="text-xl font-montserrat font-bold text-gray-900">Master Your Money</span>
            </Link>
            <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
              ← Volver al curso
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-course shadow-sm p-8 lg:p-12">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Accesibilidad
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Estamos comprometidos a hacer que nuestro curso de finanzas sea accesible para todos los estudiantes, independientemente de sus capacidades o tecnologías asistivas.
            </p>
          </div>

          {/* Our Commitment */}
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
              Nuestro Compromiso
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-course p-6 mb-8">
              <p className="text-blue-800 text-lg leading-relaxed">
                En SolveMxx, empresa de soluciones digitales integrales especializada en la transformación de startups y emprendedores digitales, creemos que la educación financiera debe estar al alcance de todos. Nos comprometemos a cumplir con las 
                <strong> Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 nivel AA</strong> y mejoramos continuamente 
                nuestras características de accesibilidad.
              </p>
            </div>
          </section>

          {/* Accessibility Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-8">
              Características de Accesibilidad
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Visual Accessibility */}
              <div className="bg-gray-50 rounded-course p-6">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Accesibilidad Visual</h3>
                </div>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Contraste de color que cumple con WCAG AA (4.5:1 mínimo)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Texto escalable hasta 200% sin pérdida de funcionalidad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Compatibilidad completa con lectores de pantalla</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Descripciones alternativas para todas las imágenes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Indicadores de foco visibles y claros</span>
                  </li>
                </ul>
              </div>

              {/* Audio Accessibility */}
              <div className="bg-gray-50 rounded-course p-6">
                <div className="flex items-center mb-4">
                  <Ear className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Accesibilidad Auditiva</h3>
                </div>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Subtítulos sincronizados en español para todos los videos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Transcripciones completas de contenido de audio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Control de volumen independiente</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Opciones de velocidad de reproducción</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Contenido visual alternativo para información de audio</span>
                  </li>
                </ul>
              </div>

              {/* Motor Accessibility */}
              <div className="bg-gray-50 rounded-course p-6">
                <div className="flex items-center mb-4">
                  <Keyboard className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Accesibilidad Motora</h3>
                </div>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Navegación completa por teclado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Áreas de clic amplias (mínimo 44x44 píxeles)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Sin límites de tiempo estrictos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Compatibilidad con tecnologías de switch</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Alternativas a gestos complejos</span>
                  </li>
                </ul>
              </div>

              {/* Cognitive Accessibility */}
              <div className="bg-gray-50 rounded-course p-6">
                <div className="flex items-center mb-4">
                  <Settings className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Accesibilidad Cognitiva</h3>
                </div>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Navegación consistente y predecible</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Lenguaje claro y simple</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Indicadores de progreso claros</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Resúmenes y repetición de conceptos clave</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Múltiples formatos de contenido (video, texto, audio)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Assistive Technologies */}
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
              Tecnologías Asistivas Compatibles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Lectores de Pantalla</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• NVDA (Windows) - Versión 2020.1+</li>
                  <li>• JAWS (Windows) - Versión 2020+</li>
                  <li>• VoiceOver (Mac/iOS) - Nativo</li>
                  <li>• TalkBack (Android) - Nativo</li>
                  <li>• Dragon NaturallySpeaking</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Otros Dispositivos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Teclados alternativos</li>
                  <li>• Dispositivos de switch</li>
                  <li>• Eye-tracking systems</li>
                  <li>• Magnificadores de pantalla</li>
                  <li>• Dispositivos de entrada por voz</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Browser Settings */}
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
              Configuraciones Recomendadas del Navegador
            </h2>
            
            <div className="bg-green-50 border border-green-200 rounded-course p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">
                Para una mejor experiencia de accesibilidad:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-900 mb-2">Configuraciones Generales:</h4>
                  <ul className="list-disc list-inside text-green-800 space-y-1">
                    <li>Habilitar JavaScript</li>
                    <li>Permitir ventanas emergentes para nuestro sitio</li>
                    <li>Habilitar autocompletado de formularios</li>
                    <li>Permitir cookies esenciales</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-green-900 mb-2">Configuraciones de Accesibilidad:</h4>
                  <ul className="list-disc list-inside text-green-800 space-y-1">
                    <li>Aumentar tamaño de texto si es necesario</li>
                    <li>Habilitar alto contraste (si está disponible)</li>
                    <li>Configurar preferencias de movimiento reducido</li>
                    <li>Ajustar configuraciones de audio</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Standards Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
              Cumplimiento de Estándares
            </h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-course p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  WCAG 2.1 Nivel AA
                </h3>
                <p className="text-gray-700 mb-3">
                  Nuestro curso cumple con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 nivel AA, 
                  el estándar internacional para la accesibilidad web.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Última auditoría:</strong> {new Date().toLocaleDateString('es-CO', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-course p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Section 508 (Estados Unidos)
                </h3>
                <p className="text-gray-700">
                  Cumplimos con los estándares de Section 508, garantizando que nuestro contenido sea accesible 
                  según los estándares del gobierno estadounidense.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-course p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  EN 301 549 (Unión Europea)
                </h3>
                <p className="text-gray-700">
                  Nuestro curso también cumple con el estándar europeo EN 301 549, asegurando la accesibilidad 
                  para usuarios en toda Europa.
                </p>
              </div>
            </div>
          </section>

          {/* Support and Feedback */}
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
              Soporte y Retroalimentación
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-course p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  ¿Necesitas Ayuda con Accesibilidad?
                </h3>
                <p className="text-blue-800">
                  Nuestro equipo especializado en accesibilidad está aquí para ayudarte a aprovechar al máximo tu experiencia de aprendizaje.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Contacto Directo:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li><strong>Email:</strong> accesibilidad@solvemxx.com</li>
                    <li><strong>Teléfono:</strong> +57 300 123 4567</li>
                    <li><strong>WhatsApp:</strong> Soporte inmediato</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Tiempo de Respuesta:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Email: 24 horas</li>
                    <li>• Teléfono: Inmediato (horario laboral)</li>
                    <li>• Chat: 2-4 horas</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-course hover:bg-blue-700 transition-colors font-medium"
                >
                  Contactar Soporte de Accesibilidad
                </Link>
                
                <a 
                  href="mailto:accesibilidad@solvemxx.com"
                  className="inline-flex items-center px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-course hover:bg-blue-50 transition-colors font-medium"
                >
                  Enviar Sugerencia
                </a>
              </div>
            </div>
          </section>

          {/* Ongoing Improvements */}
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
              Mejoras Continuas
            </h2>
            
            <p className="text-gray-700 mb-6">
              La accesibilidad es un proceso continuo. Regularmente:
            </p>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Realizamos auditorías de accesibilidad con usuarios reales</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Actualizamos nuestras prácticas según nuevos estándares</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Incorporamos retroalimentación de la comunidad</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Capacitamos a nuestro equipo en mejores prácticas</span>
              </li>
            </ul>
          </section>

          {/* Back to Course Button */}
          <div className="border-t pt-8 mt-12">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-course hover:bg-primary/90 transition-colors font-medium"
            >
              ← Volver al Curso
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 
 
 
 
