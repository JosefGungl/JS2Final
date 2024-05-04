import 'bootstrap/dist/js/bootstrap.js'
import '@/assets/scss/app.scss'
import connectionKey from '@/firebase/_firebaseConnection.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'

//firebase connection
const firebaseConfig = connectionKey()

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)
app.mount('#app')
