import { createApp } from 'vue'
import '//kit.fontawesome.com/62dad9f3d1.js' //Font awesome
import router from './routes/router'

import './style.css'
import App from './App.vue'

createApp(App).use(router).mount('#app')
