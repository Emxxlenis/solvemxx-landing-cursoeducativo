import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Book, Video, MessageCircle, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Centro de Ayuda - Master Your Money',
  description: 'Encuentra respuestas a tus preguntas sobre el curso Master Your Money.',
}

export default function HelpPage() {
  const helpCategories = [
    {
      title: "Primeros Pasos",
      icon: Book,
      articles: [
        "Cómo acceder al curso después de la compra",
        "Navegando por la plataforma de aprendizaje",
        "Configuración de tu perfil de estudiante",
        "Descarga de materiales del curso"
      ]
    },
    {
      title: "Contenido del Curso",
      icon: Video,
      articles: [
        "¿Cómo seguir el progreso de mi curso?",
        "Problemas de reproducción de video",
        "Descarga de videos para ver sin conexión",
        "Reiniciar el progreso de un módulo"
      ]
    },
    {
      title: "Pagos y Facturación",
      icon: MessageCircle,
      articles: [
        "Métodos de pago aceptados",
        "¿Cómo solicitar una factura?",
        "Política de reembolsos",
        "Problemas con el procesamiento del pago"
      ]
    }
  ]

  const quickActions = [
    {
      title: "Contactar Soporte",
      description: "Envía un mensaje a nuestro equipo de soporte",
      icon: Mail,
      link: "/contact",
      color: "bg-blue-500"
    },
    {
      title: "Chat en Vivo",
      description: "Habla directamente con un asesor",
      icon: MessageCircle,
      link: "#",
      color: "bg-green-500"
    },
    {
      title: "Llamar Ahora",
      description: "+57 300 123 4567",
      icon: Phone,
      link: "tel:+573001234567",
      color: "bg-purple-500"
    }
  ]

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

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            Centro de Ayuda
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 mb-8">
            Estamos aquí para ayudarte a aprovechar al máximo tu curso
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="¿En qué podemos ayudarte?"
              className="w-full pl-12 pr-4 py-4 rounded-course text-gray-900 focus:ring-2 focus:ring-accent focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link
                key={index}
                href={action.link}
                className="bg-white rounded-course p-6 shadow-course hover:shadow-course-hover transition-shadow text-center group"
              >
                <div className={`${action.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600">{action.description}</p>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Help Categories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-montserrat font-bold text-gray-900 text-center mb-12">
          Artículos de Ayuda
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {helpCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="bg-white rounded-course p-8 shadow-course">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-course mr-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <Link 
                        href="#"
                        className="text-gray-700 hover:text-primary transition-colors block py-2 border-b border-gray-100 last:border-b-0"
                      >
                        {article}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 text-center mb-12">
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-course p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Cuánto tiempo tengo para completar el curso?
                </h3>
                <p className="text-gray-700">
                  Tienes acceso de por vida al curso. Puedes tomarte el tiempo que necesites y repetir las lecciones cuantas veces quieras.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-course p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Puedo ver el curso desde mi móvil?
                </h3>
                <p className="text-gray-700">
                  Sí, nuestro curso está optimizado para todos los dispositivos. Puedes acceder desde tu computadora, tablet o teléfono móvil.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-course p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Qué pasa si no estoy satisfecho con el curso?
                </h3>
                <p className="text-gray-700">
                  Ofrecemos una garantía de 30 días. Si no estás completamente satisfecho, te devolvemos el 100% de tu dinero sin preguntas.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-course p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Recibo un certificado al completar el curso?
                </h3>
                <p className="text-gray-700">
                  Sí, al completar todos los módulos del curso recibirás un certificado de finalización que puedes descargar e imprimir.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/#faq"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-course hover:bg-primary/90 transition-colors font-medium"
              >
                Ver Todas las FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-6">
            ¿Aún necesitas ayuda?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nuestro equipo de soporte está disponible para ayudarte
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-course hover:bg-primary/90 transition-colors font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contactar Soporte
            </Link>
            <a 
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-course hover:bg-green-600 transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 
 
 
 