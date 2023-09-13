/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      animation: {
        showBottomNavbar: 'showBottomNavbar 0.5s ease-in-out',
      },
      keyframes: {
        showBottomNavbar: {
          '0%': { bottom: "-4rem", opacity: "0" },
          '100%': { bottom: "0px", opacity: "1" },
        }
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

