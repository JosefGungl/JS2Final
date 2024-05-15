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
          dailyStreak: 0,
          lastCheckIn: new Date(),
          //photoURL: 'https://placehold.co/250x250'
          photoURL: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
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
  <h1 class="text-center">Sign Up</h1>
  <div class="row justify-content-center text-center">
    <div class="col col-5 text-center">
      <div class="row"><input class="form-control row" type="email" placeholder="Email" v-model="email"/></div>
      <div class="row"><input class="form-control gy-2 row" type="password" placeholder="Password" v-model="password"/></div>
      <div class="row"><input class="form-control gy-2 row" type="number" placeholder="Age" v-model="age"/></div>
      <div class="row"><input class="form-control gy-2 row" type="text" placeholder="First Name" v-model="fName"/></div>
      <div class="row"><input class="form-control gy-2 row" type="text" placeholder="Last Name" v-model="lName"/></div>
      <div class="row"><button class="btn btn-primary gy-2" @click="signUp">Sign up</button></div>
      <div class="row justify-content-center">Already have an account?
        <RouterLink class="orangeLink" to="/login">Click here</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
