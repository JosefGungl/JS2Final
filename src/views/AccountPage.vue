<script setup>
import Navbar from "@/components/navbar.vue";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {useRouter} from "vue-router";

const router = useRouter();
const loggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loggedIn.value = true;
    } else {
      loggedIn.value = false;
    }
  });
})
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/home")
  })
}

</script>

<template>
  <navbar></navbar>
  <p>Account Page</p>
  <button @click="handleSignOut">Sign Out</button>


</template>

<style scoped>

</style>
