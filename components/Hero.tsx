/**
 * @fileoverview Hero section component for Master Your Money landing page
 * @description Above-the-fold section with course introduction, video preview,
 * and primary call-to-action. Includes A/B testing capabilities for headline
 * optimization and conversion rate testing.
 * 
 * Features:
 * - Dynamic student count display
 * - YouTube video preview with thumbnail
 * - A/B testing for headlines (2 variants)
 * - Conversion tracking and analytics
 * - Responsive design with mobile-first approach
 * - Trust indicators (student count, guarantee)
 * 
 * @author SolveMxx
 * @version 1.0.0
 */

'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Users, Shield } from 'lucide-react'
import { formatNumber, formatCurrency, getABTestVariant, trackEvent } from '@/lib/utils'
import DemoModal from '@/components/ui/demo-modal'

interface HeroProps {
  /** A/B test variant override (optional - defaults to automatic assignment) */
  variant?: 'A' | 'B'
}

/**
 * Hero section component with A/B testing and conversion optimization
 * @param props - Component props
 * @returns JSX element containing the hero section
 */
export default function Hero({ variant }: HeroProps) {
  const [studentCount, setStudentCount] = useState(2847)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentVariant, setCurrentVariant] = useState<'A' | 'B'>('A')
  const [mounted, setMounted] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)

  // YouTube video URL
  const coursePreviewVideo = "https://www.youtube.com/embed/p2AWYanIHkc?autoplay=1&mute=1&controls=1&rel=0"
  const videoThumbnail = "https://img.youtube.com/vi/p2AWYanIHkc/maxresdefault.jpg"

  // Currency formatting utility - uses global formatCurrency from utils

  useEffect(() => {
    setMounted(true)
    const abVariant = variant || getABTestVariant('hero') as 'A' | 'B'
    setCurrentVariant(abVariant)
    
    // Animate student counter
    const interval = setInterval(() => {
      setStudentCount(prev => prev + Math.floor(Math.random() * 3))
    }, 30000)

    return () => clearInterval(interval)
  }, [variant])

  const handleCTAClick = () => {
    setShowDemoModal(true)
    trackEvent('hero_cta_click', { 
      variant: currentVariant,
      button_location: 'hero_main',
      action: 'demo_modal_shown'
    })
  }

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
    trackEvent('hero_video_play', { variant: currentVariant })
  }

  const heroContentA = {
    headline: "Controla tu Dinero en 30 Días",
    subheadline: "El único curso que necesitas para asegurar el futuro que mereces.",
    learners: studentCount,
    videoUrl: coursePreviewVideo
  }

  const heroContentB = {
    headline: "De Quebrado a Próspero en 30 Días",
    subheadline: "El método exacto que usan los jóvenes exitosos para multiplicar su dinero.",
    learners: studentCount,
    videoUrl: coursePreviewVideo
  }

  const content = currentVariant === 'A' ? heroContentA : heroContentB

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <section className="relative pt-20 lg:pt-32 pb-20 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white space-y-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Controla tu Dinero en 30 Días
              </h1>
              <p className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto">
                El único curso que necesitas para asegurar el futuro que mereces.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/40" />
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${videoThumbnail}')`
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-orange-500 text-white p-6 rounded-full">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="relative pt-20 lg:pt-32 pb-20 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-500">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white space-y-8 max-w-5xl mx-auto">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in">
                {content.headline}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                {content.subheadline}
              </p>
            </div>

            {/* Video Preview */}
            <div className="max-w-4xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                {!isVideoPlaying ? (
                  <div 
                    className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center cursor-pointer group"
                    onClick={handleVideoPlay}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${videoThumbnail}')`
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-orange-500 hover:bg-orange-600 text-white p-6 rounded-full transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                        <Play className="w-8 h-8 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
                      Vista previa del curso • Video
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src={content.videoUrl}
                      title="Vista previa del curso"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-200 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>{formatNumber(content.learners)}+ estudiantes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Garantía de 30 días</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                onClick={handleCTAClick}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-12 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-[60px]"
              >
                Empezar Ahora
              </Button>
            </div>
          </div>
        </div>

        {/* Sticky CTA for Mobile */}
        <div className="fixed bottom-6 left-6 right-6 z-50 lg:hidden">
          <Button
            onClick={handleCTAClick}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-2xl"
          >
                              Empezar Ahora - {formatCurrency(97000)}
          </Button>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }
        `}</style>
      </section>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
    </>
  )
} 