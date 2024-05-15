import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/scss/app.scss'
import firebaseKey from '@/connections/_firebaseConnection.js'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'

const app = createApp(App);

//connections connection
const firebaseConfig = firebaseKey()
const fApp = initializeApp(firebaseConfig)
const db = getFirestore(fApp);
const storage = getStorage(fApp);


app.use(router)
app.mount('#app')

export {db, storage}
