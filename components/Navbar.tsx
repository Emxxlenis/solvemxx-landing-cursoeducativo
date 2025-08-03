'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn, scrollToElement, trackEvent } from '@/lib/utils'
import DemoModal from '@/components/ui/demo-modal'

interface NavItem {
  name: string
  href: string
  label: string
}

const navItems: NavItem[] = [
  { name: 'inicio', href: 'hero', label: 'Inicio' },
  { name: 'beneficios', href: 'benefits', label: 'Beneficios' },
  { name: 'curso', href: 'curriculum', label: 'Curso' },
  { name: 'instructora', href: 'instructor', label: 'Instructora' },
  { name: 'testimonios', href: 'testimonials', label: 'Testimonios' },
  { name: 'precios', href: 'pricing', label: 'Precios' },
  { name: 'faq', href: 'faq', label: 'FAQ' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)

  // Handle scroll effects and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Detect active section
      const sections = navItems.map(item => ({
        id: item.href,
        element: document.getElementById(item.href)
      })).filter(section => section.element)

      let currentSection = 'inicio'

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, name: string) => {
    setIsOpen(false)
    
    if (href === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      scrollToElement(href)
    }
    
    trackEvent('navbar_navigation', { 
      section: name,
      from_section: activeSection 
    })
  }

  const handleCTAClick = () => {
    setIsOpen(false)
    setShowDemoModal(true)
    trackEvent('navbar_cta_click', { 
      location: 'navbar',
      current_section: activeSection,
      action: 'demo_modal_shown'
    })
  }

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-course border-b border-gray-100"
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning={true}>
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick('hero', 'inicio')}
                className="flex items-center space-x-2 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MM</span>
                </div>
                <div className="hidden sm:block">
                  <div className={cn(
                    "font-montserrat font-bold text-lg transition-colors",
                    isScrolled ? "text-gray-900" : "text-white"
                  )}>
                    Master Your Money
                  </div>
                  <div className={cn(
                    "text-xs transition-colors",
                    isScrolled ? "text-gray-600" : "text-gray-200"
                  )}>
                    Finanzas para Jóvenes
                  </div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.name)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105",
                    activeSection === item.href
                      ? isScrolled 
                        ? "text-primary"
                        : "text-accent"
                      : isScrolled
                        ? "text-gray-700 hover:text-primary"
                        : "text-gray-200 hover:text-white"
                  )}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <div className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-colors",
                      isScrolled ? "bg-primary" : "bg-accent"
                    )} />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                onClick={handleCTAClick}
                variant="cta"
                size="sm"
                className="text-white bg-accent hover:bg-accent/90 min-h-[36px] px-6 text-sm"
              >
                Inscribirme Ahora
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  isScrolled 
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                )}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-md rounded-b-lg shadow-course border-t border-gray-100">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className={cn(
                      "block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                      activeSection === item.href
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4">
                  <Button
                    onClick={handleCTAClick}
                    variant="cta"
                    size="default"
                    className="w-full text-white bg-accent hover:bg-accent/90"
                  >
                    Inscribirme Ahora
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
    </>
  )
} 
 
 