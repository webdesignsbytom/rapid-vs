/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('../assets/images/side_van.jpg')",
        'display-1': "url('../assets/images/white-goods.jpg')",
        'display-2': "url('../assets/images/good_van.jpg')",
        'display-3': "url('../assets/images/spacious-bike.jpg')",
        'display-4': "url('../assets/images/van-interrior.jpg')",
        'display-5': "url('../assets/images/pink_bike.jpg')",
        'display-6': "url('../assets/images/RVS-logo.jpg')",
      },
      colors: {
        'main-colour': '#f69122',
        'nav-colour': '#f69122',
        'footer-colour': '#f69122',
        'colour-pale': '#f1f5f9',
        'colour-light': '#e2e8f0',
        'colour-med': '#94a3b8',
        'colour-dark': '#1e293b',
        'transparent-black': 'rgba(0, 0, 0, 0.65)',
        'transparent-black-2': 'rgba(0, 0, 0, 0.85)',
        'transparent-white': 'rgba(255, 255, 255, 0.65)',
        'transparent-white-2': 'rgba(255, 255, 255, 0.45)',
        'transparent-orange': 'rgba(237, 137, 54, 0.65)',
        'transparent-green': 'rgba(22, 163, 74, 0.65)',
        'transparent-yellow': 'rgba(234, 179, 8, 0.65)',
        'main-text': '#000000',
        'alt-text': '#ffffff',
        'hover-text': '#94a3b8',
        'active-text': '#6b7280',
        'placeholder-text': 'rgb(55 65 81)',
        'error-red': '',
        'success-green': '',
        'event-red': '',
        'twitter-blue': '#1da1f2',
        'hyperlink-blue': '#2563eb',
        'secleted': '#2563eb',
        'non-selected': '#cbd5e1',
      },
      gridTemplateRows: {
        'reg': 'auto 1fr',
        'rev': '1fr auto',
        'even': '1fr 1fr 1fr',
        'one': '1fr',
        'special': 'auto 1fr 0.5fr',
        'ls': '1fr 0.4fr',
        'a1a': 'auto 1fr auto',
        'aa': 'auto auto',
        '3x': '3fr 1fr',
        'item': '50px 1fr',
        'ten-one': '10fr 1fr',
      },
      gridTemplateColumns: {
        'reg': 'auto 1fr',
        'rev': '1fr auto',
        'even': '1fr 1fr 1fr',
        'one': '1fr',
        'xo': '1fr 0.6fr',
        'a1a': 'auto 1fr auto',
        '1a1': '1fr auto 1fr',
        'aa': 'auto auto',
        'faf': '1fr 0.5fr 1fr',
        '1p1': '1fr 30px 1fr',
        '2a': '2fr 1fr auto',
        '3a': '1fr 1fr 0.7fr auto',
        '3x': '3fr 1fr',
        'item': '50px 1fr',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sigmar': ['Sigmar', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
