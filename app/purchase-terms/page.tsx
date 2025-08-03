import type { Metadata } from 'next'
import Link from 'next/link'
import { CreditCard, Shield, Clock, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Términos de Compra - Master Your Money',
  description: 'Términos y condiciones específicos para la compra del curso Master Your Money.',
}

export default function PurchaseTermsPage() {
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
            Términos de Compra
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CO', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            {/* Purchase Summary */}
            <section className="mb-12">
              <div className="bg-blue-50 border border-blue-200 rounded-course p-6">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-montserrat font-bold text-blue-900">
                    Resumen de Compra
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Producto:</h3>
                    <p className="text-blue-800">Master Your Money - Curso Completo de Finanzas</p>
                    
                    <h3 className="font-semibold text-blue-900 mb-2 mt-4">Precio:</h3>
                    <p className="text-blue-800">
                      <span className="line-through text-blue-600">$297.000 COP</span> 
                      <span className="text-xl font-bold ml-2">$97.000 COP</span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Incluye:</h3>
                    <ul className="text-blue-800 space-y-1">
                      <li>• 6 módulos de video (5+ horas)</li>
                      <li>• Plantillas y herramientas</li>
                      <li>• Acceso de por vida</li>
                      <li>• Garantía de 30 días</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">1. Términos de Pago</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Precio y Moneda</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>El precio del curso es de $97.000 COP (pesos colombianos)</li>
                <li>Esta es una oferta promocional limitada, precio regular $297.000 COP</li>
                <li>Los precios incluyen todos los impuestos aplicables en Colombia</li>
                <li>No hay costos adicionales o pagos recurrentes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Métodos de Pago Aceptados</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>PSE:</strong> Pagos Seguros en Línea (bancos colombianos)</li>
                <li><strong>Tarjetas de Crédito:</strong> Visa, Mastercard</li>
                <li><strong>PayU:</strong> Plataforma de pagos local</li>
                <li><strong>Efecty:</strong> Pagos en efectivo (disponible en algunas promociones)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Procesamiento de Pagos</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Los pagos se procesan de forma segura a través de Stripe y PayU</li>
                <li>El acceso al curso se activa inmediatamente después del pago exitoso</li>
                <li>Recibirás una factura electrónica por email</li>
                <li>Todos los pagos están encriptados con SSL</li>
              </ul>
            </section>

            {/* Access Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">2. Términos de Acceso</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Activación Inmediata</h3>
              <p className="text-gray-700 mb-4">
                Una vez confirmado el pago, recibirás acceso inmediato al curso completo mediante:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Email de confirmación con credenciales de acceso</li>
                <li>Link directo a la plataforma de aprendizaje</li>
                <li>Instrucciones para crear tu cuenta de estudiante</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Duración del Acceso</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Acceso de por vida al contenido del curso</li>
                <li>Todas las actualizaciones futuras incluidas sin costo</li>
                <li>Acceso a la comunidad privada de estudiantes</li>
                <li>Soporte técnico durante toda la vida útil del curso</li>
              </ul>
            </section>

            {/* Delivery Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">3. Entrega del Producto</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-course p-6 mb-6">
                <div className="flex items-center mb-3">
                  <Clock className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-green-900">Entrega Instantánea</h3>
                </div>
                <p className="text-green-800">
                  El curso es 100% digital y se entrega inmediatamente después del pago. No hay productos físicos que enviar.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Formato Digital</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Videos HD streaming y descargables</li>
                <li>PDFs descargables con plantillas y herramientas</li>
                <li>Acceso web desde cualquier dispositivo</li>
                <li>Aplicación móvil compatible (iOS y Android)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Requisitos Técnicos</h3>
              <p className="text-gray-700 mb-4">
                Para acceder al curso necesitas: conexión a internet, navegador web actualizado, y dispositivo con capacidad de reproducir video HD. 
                Ver <Link href="/technical-requirements" className="text-primary hover:underline">requisitos técnicos completos</Link>.
              </p>
            </section>

            {/* Refund Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">4. Política de Reembolsos</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-course p-6 mb-6">
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-yellow-600 mr-2" />
                  <h3 className="text-lg font-semibold text-yellow-900">Garantía de 30 Días</h3>
                </div>
                <p className="text-yellow-800">
                  Ofrecemos una garantía completa de satisfacción. Si no estás completamente satisfecho, 
                  te devolvemos el 100% de tu dinero dentro de los primeros 30 días.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                Para detalles completos sobre nuestra política de reembolsos, 
                consulta nuestra <Link href="/refund" className="text-primary hover:underline">página de política de reembolsos</Link>.
              </p>
            </section>

            {/* Billing Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">5. Información de Facturación</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Factura Electrónica</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Recibirás una factura electrónica válida por email</li>
                <li>La factura incluye todos los detalles requeridos por la DIAN</li>
                <li>Puedes solicitar datos específicos de facturación durante la compra</li>
                <li>Las facturas se envían dentro de las 24 horas posteriores al pago</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Datos Fiscales</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>SolveMxx está registrado ante la DIAN</li>
                <li>Régimen simple de tributación</li>
                <li>Todos los impuestos aplicables están incluidos en el precio</li>
              </ul>
            </section>

            {/* Security and Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">6. Seguridad y Privacidad</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Seguridad de Pagos</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Utilizamos encriptación SSL de 256 bits</li>
                <li>Cumplimos con estándares PCI DSS</li>
                <li>No almacenamos información de tarjetas de crédito</li>
                <li>Procesadores certificados (Stripe, PayU)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Protección de Datos</h3>
              <p className="text-gray-700 mb-4">
                Tu información personal está protegida según nuestra 
                <Link href="/privacy" className="text-primary hover:underline"> Política de Privacidad</Link> 
                y la Ley 1581 de 2012 de Colombia.
              </p>
            </section>

            {/* Promotional Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">7. Términos Promocionales</h2>
              
              <div className="bg-orange-50 border border-orange-200 rounded-course p-6 mb-6">
                <div className="flex items-center mb-3">
                  <AlertCircle className="w-6 h-6 text-orange-600 mr-2" />
                  <h3 className="text-lg font-semibold text-orange-900">Oferta por Tiempo Limitado</h3>
                </div>
                <p className="text-orange-800">
                  El precio promocional de $97.000 COP es válido por tiempo limitado. 
                  Después del período promocional, el precio retornará a $297.000 COP.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Condiciones de la Promoción</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Válida únicamente durante el período anunciado</li>
                <li>Una compra por persona</li>
                <li>No acumulable con otras promociones</li>
                <li>SolveMxx se reserva el derecho de modificar o terminar la promoción</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">8. Contacto para Compras</h2>
              
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre tu compra o necesitas asistencia:
              </p>
              
              <div className="bg-gray-50 rounded-course p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Soporte de Ventas:</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li><strong>Email:</strong> ventas@solvemxx.com</li>
                      <li><strong>WhatsApp:</strong> +57 300 123 4567</li>
                      <li><strong>Teléfono:</strong> +57 300 123 4567</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Horarios de Atención:</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>Lunes - Viernes: 9:00 AM - 6:00 PM</li>
                      <li>Sábados: 10:00 AM - 2:00 PM</li>
                      <li>Domingos: Cerrado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Jurisdiction */}
            <section className="mb-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">9. Jurisdicción Legal</h2>
              
              <p className="text-gray-700 mb-4">
                Estos términos de compra se rigen por las leyes de la República de Colombia. 
                Cualquier disputa relacionada con la compra será resuelta en los tribunales 
                competentes de Bogotá, Colombia.
              </p>
              
              <p className="text-gray-700 mb-4">
                Para consultar nuestros términos generales de servicio, 
                visita <Link href="/terms" className="text-primary hover:underline">esta página</Link>.
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-course p-8 text-center">
            <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              ¿Listo para Transformar tus Finanzas?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Únete a los 2,847+ estudiantes que ya están construyendo su futuro financiero.
            </p>
            <Link 
              href="/#pricing"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-course hover:bg-primary/90 transition-colors font-medium text-lg"
            >
              Comprar Ahora - $97.000 COP
            </Link>
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
 
 
 