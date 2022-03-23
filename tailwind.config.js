module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: { 
    extend: {
       padding: {
        '2.75': '11px',
        '3.75': '15px',
      },
      boderWidth: {}, 
      colors: {
        'btn-bg-color': '#1DA1F2',
        'min-border-color': '#eff3f40',
        'input-main-border-color': '#cfd9de'
      }
    },
  },
  plugins: [],
};
