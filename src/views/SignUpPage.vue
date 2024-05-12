<script setup>
import {ref, toValue} from 'vue'
import { doc, setDoc } from 'firebase/firestore'
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import Navbar from "@/components/navbar.vue";
import {useRouter, RouterLink} from "vue-router";
import {db} from "@/main.js";


const router = useRouter();
const email = ref('');
const password = ref('');
const age = ref();
const fName = ref('');
const lName = ref('');


const signUp = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        const displayName = fName.value + " " + lName.value;
        const uData = {
          displayName: displayName,
          firstName: fName.value,
          lastName: lName.value,
          age: age.value,
          points: 0,
        }
        setDoc(doc(db, 'users', auth.currentUser.uid), uData);
        console.log('successfully registered');
        router.push('/account');
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      })
};

</script>

<template>

  <navbar></navbar>
  <div>
    <h1>Sign Up</h1>
    <div><input type="email" placeholder="Email" v-model="email"/></div>
    <div><input type="password" placeholder="Password" v-model="password"/></div>
    <div><input type="number" placeholder="Age" v-model="age"/></div>
    <div><input type="text" placeholder="First Name" v-model="fName"/></div>
    <div><input type="text" placeholder="Last Name" v-model="lName"/></div>
    <div>
      <button @click="signUp">Sign up</button>
    </div>
    <div>
      Already have an account? Click
      <RouterLink to="/login">here</RouterLink>
    </div>
  </div>

</template>

<style scoped>

</style>
