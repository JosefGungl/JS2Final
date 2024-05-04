<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {onMounted} from "vue";

const authUser = null;

// onMounted(() => {
//   firebase.onAuthStateChanged((user) => {
//     if (user) {
//       this.authUser = new User(user);
//       console.log('logged in as ',user);
//     }else {
//       this.authUser = null;
//       console.log('not logged in');
//     }
//   })
// });
</script>

<template>

  <RouterView />
</template>

<style scoped>

</style>


