'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowRight, TrendingUp, Search } from 'lucide-react'
import DemoModal from '@/components/ui/demo-modal'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content?: string
  author: string
  date: string
  readTime: string
  category: string
  featured: boolean
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 'como-ahorrar-primer-empleo',
    title: 'Cómo Ahorrar en tu Primer Empleo: Guía Completa 2024',
    excerpt: 'Consejos prácticos para jóvenes profesionales que quieren empezar a ahorrar desde su primer salario, sin sacrificar su calidad de vida.',
    author: 'Camila Restrepo',
    date: '2024-01-15',
    readTime: '8 min',
    category: 'Ahorro',
    featured: true,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
    slug: 'como-ahorrar-primer-empleo'
  },
  {
    id: 'presupuesto-estudiante-universitario',
    title: 'Presupuesto para Estudiantes: Sobrevive la Universidad sin Quebrar',
    excerpt: 'Estrategias financieras específicas para estudiantes universitarios. Aprende a manejar tus gastos y generar ingresos extras.',
    author: 'Carlos Mendoza',
    date: '2024-01-12',
    readTime: '6 min',
    category: 'Presupuesto',
    featured: true,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop',
    slug: 'presupuesto-estudiante-universitario'
  },
  {
    id: 'inversiones-principiantes-colombia',
    title: 'Inversiones para Principiantes en Colombia: Por Dónde Empezar',
    excerpt: 'Todo lo que necesitas saber sobre CDTs, fondos de inversión y acciones en el mercado colombiano. Tu primer paso hacia la riqueza.',
    author: 'Andrea Torres',
    date: '2024-01-10',
    readTime: '12 min',
    category: 'Inversiones',
    featured: false,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
    slug: 'inversiones-principiantes-colombia'
  },
  {
    id: 'deudas-tarjeta-credito-jovenes',
    title: 'Cómo Salir de Deudas de Tarjeta de Crédito Siendo Joven',
    excerpt: 'Método paso a paso para eliminar deudas de tarjetas de crédito. Estrategias probadas que funcionan para jóvenes en Colombia.',
    author: 'Camila Restrepo',
    date: '2024-01-08',
    readTime: '10 min',
    category: 'Deudas',
    featured: false,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    slug: 'deudas-tarjeta-credito-jovenes'
  },
  {
    id: 'fondo-emergencia-millennials',
    title: 'Fondo de Emergencia para Millennials: ¿Cuánto Necesitas?',
    excerpt: 'Calcula exactamente cuánto dinero necesitas en tu fondo de emergencia y las mejores estrategias para construirlo rápidamente.',
    author: 'María Fernanda López',
    date: '2024-01-05',
    readTime: '7 min',
    category: 'Ahorro',
    featured: false,
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop',
    slug: 'fondo-emergencia-millennials'
  },
  {
    id: 'apps-finanzas-colombia-2024',
    title: 'Las 10 Mejores Apps de Finanzas Personales en Colombia 2024',
    excerpt: 'Revisión completa de las aplicaciones móviles que te ayudarán a gestionar tu dinero de forma inteligente y automática.',
    author: 'Juan Carlos Ruiz',
    date: '2024-01-03',
    readTime: '9 min',
    category: 'Tecnología',
    featured: false,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
    slug: 'apps-finanzas-colombia-2024'
  }
]

const categories = ['Todos', 'Ahorro', 'Presupuesto', 'Inversiones', 'Deudas', 'Tecnología']

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [showDemoModal, setShowDemoModal] = useState(false)

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Ahorro': 'bg-green-100 text-green-800',
      'Presupuesto': 'bg-blue-100 text-blue-800',
      'Inversiones': 'bg-purple-100 text-purple-800',
      'Deudas': 'bg-red-100 text-red-800',
      'Tecnología': 'bg-gray-100 text-gray-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const handleCourseClick = () => {
    setShowDemoModal(true)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('Todos')
  }

  return (
    <>
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                Blog Financiero
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed mb-8">
                Consejos, estrategias y noticias sobre finanzas personales para jóvenes colombianos
              </p>
              
              {/* Newsletter Signup */}
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Tu email para tips semanales"
                    className="flex-1 px-4 py-3 rounded-course text-gray-900 focus:ring-2 focus:ring-accent focus:outline-none"
                  />
                  <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-course transition-colors font-medium">
                    Suscribirse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Categories */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="bg-white rounded-course shadow-sm p-6 mb-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-course focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count and clear filters */}
            {(searchTerm || selectedCategory !== 'Todos') && (
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
                </p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-8">
              Artículos Destacados
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-course shadow-sm overflow-hidden hover:shadow-course-hover transition-shadow group">
                  <div className="aspect-video overflow-hidden">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      <button 
                        onClick={handleCourseClick}
                        className="text-left hover:text-primary transition-colors"
                      >
                        {post.title}
                      </button>
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      
                      <button 
                        onClick={handleCourseClick}
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        Leer más
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 ? (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-8">
              {featuredPosts.length > 0 ? 'Todos los Artículos' : 'Artículos'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-course shadow-sm overflow-hidden hover:shadow-course-hover transition-shadow group">
                  <div className="aspect-video overflow-hidden">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      <button 
                        onClick={handleCourseClick}
                        className="text-left hover:text-primary transition-colors"
                      >
                        {post.title}
                      </button>
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.author}</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          /* No results message */
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No se encontraron artículos
              </h3>
              <p className="text-gray-600 mb-6">
                No hay artículos que coincidan con tu búsqueda o filtro seleccionado.
              </p>
              <button
                onClick={clearFilters}
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Limpiar filtros
              </button>
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-6">
              ¿Te Gustó lo que Leíste?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Recibe consejos financieros exclusivos y artículos como estos directamente en tu email cada semana.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-course focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
              <button className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-course transition-colors font-medium">
                Suscribirse Gratis
              </button>
            </div>
            
            <p className="text-sm text-gray-500">
              📧 Tips semanales • 🚀 Sin spam • ✨ Cancela cuando quieras
            </p>
          </div>
        </div>

        {/* Course CTA */}
        <div className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
              ¿Quieres Ir Más Allá de los Artículos?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Nuestro curso completo te llevará de principiante a experto en finanzas personales con un método probado paso a paso.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleCourseClick}
                className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-course transition-colors font-medium text-lg"
              >
                Ver el Curso Completo
              </button>
              
              <Link 
                href="/#faq"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-course transition-colors font-medium text-lg"
              >
                Más Información
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
    </>
  )
} 