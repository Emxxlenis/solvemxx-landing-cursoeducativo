import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos de Servicio - Master Your Money',
  description: 'Términos y condiciones de uso del curso Master Your Money de SolveMxx.',
}

export default function TermsPage() {
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
            Términos de Servicio
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
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al acceder y utilizar el curso &ldquo;Master Your Money&rdquo; operado por SolveMxx, usted acepta estar legalmente obligado por estos términos de servicio. Si no está de acuerdo con alguno de estos términos, no debe usar nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">2. Descripción del Servicio</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                &ldquo;Master Your Money&rdquo; es un curso en línea de educación financiera diseñado para jóvenes colombianos. El curso incluye:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>6 módulos de video con más de 5 horas de contenido</li>
                <li>Plantillas y herramientas financieras descargables</li>
                <li>Acceso a comunidad privada de estudiantes</li>
                <li>Sesiones de Q&A mensuales en vivo</li>
                <li>Soporte técnico y académico</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">3. Acceso y Licencia de Uso</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Una vez completada la compra, le otorgamos una licencia personal, no transferible y no exclusiva para acceder al contenido del curso. Esta licencia incluye:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Acceso de por vida al contenido del curso</li>
                <li>Derecho a todas las actualizaciones futuras</li>
                <li>Uso personal y no comercial del material</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Prohibiciones:</strong> No puede compartir, distribuir, revender o reproducir el contenido del curso sin autorización expresa por escrito.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">4. Política de Reembolsos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ofrecemos una garantía de devolución del 100% durante los primeros 30 días después de la compra, siempre que:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Haya completado al menos el 80% del curso</li>
                <li>Haya aplicado las estrategias enseñadas por al menos 30 días</li>
                <li>Pueda demostrar que siguió las instrucciones del curso</li>
                <li>Solicite el reembolso dentro del período de garantía</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">5. Responsabilidades del Usuario</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Como usuario del curso, usted se compromete a:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                <li>Usar el contenido únicamente para fines personales</li>
                <li>Respetar las reglas de la comunidad</li>
                <li>No interferir con el funcionamiento de la plataforma</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">6. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El contenido del curso es de naturaleza educativa. SolveMxx no garantiza resultados financieros específicos. Los resultados individuales pueden variar según la situación personal, dedicación y aplicación de las estrategias enseñadas.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                SolveMxx no será responsable por decisiones financieras tomadas basándose en el contenido del curso. Recomendamos consultar con un asesor financiero profesional para decisiones importantes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">7. Propiedad Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todo el contenido del curso, incluyendo videos, textos, gráficos, plantillas y materiales, es propiedad exclusiva de SolveMxx y está protegido por las leyes de derechos de autor de Colombia. SolveMxx es una empresa de soluciones digitales integrales especializada en la transformación de startups y emprendedores digitales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">8. Modificaciones del Servicio</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos reservamos el derecho de modificar, suspender o discontinuar cualquier parte del servicio en cualquier momento. Las mejoras y actualizaciones del contenido se proporcionarán sin costo adicional.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">9. Ley Aplicable</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa será resuelta en los tribunales competentes de Bogotá, Colombia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">10. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para preguntas sobre estos términos, contáctanos en:
              </p>
              <ul className="list-none text-gray-700 mb-4">
                <li><strong>Email:</strong> soporte@solvemxx.com</li>
                <li><strong>Teléfono:</strong> +57 300 123 4567</li>
                <li><strong>Dirección:</strong> Bogotá, Colombia</li>
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
 
 

