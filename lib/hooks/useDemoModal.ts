/**
 * @fileoverview Custom hook for demo modal management
 * @description Provides consistent demo modal state management across components
 * to reduce code duplication and ensure uniform behavior.
 * 
 * @author SolveMxx
 * @version 1.0.0
 */

import { useState, useCallback } from 'react'
import { trackEvent } from '@/lib/utils'

/**
 * Custom hook for managing demo modal state and interactions
 * @param trackingContext - Optional context for analytics tracking
 * @returns Object with modal state and control functions
 */
export function useDemoModal(trackingContext?: string) {
  const [showDemoModal, setShowDemoModal] = useState(false)

  const openModal = useCallback(() => {
    setShowDemoModal(true)
    if (trackingContext) {
      trackEvent('demo_modal_opened', { context: trackingContext })
    }
  }, [trackingContext])

  const closeModal = useCallback(() => {
    setShowDemoModal(false)
    if (trackingContext) {
      trackEvent('demo_modal_closed', { context: trackingContext })
    }
  }, [trackingContext])

  return {
    showDemoModal,
    openModal,
    closeModal,
    setShowDemoModal // Keep for backward compatibility
  }
}