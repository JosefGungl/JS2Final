import 'bootstrap/dist/js/bootstrap.js'
import '@/assets/scss/app.scss'
import firebaseKey from '@/connections/_firebaseConnection.js'
import { getFirestore } from 'firebase/firestore'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'


//connections connection
const firebaseConfig = firebaseKey()

const fApp = initializeApp(firebaseConfig)

const app = createApp(App);
const db = getFirestore(fApp);

app.use(router)
app.mount('#app')

export {db}
