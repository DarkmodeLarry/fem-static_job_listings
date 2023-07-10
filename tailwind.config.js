/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif']
      },
      fontWeight: {
        light: 500,
        thick: 700
      },
      colors: {
        darkcyan: '#5ba4a4',
        lightGrayCyan: '#effafa',
        lightGrayishCyan: '#eef6f6',
        darkGrayishCyan: '#7b8e8e',
        veryDarkGrayishCyan: '#2c3a3a'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
