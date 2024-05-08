<script setup>
import Navbar from "@/components/navbar.vue";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import {db} from "@/main.js";
import AccountInfo from "@/components/accountInfo.vue";

const router = useRouter();
const loggedIn = ref(false);

let user = ref();
let auth;
onMounted(async () => {
  auth = getAuth();
  const docRef = doc(db, 'users', auth.currentUser.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    onSnapshot(docRef, (doc) => {
      user.value = {...doc.data()};
    });
  } else {
    console.log("No document exists");
  }

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
    router.push("/")
  })
}

</script>

<template>
  <navbar></navbar>
  <account-info v-if="user" :user="user"
                @handleSignOut="handleSignOut"
  ></account-info>
</template>

<style scoped>

</style>
