import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Reembolsos - Master Your Money',
  description: 'Información sobre nuestra política de reembolsos y garantía de 30 días.',
}

export default function RefundPage() {
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
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-course p-8 lg:p-12 mb-12">
            <div className="flex items-center mb-6">
              <Shield className="w-12 h-12 mr-4" />
              <div>
                <h1 className="text-3xl lg:text-4xl font-montserrat font-bold mb-2">
                  Garantía de Satisfacción
                </h1>
                <p className="text-green-100 text-xl">
                  100% de tu dinero de vuelta si no estás completamente satisfecho
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-course shadow-sm p-8 lg:p-12">
            
            {/* 30-Day Guarantee */}
            <section className="mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <span className="text-2xl font-bold text-green-600">30</span>
                </div>
                <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
                  Garantía de 30 Días
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Estamos tan seguros de que nuestro curso transformará tus finanzas que ofrecemos una garantía completa de 30 días.
                </p>
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-12">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-8">
                ¿Cómo Funciona Nuestra Garantía?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Toma el Curso</h3>
                  <p className="text-gray-600">Completa al menos el 80% del contenido y aplica las estrategias por 30 días</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Evalúa Resultados</h3>
                  <p className="text-gray-600">Si no ves mejoras en tu situación financiera, solicita el reembolso</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Recibe tu Dinero</h3>
                  <p className="text-gray-600">Te devolvemos el 100% sin preguntas dentro de 3-5 días hábiles</p>
                </div>
              </div>
            </section>

            {/* Requirements */}
            <section className="mb-12">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                Requisitos para el Reembolso
              </h2>
              
              <div className="bg-green-50 border border-green-200 rounded-course p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Para Calificar al Reembolso:
                </h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Haber completado al menos el 80% del curso</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Haber aplicado las estrategias enseñadas por al menos 30 días</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Solicitar el reembolso dentro del período de 30 días desde la compra</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Proporcionar evidencia de haber seguido las instrucciones del curso</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                Proceso de Reembolso
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Solicitud de Reembolso</h3>
                    <p className="text-gray-600 mb-3">
                      Envía un correo a <strong>reembolsos@solvemxx.com</strong> con:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Número de orden o email de compra</li>
                      <li>Razón del reembolso</li>
                      <li>Evidencia de progreso en el curso</li>
                      <li>Descripción de estrategias aplicadas</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Revisión</h3>
                    <p className="text-gray-600">
                      Nuestro equipo revisará tu solicitud en un plazo de 24-48 horas y te contactará para confirmar los detalles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Procesamiento</h3>
                    <p className="text-gray-600">
                      Una vez aprobado, procesaremos el reembolso al método de pago original en 3-5 días hábiles.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Notes */}
            <section className="mb-12">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                Información Importante
              </h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-course p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Ten en Cuenta:
                </h3>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Los reembolsos se procesan al método de pago original utilizado</li>
                  <li>• El acceso al curso se revoca inmediatamente después del reembolso</li>
                  <li>• Los materiales descargados deben ser eliminados</li>
                  <li>• Esta garantía es válida para compras individuales, no para regalos</li>
                  <li>• Solo una solicitud de reembolso por persona</li>
                </ul>
              </div>
            </section>

            {/* Exceptions */}
            <section className="mb-12">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                Excepciones
              </h2>
              
              <p className="text-gray-700 mb-4">
                No ofrecemos reembolsos en los siguientes casos:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Solicitudes fuera del período de 30 días</li>
                <li>Estudiantes que no han completado al menos el 80% del curso</li>
                <li>Solicitudes sin evidencia de aplicación de las estrategias</li>
                <li>Cambio de opinión sin haber probado el contenido</li>
                <li>Problemas técnicos que pueden ser resueltos por soporte</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 rounded-course p-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                ¿Necesitas Ayuda?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Antes de Solicitar un Reembolso
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Si tienes dudas sobre el curso o dificultades para aplicar las estrategias, contáctanos primero. Nuestro equipo está aquí para ayudarte a tener éxito.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-course hover:bg-primary/90 transition-colors"
                  >
                    Contactar Soporte
                  </Link>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Información de Contacto
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email de Reembolsos:</strong> reembolsos@solvemxx.com</p>
                    <p><strong>Soporte General:</strong> soporte@solvemxx.com</p>
                    <p><strong>Teléfono:</strong> +57 300 123 4567</p>
                    <p><strong>Horario:</strong> Lun-Vie 9:00 AM - 6:00 PM (GMT-5)</p>
                  </div>
                </div>
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
    </div>
  )
} 
 
 
