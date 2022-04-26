import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/style/index.css'

createApp(App).use(store).mount('#app');
