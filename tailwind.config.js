/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // เพิ่ม Animation พิเศษตรงนี้ค่ะ
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-down': 'fadeInDown 0.3s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, // ลอยขึ้น 20px
        }
      }
    },
  },
  plugins: [],
}