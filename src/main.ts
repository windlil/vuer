import { createApp } from 'vue'
import pinia from './store'
import router from './router'
import App from './App.vue'
import './assets/styles/index.css'

createApp(App).use(router).use(pinia).mount('#app')
