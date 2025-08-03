'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50" suppressHydrationWarning={true}>
      {/* Header */}
      <div className="bg-white shadow-sm" suppressHydrationWarning={true}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6" suppressHydrationWarning={true}>
          <div className="flex items-center justify-between" suppressHydrationWarning={true}>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center" suppressHydrationWarning={true}>
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
      <div className="bg-gradient-to-br from-primary to-secondary text-white py-16" suppressHydrationWarning={true}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" suppressHydrationWarning={true}>
          <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            Contáctanos
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 mb-8">
            Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos pronto.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16" suppressHydrationWarning={true}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" suppressHydrationWarning={true}>
          
          {/* Contact Form */}
          <div className="lg:col-span-2" suppressHydrationWarning={true}>
            <div className="bg-white rounded-course shadow-sm p-8" suppressHydrationWarning={true}>
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                    Envíanos un Mensaje
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" suppressHydrationWarning={true}>
                      <div suppressHydrationWarning={true}>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-course focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        />
                      </div>
                      
                      <div suppressHydrationWarning={true}>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-course focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div suppressHydrationWarning={true}>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Categoría de Consulta
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-course focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      >
                        <option value="">Selecciona una categoría</option>
                        <option value="technical">Soporte Técnico</option>
                        <option value="billing">Facturación y Pagos</option>
                        <option value="course">Contenido del Curso</option>
                        <option value="refund">Reembolsos</option>
                        <option value="general">Consulta General</option>
                      </select>
                    </div>
                    
                    <div suppressHydrationWarning={true}>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-course focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      />
                    </div>
                    
                    <div suppressHydrationWarning={true}>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-course focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        placeholder="Describe tu consulta o problema en detalle..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 px-6 rounded-course transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      ) : (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos dentro de las próximas 24 horas.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        category: '',
                        message: ''
                      })
                    }}
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8" suppressHydrationWarning={true}>
            
            {/* Contact Details */}
            <div className="bg-white rounded-course shadow-sm p-8" suppressHydrationWarning={true}>
              <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6" suppressHydrationWarning={true}>
                <div className="flex items-start space-x-4" suppressHydrationWarning={true}>
                  <div className="bg-primary/10 p-3 rounded-course" suppressHydrationWarning={true}>
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div suppressHydrationWarning={true}>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">soporte@solvemxx.com</p>
                    <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                    <p className="text-xs text-gray-400 mt-1">SolveMxx - Soluciones digitales integrales</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" suppressHydrationWarning={true}>
                  <div className="bg-primary/10 p-3 rounded-course" suppressHydrationWarning={true}>
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div suppressHydrationWarning={true}>
                    <h4 className="font-medium text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+57 300 123 4567</p>
                    <p className="text-sm text-gray-500">Lun - Vie: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" suppressHydrationWarning={true}>
                  <div className="bg-primary/10 p-3 rounded-course" suppressHydrationWarning={true}>
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div suppressHydrationWarning={true}>
                    <h4 className="font-medium text-gray-900">Ubicación</h4>
                    <p className="text-gray-600">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-course shadow-sm p-8" suppressHydrationWarning={true}>
              <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-6">
                Horarios de Atención
              </h3>
              
              <div className="space-y-3" suppressHydrationWarning={true}>
                <div className="flex justify-between items-center" suppressHydrationWarning={true}>
                  <span className="text-gray-700">Lunes - Viernes</span>
                  <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center" suppressHydrationWarning={true}>
                  <span className="text-gray-700">Sábados</span>
                  <span className="text-gray-900 font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center" suppressHydrationWarning={true}>
                  <span className="text-gray-700">Domingos</span>
                  <span className="text-gray-500">Cerrado</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-course" suppressHydrationWarning={true}>
                <div className="flex items-center" suppressHydrationWarning={true}>
                  <Clock className="w-5 h-5 text-yellow-600 mr-2" />
                  <p className="text-sm text-yellow-800">
                    Tiempo de zona: GMT-5 (Bogotá)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-course shadow-sm p-8" suppressHydrationWarning={true}>
              <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-6">
                Contacto Rápido
              </h3>
              
              <div className="space-y-4" suppressHydrationWarning={true}>
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-course transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z"/>
                  </svg>
                  WhatsApp
                </a>
                
                <Link
                  href="/help"
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-4 rounded-course transition-colors flex items-center justify-center"
                >
                  Centro de Ayuda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
 
 






