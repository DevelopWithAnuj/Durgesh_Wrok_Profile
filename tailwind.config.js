/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./src/**/*.js",
  ],
      theme: {
      extend: {
        colors: {
          navy: { DEFAULT: "#0F3D6E",
          50: "#EEF3F9",
          100: "#DCE7F3",
          400: "#2E5C8F",
          600: "#0F3D6E",
          700: "#0C2F55",
          900: "#081E38",
          dark: '#0A2A4D' },
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
