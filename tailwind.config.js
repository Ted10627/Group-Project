/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px 內文(手機)
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px 註解(PC)、副標題(手機)
        '2xl': '1.5rem', // 24px 內文(PC)
        '3xl': '1.875rem', // 30px 副標題(PC)
        '4xl': '2.25rem', // 36px 大標題(PC)
        '5xl': '3rem', // 48px
        '6xl': '3.5rem' // 56px
      },
      screens: {
        '2xl': '1440px',
        //RWD自訂設定
        llg: '1280px',
        lg: '1064px', // => @media (min-width: 1064px) { ... }
        md: '768px' // => @media (min-width: 768px) { ... }
      }
    }
  },
  plugins: []
}
