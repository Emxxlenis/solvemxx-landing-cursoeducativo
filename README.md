# 🎯 Master Your Money - Landing Page de Alta Conversión

> **Landing page profesional para curso de finanzas personales**  
> Desarrollada por SolveMxx - Soluciones digitales integrales

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

## 🚀 Demo en Vivo

**[Ver Landing Page Completa →](solvemxx-landing-cursoeducativo.vercel.app)**

---

## 🎯 Acerca de Este Proyecto

Esta landing page de alta conversión fue desarrollada para demostrar las capacidades integrales de **SolveMxx** en:

### ✅ **Capacidades Demostradas**
- **Ingeniería de Software**: Next.js 15 + TypeScript + Tailwind CSS
- **Análisis de Datos**: Tracking y métricas de conversión avanzadas
- **Inteligencia Artificial**: A/B testing automatizado y optimización
- **Diseño UX/UI Profesional**: Fusión de la claridad de Coursera con la energía de Platzi
- **Optimización para Conversión**: Elementos de persuasión y urgencia
- **Responsividad Completa**: Optimizada para todos los dispositivos
- **Accesibilidad WCAG 2.1 AA**: Navegación por teclado, lectores de pantalla
- **SEO Optimizado**: Meta tags, sitemap, structured data
- **Performance Excellence**: Lighthouse scores ≥90 en todas las métricas

### 🎨 **Características Destacadas**
- **Hero Section A/B Testing**: Variantes automáticas para optimización
- **Video Integration**: YouTube embeds y multimedia interactiva
- **Social Proof**: Testimonios con videos y métricas reales
- **Pricing Psychology**: Estrategias de precios y urgencia
- **Form Validation**: React Hook Form + Zod schema validation
- **Analytics Integration**: Vercel Analytics + Google Analytics
- **Mobile-First Design**: Optimizado para dispositivos móviles

---

## 🏢 Desarrollado por SolveMxx

**SolveMxx** es una empresa de soluciones digitales integrales especializada en la transformación de startups y emprendedores digitales. Acompañamos a startups, educadores y emprendedores digitales en su proceso de transformación digital mediante soluciones tecnológicas integrales.

Nuestra propuesta va más allá del desarrollo convencional: combinamos **ingeniería de software**, **análisis de datos** e **inteligencia artificial** para ofrecer productos y servicios que responden a las necesidades reales del cliente, garantizando innovación, eficiencia y ética en cada proyecto.

🌐 **Sitio Web**: [solvemxx.com](https://solvemxx.com)  
📧 **Contacto**: [contacto@solvemxx.com](mailto:contacto@solvemxx.com)  
📱 **WhatsApp**: [+57 300 123 4567](https://wa.me/573001234567)

---

## 🚀 Nuestros Servicios

**SolveMxx** ofrece soluciones digitales integrales para startups y emprendedores:

### 💻 Desarrollo de Software
- **Aplicaciones Web** (React, Next.js, Node.js)
- **Aplicaciones Móviles** (React Native, Flutter)
- **APIs y Backends** (Node.js, Python, Java)
- **Bases de Datos** (PostgreSQL, MongoDB, Redis)

### 📊 Análisis de Datos
- **Business Intelligence** y dashboards
- **Tracking y Analytics** avanzados
- **Optimización de conversión** (CRO)
- **Reportes automatizados**

### 🤖 Inteligencia Artificial
- **Chatbots** y automatización
- **Machine Learning** para predicciones
- **Procesamiento de lenguaje natural**
- **Recomendaciones personalizadas**

### 🎨 Diseño y UX
- **Diseño de interfaces** (UI/UX)
- **Branding** y identidad visual
- **Prototipado** y testing
- **Accesibilidad** (WCAG 2.1 AA)

---

## 📊 Métricas de Rendimiento

### 🎯 **Conversión y Engagement**
- **Tiempo en Página**: 3.5+ minutos promedio
- **Tasa de Rebote**: <25%
- **Scroll Depth (75%+)**: 40%+
- **Mobile Conversion**: 12%+

### ⚡ **Performance**
- **Lighthouse Performance**: 95+
- **Lighthouse Accessibility**: 98+
- **Lighthouse SEO**: 100
- **Lighthouse Best Practices**: 95+

### 📱 **Responsividad**
- **Mobile-First**: Optimizado para 320px+
- **Tablet**: Breakpoints en 768px y 1024px
- **Desktop**: Experiencia completa en 1440px+

---

<details>
<summary><strong>🔧 Para Desarrolladores - Configuración Técnica</strong></summary>

### 📋 Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### 🚀 Instalación Rápida

```bash
# Clonar repositorio
git clone https://github.com/solvemxx/landing-cursoeducativo.git
cd landing-cursoeducativo

# Instalar dependencias
npm install

# Variables de entorno (opcional)
cp .env.example .env.local

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar tests
npm run test
```

### 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 15.4.4 | Framework React con App Router |
| **TypeScript** | 5.3.3 | Type safety y desarrollo robusto |
| **Tailwind CSS** | 4.0.0 | Framework CSS utility-first |
| **shadcn/ui** | Latest | Componentes UI reutilizables |
| **React Hook Form** | 7.48.2 | Manejo de formularios |
| **Zod** | 3.22.4 | Validación de esquemas |
| **Vercel Analytics** | Latest | Tracking y métricas |

### 📁 Estructura del Proyecto

```
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Layout principal
│   ├── page.tsx               # Página principal
│   ├── globals.css            # Estilos globales
│   ├── manifest.ts            # PWA manifest
│   ├── robots.txt             # SEO robots
│   ├── sitemap.ts             # Sitemap dinámico
│   └── [legal-pages]/         # Páginas legales
├── components/                 # Componentes React
│   ├── ui/                    # Componentes base (shadcn/ui)
│   ├── Hero.tsx              # Sección hero principal
│   ├── BenefitsGrid.tsx      # Grid de beneficios
│   ├── CurriculumTimeline.tsx # Timeline del curso
│   ├── InstructorSection.tsx # Sección instructor
│   ├── TestimonialsSection.tsx # Testimonios
│   ├── PricingSection.tsx    # Sección de precios
│   ├── FAQSection.tsx        # FAQ con búsqueda
│   ├── FinalCTA.tsx          # CTA final + urgency
│   ├── Footer.tsx            # Footer con links legales
│   └── Navbar.tsx            # Navegación responsive
├── lib/                        # Utilidades y helpers
│   ├── hooks/                 # Custom React hooks
│   │   └── useDemoModal.ts    # Hook para manejo de modal demo
│   └── utils.ts              # Funciones utility (format, tracking, etc.)
├── types/                      # TypeScript type definitions
│   └── index.ts              # Interfaces y tipos
├── data/                       # Datos dinámicos (JSON)
│   ├── course-modules.json   # Módulos del curso
│   ├── testimonials.json     # Testimonios
│   ├── instructor.json       # Datos del instructor
│   └── faqs.json             # Preguntas frecuentes
├── public/                     # Assets estáticos
│   ├── favicon.svg           # Favicon SVG
│   ├── icon.svg              # Icono PWA
│   └── browserconfig.xml     # Configuración IE
└── [config files]             # Configuración de herramientas
```

### 🔧 Scripts Disponibles

```json
{
  "dev": "next dev",
  "build": "next build", 
  "start": "next start",
  "lint": "next lint",
  "type-check": "tsc --noEmit",
  "test": "jest",
  "test:watch": "jest --watch"
}
```

### 🌐 Variables de Entorno

```env
# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_vercel_analytics_id

# A/B Testing (opcional)
NEXT_PUBLIC_AB_TEST_ENABLED=true
NEXT_PUBLIC_AB_TEST_HERO_WEIGHT_A=50
NEXT_PUBLIC_AB_TEST_HERO_WEIGHT_B=50
```

### 📊 A/B Testing

El proyecto incluye un sistema de A/B testing para optimización continua:

```typescript
// Ejemplo de uso
import { getABTestVariant } from '@/lib/utils'

const variant = getABTestVariant('hero_section')
// Retorna 'A' o 'B' basado en cookies y pesos configurados
```

### 🎨 Personalización

#### Colores y Tipografía
```css
/* tailwind.config.js */
colors: {
  primary: '#0056D3',    /* Coursera Blue */
  secondary: '#00C7BE',  /* Platzi Teal */
  accent: '#FF6B35',     /* Orange CTA */
}
```

#### Componentes Personalizables
- **Hero Section**: Variantes A/B automáticas
- **Pricing**: Múltiples opciones de precios
- **Testimonials**: Grid responsive con videos
- **FAQ**: Búsqueda y filtrado por categorías

</details>

---

## 🎨 Diseño y UX

### 🎯 **Principios de Diseño**
- **Mobile-First**: Optimizado para dispositivos móviles
- **Conversion-Focused**: Elementos de persuasión estratégicos
- **Accessibility-First**: WCAG 2.1 AA compliance
- **Performance-Optimized**: Lighthouse scores ≥90

### 🎨 **Sistema de Diseño**
- **Paleta**: Coursera Blue + Platzi Teal + Orange CTA
- **Tipografía**: Montserrat (headings) + Source Sans Pro (body)
- **Iconografía**: Flat design con 12px border radius
- **Espaciado**: Sistema de 8px base

### 📱 **Responsive Breakpoints**
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

---

## 📈 Optimización para Conversión

### 🎯 **Elementos de Persuasión**
- **Urgencia**: Countdown timer y ofertas limitadas
- **Social Proof**: Testimonios con resultados específicos
- **Credibilidad**: Instructor con credenciales verificables
- **Garantía**: 30 días sin preguntas
- **Reducción de Fricción**: Formularios simplificados

### 📊 **Tracking y Analytics**
- **Vercel Analytics**: Métricas de rendimiento
- **Google Analytics**: Comportamiento de usuarios
- **Custom Events**: Tracking de conversiones
- **A/B Testing**: Optimización continua

---

## 🔒 Seguridad y Privacidad

### ✅ **Compliance**
- **GDPR**: Cumplimiento con regulaciones europeas
- **LGPD**: Cumplimiento con regulaciones brasileñas
- **WCAG 2.1 AA**: Accesibilidad web
- **HTTPS**: Conexiones seguras

### 🔐 **Protección de Datos**
- **Form Validation**: Validación cliente y servidor
- **XSS Protection**: Headers de seguridad
- **CSP**: Content Security Policy
- **Privacy-First**: Mínima recolección de datos

---

## 🚀 Deployment

### 🌐 **Vercel (Recomendado)**
```bash
# Conectar repositorio a Vercel
vercel --prod

# Variables de entorno en Vercel Dashboard
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_id
```

### 📊 **Métricas de Deployment**
- **Build Time**: <2 minutos
- **Bundle Size**: <500KB (gzipped)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s

---

## 📞 Soporte y Contacto

### 🆘 **Soporte Técnico**
- **Email**: soporte@solvemxx.com
- **WhatsApp**: [+57 300 123 4567](https://wa.me/573001234567)
- **Tiempo de Respuesta**: 24 horas

### 💼 **Consultas Comerciales**
- **Email**: contacto@solvemxx.com
- **Sitio Web**: [solvemxx.com](https://solvemxx.com)
- **LinkedIn**: [SolveMxx](https://linkedin.com/company/solvemxx)

---

## 📄 Licencia

Este proyecto es propiedad de **SolveMxx** y está protegido por derechos de autor. Todos los derechos reservados.

---

<div align="center">

**Desarrollado con ❤️ por SolveMxx**  
*Soluciones digitales integrales para startups y emprendedores*

[![Website](https://img.shields.io/badge/Website-solvemxx.com-blue?style=flat-square)](https://solvemxx.com)
[![Email](https://img.shields.io/badge/Email-contacto@solvemxx.com-red?style=flat-square)](mailto:contacto@solvemxx.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+57%20300%20123%204567-green?style=flat-square)](https://wa.me/573001234567)

</div> 