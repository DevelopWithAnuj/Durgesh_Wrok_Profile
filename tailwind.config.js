/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./src/**/*.js",
  ],
      theme: {
      extend: {
        colors: {
          navy: { DEFAULT: '#0F3D6E', dark: '#0A2A4D' },
          spark: '#F4B400',
          wgreen: '#25D366',
          ink: '#1F2937',
          mist: '#F8FAFC',
        },
        fontFamily: {
          heading: ['Poppins', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
        },
        boxShadow: {
          card: '0 2px 14px -4px rgba(15,61,110,0.14)',
          lift: '0 8px 24px -8px rgba(15,61,110,0.22)',
        },
        borderRadius: { xl2: '14px' }
      }
    }
  }
