'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import faqsData from '@/data/faqs.json'
import { FAQ } from '@/types'

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const faqs = faqsData as FAQ[]
  
  // Get unique categories
  const categories = ['all', ...new Set(faqs.map(faq => faq.category).filter((category): category is string => category !== undefined))]
  
  // Filter FAQs based on search and category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const clearSearch = () => {
    setSearchTerm('')
    setSelectedCategory('all')
  }

  return (
    <section className="section-padding bg-white" id="faq" suppressHydrationWarning={true}>
      <div className="container-custom" suppressHydrationWarning={true}>
        <div className="max-w-4xl mx-auto" suppressHydrationWarning={true}>
          {/* Header */}
          <div className="text-center mb-12" suppressHydrationWarning={true}>
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Encuentra respuestas a las dudas más comunes sobre nuestro curso de finanzas
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-50 rounded-course p-6 mb-8" suppressHydrationWarning={true}>
            {/* Search Bar */}
            <div className="relative mb-6" suppressHydrationWarning={true}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar en preguntas frecuentes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-course focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2" suppressHydrationWarning={true}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category === 'all' ? 'Todas' : category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Results */}
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4" suppressHydrationWarning={true}>
              <Accordion type="single" collapsible>
                {filteredFAQs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border border-gray-200 rounded-course overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                    suppressHydrationWarning={true}
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-primary px-6 py-5 bg-white hover:bg-gray-50 transition-colors duration-200 data-[state=open]:bg-primary data-[state=open]:text-white data-[state=open]:hover:bg-primary/90">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-50 border-t border-gray-100">
                      <div className="px-6 py-5 text-gray-700 leading-relaxed text-base" suppressHydrationWarning={true}>
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : (
            <div className="text-center py-12" suppressHydrationWarning={true}>
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No se encontraron preguntas
              </h3>
              <p className="text-gray-600 mb-6">
                No hay preguntas que coincidan con tu búsqueda. Intenta con otros términos o categorías.
              </p>
              <button
                onClick={clearSearch}
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Limpiar filtros
              </button>
            </div>
          )}

          {/* Contact Support */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-course" suppressHydrationWarning={true}>
            <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta adicional
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4" suppressHydrationWarning={true}>
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-course hover:bg-primary/90 transition-colors font-medium"
              >
                Contactar Soporte
              </a>
              <a 
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-course hover:bg-green-600 transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z"/>
                </svg>
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 