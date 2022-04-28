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
        transitionDeley: 'delay 100ms 1',
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
          delay: {
            'from': {visibility: 'hidden'},
            'to': {visibility: 'visible'},
          }
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
        '11.5': '45px',
        '10.75': '43px',
        '8.5': '34px',
        '8.3': '33.50px',
        '3.75': '15px',
      },
      height: {
        '11.5': '45px',
        '10.75': '43px',
        '8.3': '33.50px',
        '8.5': '34px',
        '3.75': '15px',
      },
    },
  },
  plugins: [],
};
