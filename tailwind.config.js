/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        background: '#070709',
        foreground: '#e8e8ed',
        accent: {
          DEFAULT: '#d4ff32',
          muted: 'rgba(212, 255, 50, 0.12)',
          dark: '#b5df20',
        },
        surface: {
          DEFAULT: '#0e0e13',
          subtle: '#14141c',
          border: '#21212c',
        },
      },
    },
  },
  plugins: [],
};
