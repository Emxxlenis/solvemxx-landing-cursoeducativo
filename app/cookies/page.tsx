import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Cookies - Master Your Money',
  description: 'Información sobre el uso de cookies en Master Your Money.',
}

export default function CookiesPage() {
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
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CO', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">¿Qué son las Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos ayudan a recordar sus preferencias, mejorar su experiencia de usuario y analizar cómo utiliza nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">Tipos de Cookies que Utilizamos</h2>
              
              <div className="bg-gray-50 rounded-course p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Cookies Esenciales</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Propósito:</strong> Necesarias para el funcionamiento básico del sitio web.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Duración:</strong> Sesión (se eliminan al cerrar el navegador)
                </p>
                <p className="text-gray-700">
                  <strong>Ejemplos:</strong> Autenticación de usuario, carrito de compras, preferencias de idioma.
                </p>
              </div>

              <div className="bg-gray-50 rounded-course p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Cookies de Rendimiento</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Propósito:</strong> Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Duración:</strong> Hasta 2 años
                </p>
                <p className="text-gray-700">
                  <strong>Proveedores:</strong> Google Analytics, Vercel Analytics
                </p>
              </div>

              <div className="bg-gray-50 rounded-course p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Cookies de Funcionalidad</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Propósito:</strong> Recordar sus elecciones y personalizar su experiencia.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Duración:</strong> Hasta 1 año
                </p>
                <p className="text-gray-700">
                  <strong>Ejemplos:</strong> Progreso del curso, preferencias de video, configuración de interfaz.
                </p>
              </div>

              <div className="bg-gray-50 rounded-course p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies de Marketing</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Propósito:</strong> Mostrar contenido relevante y medir la efectividad de nuestras campañas.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Duración:</strong> Hasta 90 días
                </p>
                <p className="text-gray-700">
                  <strong>Proveedores:</strong> Facebook Pixel, Google Ads (solo si acepta cookies de marketing)
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">Cookies Específicas que Utilizamos</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Propósito</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_session_id</td>
                      <td className="border border-gray-300 px-4 py-2">Mantiene la sesión del usuario</td>
                      <td className="border border-gray-300 px-4 py-2">Sesión</td>
                      <td className="border border-gray-300 px-4 py-2">Esencial</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">course_progress</td>
                      <td className="border border-gray-300 px-4 py-2">Guarda el progreso del curso</td>
                      <td className="border border-gray-300 px-4 py-2">1 año</td>
                      <td className="border border-gray-300 px-4 py-2">Funcionalidad</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">ab_test_hero</td>
                      <td className="border border-gray-300 px-4 py-2">Tests A/B para optimización</td>
                      <td className="border border-gray-300 px-4 py-2">30 días</td>
                      <td className="border border-gray-300 px-4 py-2">Funcionalidad</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_ga</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - identificador único</td>
                      <td className="border border-gray-300 px-4 py-2">2 años</td>
                      <td className="border border-gray-300 px-4 py-2">Rendimiento</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_gid</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - sesión</td>
                      <td className="border border-gray-300 px-4 py-2">24 horas</td>
                      <td className="border border-gray-300 px-4 py-2">Rendimiento</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">Cómo Controlar las Cookies</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Configuración del Navegador</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Puede controlar y eliminar cookies a través de la configuración de su navegador. Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-course p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Chrome</h4>
                  <p className="text-sm text-gray-700">Configuración → Privacidad y seguridad → Cookies</p>
                </div>
                <div className="bg-gray-50 rounded-course p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Firefox</h4>
                  <p className="text-sm text-gray-700">Opciones → Privacidad y seguridad → Cookies</p>
                </div>
                <div className="bg-gray-50 rounded-course p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                  <p className="text-sm text-gray-700">Preferencias → Privacidad → Cookies</p>
                </div>
                <div className="bg-gray-50 rounded-course p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Edge</h4>
                  <p className="text-sm text-gray-700">Configuración → Privacidad → Cookies</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nuestro Panel de Preferencias</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                También puede gestionar sus preferencias de cookies a través de nuestro panel de configuración, accesible desde el banner de cookies que aparece en su primera visita.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">Cookies de Terceros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos servicios de terceros que pueden establecer sus propias cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> Para análisis de tráfico web</li>
                <li><strong>Vercel Analytics:</strong> Para métricas de rendimiento</li>
                <li><strong>Stripe:</strong> Para procesamiento seguro de pagos</li>
                <li><strong>YouTube:</strong> Para videos embebidos (solo si reproduce videos)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estas cookies están sujetas a las políticas de privacidad de los respectivos proveedores.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">Consentimiento y Base Legal</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Solicitamos su consentimiento para cookies no esenciales. Puede retirar su consentimiento en cualquier momento a través de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Nuestro panel de preferencias de cookies</li>
                <li>Configuración de su navegador</li>
                <li>Contactándonos directamente</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">Cambios en esta Política</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en nuestras prácticas o por razones operacionales, legales o regulatorias.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene preguntas sobre nuestra Política de Cookies, puede contactar a SolveMxx, empresa de soluciones digitales integrales especializada en la transformación de startups y emprendedores digitales:
              </p>
              <ul className="list-none text-gray-700 mb-4">
                <li><strong>Email:</strong> cookies@solvemxx.com</li>
                <li><strong>Teléfono:</strong> +57 300 123 4567</li>
              </ul>
            </section>
          </div>

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
 
 
 
