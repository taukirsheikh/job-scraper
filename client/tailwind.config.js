/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
      'default':"#808080",},
    },
    customClasses: {
      'custom-li': 'text-center hover:cursor-pointer hover:bg-indigo-500 w-full p-1',
    },
  },
  plugins: [],
}