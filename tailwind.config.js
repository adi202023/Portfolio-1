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
        background: '#171717',
        foreground: '#e8e8ed',
        charcoal: '#171717',
        greenBlack: '#06110c',
        accent: {
          DEFAULT: '#a31c1b',
          muted: 'rgba(163, 28, 27, 0.15)',
          glow: 'rgba(163, 28, 27, 0.25)',
          dark: '#851615',
          hover: '#bd2423',
        },
        surface: {
          DEFAULT: '#06110c',
          subtle: '#0d1f16',
          border: '#1a3325',
        },
      },
    },
  },
  plugins: [],
};
