import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Master Your Money - Finanzas para Jóvenes',
    short_name: 'Master Your Money',
    description: 'Aprende a manejar tu dinero como un experto en 30 días. Curso práctico de finanzas personales para jóvenes colombianos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0056D3',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/favicon.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
    ],
    categories: ['education', 'finance', 'productivity'],
    lang: 'es-CO',
    orientation: 'portrait',
    scope: '/',
  }
} 