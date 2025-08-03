/**
 * @fileoverview Root layout component for Master Your Money application
 * @description Main layout wrapper that provides global metadata, styles,
 * and analytics for the entire Next.js application. Includes comprehensive
 * SEO metadata, Open Graph tags, and performance optimizations.
 * 
 * Features:
 * - Comprehensive SEO metadata with Colombian locale
 * - Open Graph and Twitter Card integration
 * - Multi-format favicon support
 * - Vercel Analytics integration
 * - Global CSS styles and font loading
 * - Hydration warning suppression for browser extensions
 * 
 * @author SolveMxx
 * @version 1.0.0
 */

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Master Your Money - Finanzas para Jóvenes',
  description: 'Aprende a controlar tus finanzas personales en 30 días. Curso práctico diseñado específicamente para jóvenes colombianos de 18 a 25 años.',
  keywords: [
    'finanzas personales',
    'curso finanzas',
    'jóvenes colombia',
    'ahorro',
    'inversión',
    'presupuesto',
    'educación financiera',
    'eliminar deudas',
    'fondo emergencia'
  ],
  authors: [{ name: 'SolveMxx' }],
  creator: 'SolveMxx',
  publisher: 'SolveMxx',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://finance-course.solvemxx.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Master Your Money - Finanzas para Jóvenes',
    description: 'Aprende a controlar tus finanzas personales en 30 días. Curso práctico diseñado específicamente para jóvenes colombianos.',
    url: 'https://finance-course.solvemxx.com',
    siteName: 'Master Your Money',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Master Your Money - Curso de Finanzas para Jóvenes',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Master Your Money - Finanzas para Jóvenes',
    description: 'Aprende a controlar tus finanzas personales en 30 días.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg', // For modern browsers
    shortcut: '/favicon.ico', // For older browsers
    apple: '/icon.svg', // For Apple devices
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#0056D3',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CO" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#0056D3" />
        <meta name="msapplication-TileColor" content="#0056D3" />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 