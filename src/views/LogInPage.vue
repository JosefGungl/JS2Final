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
    <h1>Log In</h1>
    <div><input type="email" placeholder="Email" v-model="email"/></div>
    <div><input type="password" placeholder="Password" v-model="password"/></div>
    <p v-if="errMsg">{{ errMsg }}</p>
    <div>
      <button @click="logIn">Log in</button>
    </div>
    <div>
      <button @click="signInWithGoogle">Log in using Google</button>
    </div>
    <div>
      Don't have an account yet? Click
      <RouterLink to="/signup">here</RouterLink>
    </div>
  </div>


</template>

<style scoped>

</style>
