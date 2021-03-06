import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel';

import '@/assets/_template/css/light.css'
import '@/assets/_template/js/app.js'

createApp(App).use(store).use(router).use(VueCarousel).mount('#app')
