/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"DM Serif Display"', '"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        ink: {
          DEFAULT: '#0A0805',
        },
        plum: {
          DEFAULT: '#35063e',
          50: '#faf4fb',
          100: '#efdff2',
          200: '#d6a9dc',
          300: '#a968b2',
          400: '#6c2e78',
          500: '#35063e',
          600: '#2b0432',
          700: '#1e0224',
        },
        oxblood: {
          DEFAULT: '#400000',
          50: '#fbeeee',
          100: '#f1cfcf',
          200: '#c76c6c',
          300: '#8e2424',
          400: '#600606',
          500: '#400000',
          600: '#2e0000',
        },
        cream: {
          DEFAULT: '#F5EFE3',
          50: '#fbf8f1',
          100: '#F5EFE3',
          200: '#ebe2cd',
          300: '#d9c8a3',
        },
        mint: {
          DEFAULT: '#D0F0C0',
          soft: '#e8f8de',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'marquee': { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 10%)' },
          '80%': { transform: 'translate(-15%, 0)' },
          '90%': { transform: 'translate(10%, 5%)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'marquee': 'marquee 40s linear infinite',
        'grain': 'grain 8s steps(10) infinite',
        'slow-zoom': 'slow-zoom 12s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
      },
      boxShadow: {
        'editorial': '0 30px 60px -20px rgba(53, 6, 62, 0.35), 0 10px 20px -10px rgba(64, 0, 0, 0.25)',
        'spread': '0 50px 100px -30px rgba(10, 8, 5, 0.5)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
