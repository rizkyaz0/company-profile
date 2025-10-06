/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Card background colors
        'card-bg': 'hsl(var(--card-bg))',
        'card-border': 'hsl(var(--card-border))',
        'card-shadow': 'var(--card-shadow)',
        
        // Background colors
        'bg-primary': 'hsl(var(--bg-primary))',
        'bg-secondary': 'hsl(var(--bg-secondary))',
        'bg-tertiary': 'hsl(var(--bg-tertiary))',
        'bg-accent': 'hsl(var(--bg-accent))',
        'bg-pattern': 'hsl(var(--bg-pattern))',
      },
      boxShadow: {
        'card': 'var(--card-shadow)',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
