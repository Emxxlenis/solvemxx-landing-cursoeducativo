import type { Metadata } from 'next'
import Link from 'next/link'
import { Monitor, Smartphone, Wifi, Download, Settings, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Requisitos Técnicos - Master Your Money',
  description: 'Requisitos técnicos y del sistema para acceder al curso Master Your Money.',
}

export default function TechnicalRequirementsPage() {
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
          <h1 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-8">
            Requisitos Técnicos
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Asegúrate de que tu dispositivo y conexión cumplan con estos requisitos mínimos para una experiencia óptima del curso.
          </p>

          {/* System Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-8">
              Requisitos del Sistema
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Desktop Requirements */}
              <div className="bg-gray-50 rounded-course p-6">
                <div className="flex items-center mb-4">
                  <Monitor className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Computadora de Escritorio/Laptop</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sistemas Operativos Compatibles:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Windows 10 o superior</li>
                      <li>macOS 10.14 (Mojave) o superior</li>
                      <li>Ubuntu 18.04 o distribuciones Linux equivalentes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Navegadores Recomendados:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Google Chrome 90+</li>
                      <li>Mozilla Firefox 88+</li>
                      <li>Safari 14+</li>
                      <li>Microsoft Edge 90+</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Especificaciones Mínimas:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>RAM: 4 GB mínimo (8 GB recomendado)</li>
                      <li>Pantalla: Resolución 1280x720 mínimo</li>
                      <li>Audio: Altavoces o auriculares</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mobile Requirements */}
              <div className="bg-gray-50 rounded-course p-6">
                <div className="flex items-center mb-4">
                  <Smartphone className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Dispositivos Móviles</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">iOS (iPhone/iPad):</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>iOS 13.0 o superior</li>
                      <li>Safari móvil o Chrome para iOS</li>
                      <li>2 GB de RAM mínimo</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Android:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Android 8.0 (API nivel 26) o superior</li>
                      <li>Chrome para Android o Samsung Internet</li>
                      <li>3 GB de RAM mínimo</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Características Requeridas:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Pantalla de 5&rdquo; o superior</li>
                      <li>Conexión a internet estable</li>
                      <li>Almacenamiento: 1 GB libre</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Internet Connection */}
          <section className="mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-course p-6">
              <div className="flex items-center mb-4">
                <Wifi className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-blue-900">Conexión a Internet</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Velocidad Mínima Requerida:</h4>
                  <ul className="list-disc list-inside text-blue-800 space-y-1">
                    <li>Descarga: 5 Mbps para HD (720p)</li>
                    <li>Descarga: 10 Mbps para Full HD (1080p)</li>
                    <li>Subida: 1 Mbps para participación en vivo</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Conexiones Recomendadas:</h4>
                  <ul className="list-disc list-inside text-blue-800 space-y-1">
                    <li>Wi-Fi estable y confiable</li>
                    <li>Ethernet por cable (ideal)</li>
                    <li>4G/LTE (para móviles)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Software Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
              Software Adicional
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-course p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Download className="w-6 h-6 mr-2 text-primary" />
                  Aplicaciones Recomendadas
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Para Tomar Notas:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Notion (gratuito)</li>
                      <li>• Evernote</li>
                      <li>• Google Keep</li>
                      <li>• Apple Notes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Para Hojas de Cálculo:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Google Sheets (gratuito)</li>
                      <li>• Microsoft Excel</li>
                      <li>• LibreOffice Calc (gratuito)</li>
                      <li>• Numbers (Mac/iOS)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-course p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Settings className="w-6 h-6 mr-2 text-primary" />
                  Configuraciones del Navegador
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Configuraciones Requeridas:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>JavaScript habilitado</li>
                      <li>Cookies de terceros permitidas</li>
                      <li>Ventanas emergentes permitidas para nuestro dominio</li>
                      <li>Hardware acceleration habilitado (para videos)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Extensiones que Pueden Causar Problemas:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Bloqueadores de anuncios agresivos</li>
                      <li>Extensiones de privacidad estrictas</li>
                      <li>VPN que bloquean contenido</li>
                      <li>Bloqueadores de scripts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
              Características de Accesibilidad
            </h2>
            
            <div className="bg-green-50 border border-green-200 rounded-course p-6">
              <p className="text-green-800 mb-4">
                Nuestro curso está diseñado para ser accesible para todos los estudiantes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Funciones Incluidas:</h4>
                  <ul className="list-disc list-inside text-green-800 space-y-1">
                    <li>Subtítulos en español para todos los videos</li>
                    <li>Transcripciones de audio disponibles</li>
                    <li>Navegación por teclado completa</li>
                    <li>Compatibilidad con lectores de pantalla</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Tecnologías Asistivas Compatibles:</h4>
                  <ul className="list-disc list-inside text-green-800 space-y-1">
                    <li>NVDA (Windows)</li>
                    <li>JAWS (Windows)</li>
                    <li>VoiceOver (Mac/iOS)</li>
                    <li>TalkBack (Android)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
              Solución de Problemas Comunes
            </h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-course p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🎥 Los videos no se reproducen o se cargan lentamente
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Verifica tu velocidad de internet (mínimo 5 Mbps)</li>
                  <li>Cierra otras aplicaciones que usen ancho de banda</li>
                  <li>Prueba con un navegador diferente</li>
                  <li>Desactiva temporalmente extensiones del navegador</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-course p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🔐 No puedo acceder a mi cuenta
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Verifica que estés usando el email correcto</li>
                  <li>Revisa tu carpeta de spam por emails de confirmación</li>
                  <li>Usa la función &ldquo;Olvidé mi contraseña&rdquo;</li>
                  <li>Contacta a soporte si persiste el problema</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-course p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  📱 Problemas en dispositivos móviles
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Actualiza tu navegador a la versión más reciente</li>
                  <li>Reinicia la aplicación del navegador</li>
                  <li>Verifica que tengas suficiente almacenamiento</li>
                  <li>Prueba en modo incógnito/privado</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Support Contact */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-course p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-yellow-800">
                ¿Sigues Teniendo Problemas?
              </h3>
            </div>
            
                          <p className="text-yellow-700 mb-4">
                Si tu dispositivo no cumple con estos requisitos o experimentas problemas técnicos, nuestro equipo de soporte de SolveMxx, empresa de soluciones digitales integrales, está aquí para ayudarte.
              </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-course hover:bg-primary/90 transition-colors font-medium"
              >
                Contactar Soporte Técnico
              </Link>
              
              <a 
                href="mailto:soporte@solvemxx.com"
                className="inline-flex items-center px-6 py-3 bg-white border border-primary text-primary rounded-course hover:bg-primary/5 transition-colors font-medium"
              >
                soporte@solvemxx.com
              </a>
            </div>
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
 
 

