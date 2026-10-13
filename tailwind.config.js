/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#06080c',
          900: '#0a0d14',
          850: '#0f1420',
          800: '#151c2c',
          700: '#1e283d',
          600: '#2d3b55',
          500: '#475569',
        },
        terminal: {
          green: '#10b981',
          lime: '#22c55e',
          accent: '#00f59b',
          cyan: '#38bdf8',
          blue: '#60a5fa',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        'glow-green': '0 0 24px -4px rgba(16, 185, 129, 0.25)',
        'glow-cyan': '0 0 24px -4px rgba(56, 189, 248, 0.25)',
      },
    },
  },
  plugins: [],
}
