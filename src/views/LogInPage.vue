<script setup>
import {ref} from 'vue'
import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import Navbar from "@/components/navbar.vue";
import {useRouter, RouterLink} from "vue-router";


const router = useRouter();
const email = ref('');
const password = ref('');
const errMsg = ref();


const logIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log('successfully logged in');
        router.push('/account');
      })
      .catch(error => {
        console.log(error);
        switch (error.code) {
          case "auth/invalid-email":
            errMsg.value = "Invalid email";
            break;
          case "auth/user-not-found":
            errMsg.value = "No account with this email was found";
            break;
          case "auth/wrong-password":
            errMsg.value = "Invalid password";
            break;
          case "auth/invalid-credential":
            errMsg.value = "Invalid email or password";
            break;
        }
      })
};

</script>

<template>
  <navbar></navbar>
  <h1 class="text-center">Log In</h1>
  <div class="row justify-content-center text-center">
    <div class="col col-5 text-center">
      <div class="row"><input class="form-control " type="email" placeholder="Email" v-model="email"/></div>
      <div class="row "><input class="form-control gy-2" type="password" placeholder="Password" v-model="password"/></div>
      <div class="row"><p v-if="errMsg">{{ errMsg }}</p></div>
      <div class="row"><button class="btn btn-primary gy-2" @click="logIn">Log in</button></div>
      <div class="row justify-content-center">Don't have an account yet?
        <RouterLink class="orangeLink" to="/signup">Click here</RouterLink>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>
