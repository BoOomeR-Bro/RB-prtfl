/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0A0A',
          900: '#141414',
          850: '#1A1A1A',
          800: '#1F1F1F',
          700: '#2A2A2A',
          600: '#333333',
          500: '#555555',
          400: '#888888',
          300: '#AAAAAA',
          200: '#CCCCCC',
        },
        lime: {
          DEFAULT: '#C8FF00',
          dim: 'rgba(200, 255, 0, 0.08)',
          subtle: 'rgba(200, 255, 0, 0.15)',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
}
