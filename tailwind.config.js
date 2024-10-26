/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Alata: ['Alata', 'sans-serif'],
        Inder: ['Inder', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'blue-btn': '#5793BF',
        'text-head': '#0B4E7F',
        'text-para':'#298CD4',
        'text-primary': '#F6A015',
        'text-count':'#003784',
        'back-primary':'#E8E578',
        'back-about':'#9EBACE',
        'back-about1':'#438CC1',
        'back-about2':'#438BC7',
        'back-secondary':'#C6D3A8',
        'back-yellow' :'#E8E578',
        'back-blue':'#C9E8FF',
        'back-orange':'#FFEEC9',
        'back-pink':'#FFDDE1',
        'back-green':'#D8FFC9',
        'back-blue-light':'#BDDAEF'
      },

    },
  },
  plugins: [],
}