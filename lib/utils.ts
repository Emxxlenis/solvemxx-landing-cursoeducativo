/**
 * @fileoverview Utility functions for the Master Your Money landing page
 * @description Collection of helper functions for common tasks including:
 * - Class name merging for Tailwind CSS
 * - Formatting utilities for currency and numbers (Colombian locale)
 * - Analytics event tracking (Vercel Analytics + Google Analytics)
 * - A/B testing helpers
 * - Validation utilities
 * - Cookie management for user preferences
 * 
 * @author SolveMxx
 * @version 1.0.0
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { track } from '@vercel/analytics'

// Extend the Window interface to include gtag for Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

/**
 * Combines and merges Tailwind CSS classes efficiently
 * @param inputs - Variable number of class values (strings, conditionals, etc.)
 * @returns Merged class string with conflicting Tailwind classes resolved
 * @example cn('px-4 py-2', 'px-6', 'bg-blue-500') // Returns 'py-2 px-6 bg-blue-500'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number as Colombian Peso (COP) currency
 * @param amount - The number to format as currency
 * @returns Formatted currency string (e.g., "$97.000")
 * @example formatCurrency(97000) // Returns "$97.000"
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Formats a number with Colombian locale (thousands separator)
 * @param number - The number to format
 * @returns Formatted number string (e.g., "2.847")
 * @example formatNumber(2847) // Returns "2.847"
 */
export function formatNumber(number: number): string {
  return new Intl.NumberFormat('es-CO').format(number)
}

/**
 * Generates a random alphanumeric ID
 * @returns Random 9-character string
 * @example generateId() // Returns "k2x7m9p4q"
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

/**
 * Scrolls smoothly to an element by ID
 * @param elementId - The ID of the element to scroll to
 * @example scrollToElement('pricing-section')
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
    })
  }
}

/**
 * Tracks an event with both Google Analytics and Vercel Analytics
 * @param eventName - Name of the event to track
 * @param properties - Optional event properties/parameters
 * @example trackEvent('enrollment_completed', { price: 97000, course: 'master-your-money' })
 */
export function trackEvent(eventName: string, properties?: Record<string, any>): void {
  // Track with Google Analytics gtag
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties || {})
  }
  
  // Track with Vercel Analytics
  if (typeof window !== 'undefined') {
    try {
      track(eventName, properties || {})
    } catch (error) {
      console.warn('Vercel Analytics tracking failed:', error)
    }
  }
}

export function getTimeUntilMidnight(): number {
  const now = new Date()
  const midnight = new Date()
  midnight.setHours(24, 0, 0, 0)
  return midnight.getTime() - now.getTime()
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^(\+57)?[3][0-9]{9}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export function generateConfetti(): void {
  const colors = ['#FF6B35', '#00C7BE', '#0056D3']
  const confettiCount = 50
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div')
    confetti.className = 'confetti'
    confetti.style.left = Math.random() * 100 + '%'
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    confetti.style.animationDelay = Math.random() * 0.3 + 's'
    
    document.body.appendChild(confetti)
    
    setTimeout(() => {
      confetti.remove()
    }, 600)
  }
}

// A/B Testing utilities
export function getABTestVariant(testName: string): string {
  if (typeof window === 'undefined') return 'A'
  
  const cookieName = `ab_test_${testName}`
  const existingVariant = getCookie(cookieName)
  
  if (existingVariant) {
    return existingVariant
  }
  
  const variant = Math.random() < 0.5 ? 'A' : 'B'
  setCookie(cookieName, variant, 30) // 30 days
  return variant
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return
  
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
} 