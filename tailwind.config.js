module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'btn-bg-color': '#1DA1F2',
        'min-border-color': '#eff3f40',
      }
    },
  },
  plugins: [],
};
