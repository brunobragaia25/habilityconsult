/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          '50': '#FEF2EC',
          '100': '#FDE0D0',
          '200': '#FABE9E',
          '300': '#F6986C',
          '400': '#F37C4A',
          '500': '#F15A29',
          '600': '#D6451B',
          '700': '#AC3314',
        },
        'grey': {
          '50': '#F5F5F5',
          '100': '#E8E8E8',
          '200': '#C8C8C8',
          '300': '#A0A0A0',
          '400': '#6E6E6E',
          '500': '#4A4A4A',
          '600': '#363636',
          '800': '#1E1E1E',
          '900': '#111111',
        },
        'red': {
          '300': '#F58480',
          '500': '#EF4136',
          '700': '#AA221A',
          '800': '#7A1812',
          '900': '#4A0F0B',
        }
      },
      fontFamily: {
        grotesk: ['Overused Grotesk', 'sans-serif'],
        montreal: ['PP Neue Montreal', 'sans-serif'],
        linear: ['Linear Grotesk', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.429' }],
        sm: ['14px', { lineHeight: '1.429' }],
        base: ['16px', { lineHeight: '1.5' }],
        lg: ['18px', { lineHeight: '1.5' }],
        xl: ['20px', { lineHeight: '1.5' }],
        '2xl': ['24px', { lineHeight: '1.5' }],
        '3xl': ['28px', { lineHeight: '1.5' }],
        '4xl': ['36px', { lineHeight: '1.1' }],
        '5xl': ['48px', { lineHeight: '1.1' }],
        '6xl': ['56px', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
}
