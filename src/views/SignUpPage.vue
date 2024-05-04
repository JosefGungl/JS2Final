<script setup>
import {ref} from 'vue'
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import Navbar from "@/components/navbar.vue";
import {useRouter, RouterLink} from "vue-router";


const router = useRouter();
const email = ref('');
const password = ref('');


const signUp = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log('successfully registered');
        router.push('/account');
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      })
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log(result.user);
        router.push('/account');
      })
      .catch((error) => {
        console.error(error => {
          console.log(error.code);
        })
      })
};
</script>

<template>

  <navbar></navbar>
  <div>
    <h1>Sign Up</h1>
    <div><input type="email" placeholder="Email" v-model="email"/></div>
    <div><input type="password" placeholder="Password" v-model="password"/></div>
    <div>
      <button @click="signUp">Sign up</button>
    </div>
    <div>
      <button @click="signInWithGoogle">Sign in using Google</button>
    </div>
    <div>
      Already have an account? Click
      <RouterLink to="/login">here</RouterLink>
    </div>
  </div>

</template>

<style scoped>

</style>
