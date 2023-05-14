/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
// plugin(a)=>{}
module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // plugin(({ addBase, theme }) => {
    //   addBase({
    //     'html': { 
    //       // fontSize: theme('fontSize.2xl'), 
    //       // color: theme('colors.slate.950'),
    //       // background:theme('colors.slate.950'),
    //     },
    //     'h2': {},
    //     'h3': {},
    //   })
    // })
  ],
}

