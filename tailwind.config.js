module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      width: {
        '500': '500px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        'brand-blue': '#1992d4',
        'custom-gold': '#DFAF67',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'xs': '400px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [
    // Include any plugins you need
  ],
};
