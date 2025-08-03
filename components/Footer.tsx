'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import DemoModal from '@/components/ui/demo-modal'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showDemoModal, setShowDemoModal] = useState(false)

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/solvemxx' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/solvemxx' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/solvemxx' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/solvemxx' }
  ]

  const legalLinks = [
    { name: 'Términos de Servicio', url: '/terms' },
    { name: 'Política de Privacidad', url: '/privacy' },
    { name: 'Política de Cookies', url: '/cookies' },
    { name: 'Términos de Compra', url: '/purchase-terms' }
  ]

  const handleNewsletterSubscribe = () => {
    setShowDemoModal(true)
  }

  return (
    <>
      <footer className="bg-gray-900 text-white" suppressHydrationWarning={true}>
        <div className="container-custom" suppressHydrationWarning={true}>
          {/* Main Footer Content */}
          <div className="py-16" suppressHydrationWarning={true}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8" suppressHydrationWarning={true}>
              
              {/* Company Info */}
              <div className="lg:col-span-2" suppressHydrationWarning={true}>
                <div className="mb-6" suppressHydrationWarning={true}>
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
                    Master Your Money
                  </h3>
                  <p className="text-gray-300 leading-relaxed max-w-md">
                    La plataforma líder en educación financiera para jóvenes colombianos. 
                    Transformamos vidas a través del conocimiento financiero práctico y accesible.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3" suppressHydrationWarning={true}>
                  <div className="flex items-center gap-3 text-gray-300" suppressHydrationWarning={true}>
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:soporte@solvemxx.com" className="hover:text-white transition-colors">
                      soporte@solvemxx.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300" suppressHydrationWarning={true}>
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+573001234567" className="hover:text-white transition-colors">
                      +57 300 123 4567
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300" suppressHydrationWarning={true}>
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Bogotá, Colombia</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div suppressHydrationWarning={true}>
                <h4 className="font-montserrat font-semibold text-white mb-6">Enlaces Rápidos</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#curriculum" className="text-gray-300 hover:text-white transition-colors">
                      Curriculum del Curso
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                      Precios
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                      Testimonios
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                      Preguntas Frecuentes
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                      Blog Financiero
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div suppressHydrationWarning={true}>
                <h4 className="font-montserrat font-semibold text-white mb-6">Soporte</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/help" className="text-gray-300 hover:text-white transition-colors">
                      Centro de Ayuda
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                      Contactar Soporte
                    </a>
                  </li>
                  <li>
                    <a href="/refund" className="text-gray-300 hover:text-white transition-colors">
                      Política de Reembolso
                    </a>
                  </li>
                  <li>
                    <a href="/technical-requirements" className="text-gray-300 hover:text-white transition-colors">
                      Requisitos Técnicos
                    </a>
                  </li>
                  <li>
                    <a href="/accessibility" className="text-gray-300 hover:text-white transition-colors">
                      Accesibilidad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="py-8 border-t border-gray-800" suppressHydrationWarning={true}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6" suppressHydrationWarning={true}>
              <div className="text-gray-300" suppressHydrationWarning={true}>
                <p className="mb-2">Síguenos en redes sociales para consejos financieros diarios:</p>
                <div className="flex items-center gap-4" suppressHydrationWarning={true}>
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        aria-label={`Síguenos en ${social.name}`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="flex flex-col sm:flex-row gap-3" suppressHydrationWarning={true}>
                <input
                  type="email"
                  placeholder="Tu email para tips financieros"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-course text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button 
                  onClick={handleNewsletterSubscribe}
                  className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-course transition-colors font-medium"
                >
                  Suscribirse
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-gray-800" suppressHydrationWarning={true}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4" suppressHydrationWarning={true}>
              {/* Copyright */}
              <div className="text-gray-400 text-sm" suppressHydrationWarning={true}>
                © {currentYear} SolveMxx - Soluciones digitales integrales. Todos los derechos reservados.
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center gap-6 text-sm" suppressHydrationWarning={true}>
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Privacy Statement */}
            <div className="mt-6 pt-6 border-t border-gray-800" suppressHydrationWarning={true}>
              <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
                <strong>Compromiso de Privacidad:</strong> Respetamos tu privacidad y nunca compartiremos 
                tu información personal con terceros. Utilizamos tus datos únicamente para brindarte 
                el mejor servicio educativo y enviarte contenido relevante sobre finanzas personales. 
                Puedes cancelar tu suscripción en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
    </>
  )
} 