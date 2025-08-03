import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad - Master Your Money',
  description: 'Política de privacidad y protección de datos de Master Your Money.',
}

export default function PrivacyPage() {
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
            Política de Privacidad
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
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">1. Introducción</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En SolveMxx, empresa de soluciones digitales integrales especializada en la transformación de startups y emprendedores digitales, valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información personal cuando utiliza nuestro curso &ldquo;Master Your Money&rdquo;.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos comprometemos a cumplir con la Ley 1581 de 2012 de Colombia sobre Protección de Datos Personales y demás normativas aplicables.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">2. Información que Recopilamos</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Información Personal</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono (opcional)</li>
                <li>Información de pago y facturación</li>
                <li>Edad y ubicación general (ciudad)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Información de Uso</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Progreso del curso y módulos completados</li>
                <li>Tiempo dedicado al estudio</li>
                <li>Participación en la comunidad</li>
                <li>Interacciones con el contenido del curso</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Información Técnica</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Dirección IP</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Sistema operativo</li>
                <li>Cookies y tecnologías similares</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">3. Cómo Utilizamos su Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Utilizamos su información personal para:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Proporcionar acceso al curso y sus materiales</li>
                <li>Procesar pagos y generar facturas</li>
                <li>Enviar actualizaciones del curso y comunicaciones importantes</li>
                <li>Brindar soporte técnico y académico</li>
                <li>Personalizar su experiencia de aprendizaje</li>
                <li>Mejorar nuestros servicios y desarrollar nuevos contenidos</li>
                <li>Cumplir con obligaciones legales y fiscales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">4. Base Legal para el Procesamiento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Procesamos su información personal basándose en:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Consentimiento:</strong> Cuando se registra voluntariamente en nuestro curso</li>
                <li><strong>Ejecución contractual:</strong> Para cumplir con nuestras obligaciones del curso</li>
                <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicarnos con usted</li>
                <li><strong>Obligación legal:</strong> Para cumplir con requerimientos fiscales y legales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">5. Compartir Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>No vendemos ni alquilamos su información personal a terceros.</strong> Únicamente compartimos información con:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Proveedores de servicios:</strong> Como procesadores de pago, plataformas de hosting y herramientas de análisis</li>
                <li><strong>Autoridades legales:</strong> Cuando sea requerido por ley</li>
                <li><strong>En caso de transferencia comercial:</strong> Si SolveMxx es adquirida o fusionada</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">6. Seguridad de los Datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Implementamos medidas de seguridad apropiadas para proteger su información:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Encriptación SSL para todas las transmisiones de datos</li>
                <li>Servidores seguros y protegidos</li>
                <li>Acceso restringido a información personal</li>
                <li>Monitoreo regular de seguridad</li>
                <li>Copias de seguridad regulares</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">7. Sus Derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Bajo la ley colombiana, usted tiene derecho a:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Acceso:</strong> Conocer qué información personal tenemos sobre usted</li>
                <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
                <li><strong>Eliminación:</strong> Solicitar la eliminación de su información personal</li>
                <li><strong>Portabilidad:</strong> Recibir una copia de sus datos en formato estructurado</li>
                <li><strong>Restricción:</strong> Limitar el procesamiento de su información</li>
                <li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para ejercer estos derechos, contáctenos en: <strong>privacidad@solvemxx.com</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">8. Cookies y Tecnologías de Seguimiento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia. Puede controlar las cookies a través de la configuración de su navegador.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para más información, consulte nuestra <Link href="/cookies" className="text-primary hover:underline">Política de Cookies</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">9. Retención de Datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conservamos su información personal mientras mantenga una cuenta activa con nosotros o según sea necesario para cumplir con nuestras obligaciones legales. Los datos de facturación se conservan según los requerimientos fiscales colombianos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">10. Transferencias Internacionales</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de Colombia. Garantizamos que cualquier transferencia de datos cumpla con las leyes colombianas de protección de datos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">11. Menores de Edad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestros servicios están dirigidos a personas mayores de 18 años. Si tiene entre 14 y 18 años, necesita el consentimiento de sus padres o tutores legales para usar nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">12. Cambios a esta Política</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Los cambios significativos serán notificados por correo electrónico o mediante aviso prominente en nuestro sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">13. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para preguntas sobre esta Política de Privacidad o el manejo de sus datos personales:
              </p>
              <ul className="list-none text-gray-700 mb-4">
                <li><strong>Email:</strong> privacidad@solvemxx.com</li>
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
 
 

