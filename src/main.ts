import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/assets/scss/_reset.scss'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
