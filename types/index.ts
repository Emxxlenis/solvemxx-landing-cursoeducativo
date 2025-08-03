/**
 * @fileoverview Type definitions for Master Your Money landing page
 * @description Comprehensive TypeScript interfaces for all data structures
 * and component props used throughout the application. Ensures type safety
 * and provides clear contracts for data exchange between components.
 * 
 * @author SolveMxx
 * @version 1.0.0
 */

import { ReactNode } from 'react'

/**
 * Course module interface for curriculum timeline
 * @interface CourseModule
 */
export interface CourseModule {
  /** Unique identifier for the module */
  id: string
  /** Display title of the module */
  title: string
  /** Duration display string (e.g., "45 min") */
  duration: string
  /** Brief description of module content */
  description: string
  /** Icon identifier for visual representation */
  icon: string
  /** Array of learning outcomes/benefits */
  outcomes: string[]
  /** Optional video URL for module preview */
  videoUrl?: string
}

/**
 * Student testimonial interface for social proof
 * @interface Testimonial
 */
export interface Testimonial {
  /** Unique identifier for the testimonial */
  id: string
  /** Student's name */
  name: string
  /** Student's age */
  age: number
  /** Student's city location */
  city: string
  /** Rating out of 5 stars */
  rating: number
  /** Testimonial text content */
  text: string
  /** Specific result achieved (e.g., "Ahorró $500.000") */
  result: string
  avatar: string
  videoUrl?: string
}

export interface Instructor {
  name: string
  title: string
  credentials: string[]
  description: string
  avatar: string
  videoUrl: string
}

export interface PriceOption {
  id: string
  name: string
  originalPrice: number
  currentPrice: number
  discount: number
  features: string[]
  isPopular?: boolean
  paymentMethods: string[]
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

export interface EnrollmentFormData {
  name: string
  email: string
  phone?: string
  track: 'beginner' | 'intermediate' | 'advanced'
  coupon?: string
  acceptTerms: boolean
  acceptMarketing: boolean
}

export interface CountdownTimerProps {
  targetDate: Date
  onExpire?: () => void
}

export interface BenefitCard {
  id: string
  icon: string
  title: string
  description: string
  highlight?: string
}

export interface SocialProofNotification {
  id: string
  name: string
  action: string
  timestamp: Date
  location?: string
}

export interface ABTestVariant {
  name: string
  weight: number
  config: Record<string, any>
}

export interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
  timestamp: Date
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface PaymentResult {
  success: boolean
  paymentId?: string
  error?: string
}

// Component Props
export interface HeroProps {
  variant?: 'A' | 'B'
}

export interface CTAButtonProps {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export interface VideoPlayerProps {
  src: string
  poster?: string
  autoplay?: boolean
  muted?: boolean
  controls?: boolean
  className?: string
  onPlay?: () => void
  onPause?: () => void
  onEnded?: () => void
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
}

// Form validation schemas
export type FormErrors<T> = {
  [K in keyof T]?: string
}

export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => boolean | string
} 