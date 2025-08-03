import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Financiero - Master Your Money',
  description: 'Artículos y consejos sobre finanzas personales para jóvenes colombianos.',
  keywords: 'finanzas personales, ahorro, inversiones, presupuesto, jóvenes colombianos, educación financiera',
  openGraph: {
    title: 'Blog Financiero - Master Your Money',
    description: 'Artículos y consejos sobre finanzas personales para jóvenes colombianos.',
    type: 'website',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Financiero - Master Your Money',
    description: 'Artículos y consejos sobre finanzas personales para jóvenes colombianos.',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
 