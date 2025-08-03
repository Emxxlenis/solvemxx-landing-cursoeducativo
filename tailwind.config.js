/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Course brand colors
        primary: {
          DEFAULT: "#0056D3", // Coursera Blue
          50: "#EBF2FF",
          100: "#D6E4FF",
          200: "#B3CCFF",
          300: "#7DA3FF",
          400: "#4775FF",
          500: "#0056D3",
          600: "#0047B8",
          700: "#003A9E",
          800: "#002E7F",
          900: "#002666",
        },
        secondary: {
          DEFAULT: "#00C7BE", // Platzi Teal
          50: "#E6FFFE",
          100: "#CCFFFC",
          200: "#99FFF9",
          300: "#66FFF5",
          400: "#33FFF2",
          500: "#00C7BE",
          600: "#00A69F",
          700: "#008580",
          800: "#006461",
          900: "#004342",
        },
        accent: {
          DEFAULT: "#FF6B35", // Orange CTA
          50: "#FFF2ED",
          100: "#FFE5DB",
          200: "#FFCBB7",
          300: "#FFB193",
          400: "#FF976F",
          500: "#FF6B35",
          600: "#FF4500",
          700: "#CC3700",
          800: "#992900",
          900: "#661B00",
        },
        gray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'course': '12px',
      },
      boxShadow: {
        'course': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'course-hover': '0 12px 40px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "bounce-soft": "bounce-soft 2s infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "confetti": "confetti 0.6s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-soft": {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-4px)" },
          "60%": { transform: "translateY(-2px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "confetti": {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "1" },
          "50%": { transform: "scale(1.2) rotate(180deg)", opacity: "0.8" },
          "100%": { transform: "scale(0) rotate(360deg)", opacity: "0" },
        },
      },
      screens: {
        'xs': '320px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1440px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    function({ addUtilities }) {
      addUtilities({
        '.section-padding': {
          '@apply py-16 lg:py-24': {},
        },
        '.container-custom': {
          '@apply container mx-auto px-4 sm:px-6 lg:px-8': {},
        },
        '.card-hover': {
          '@apply transition-all duration-300 ease-out hover:shadow-course-hover hover:-translate-y-1': {},
        },
        '.text-gradient': {
          '@apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent': {},
        },
        '.animate-in': {
          '@apply opacity-0 translate-y-6': {},
          'animation': 'fade-in 0.6s ease-out forwards',
        },
        '.animate-in-delay-1': {
          'animation-delay': '0.1s',
        },
        '.animate-in-delay-2': {
          'animation-delay': '0.2s',
        },
        '.animate-in-delay-3': {
          'animation-delay': '0.3s',
        },
        '.animate-in-delay-4': {
          'animation-delay': '0.4s',
        },
      })
    }
  ],
} 