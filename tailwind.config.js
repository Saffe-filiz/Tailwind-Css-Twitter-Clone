module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: { 
    extend: {
       animation: {
        increaseAnimation: 'increase 400ms 1',
        decreaseAnimation: 'decrease 400ms 1',
       },
       keyframes: {
          increase: {
            'from': {transform: 'translateY(20px)'},
            'to': {transform: 'translatY(0px)'},
          },
          decrease: {
            'from': {transform: 'translateY(-20px)'},
            'to': {transform: 'translatY(0px)'},
          },
       },
       padding: {
        '2.75': '11px',
        '3.75': '15px',
      },
      margin: {
        '2.75': '11px',
      },
      colors: {
        'btn-bg-color': '#1DA1F2',
        'min-border-color': '#eff3f40',
        'input-main-border-color': '#cfd9de'
      },
       width: {
        '8.5': '34px',
        '3.75': '15px',
      },
      height: {
        '8.5': '34px',
        '3.75': '15px',
      },
    },
  },
  plugins: [],
};
