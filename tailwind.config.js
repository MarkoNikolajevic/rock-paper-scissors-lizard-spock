/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Barlow Semi Condensed', 'sans-serif']
    },
    extend: {
      fontSize: {
        xxs: '0.625rem',
        '2.5xl': [
          '2.5rem',
          {
            lineHeight: '2.5rem'
          }
        ]
      },
      colors: {
        dark: 'hsl(229, 25%, 31%)',
        score: 'hsl(229, 64%, 46%)',
        header: 'hsl(217, 16%, 45%)'
      },
      backgroundImage: {
        scissors:
          'linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%));',
        paper:
          'linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%));',
        rock: 'linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%));',
        lizard:
          'linear-gradient(to bottom, hsl(261, 73%, 60%), hsl(261, 72%, 63%));',
        spock:
          'linear-gradient(to bottom, hsl(189, 59%, 53%), hsl(189, 58%, 57%));',
        body: 'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));'
      },
      borderWidth: {
        3: '3px'
      }
    }
  },
  plugins: []
};
