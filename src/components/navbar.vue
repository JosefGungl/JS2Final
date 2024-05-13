<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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


</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <RouterLink to="/"><img src="../assets/bhf-logo.png" alt=""></RouterLink>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <a class="nav-link active" href="#"><RouterLink to="/">Home</RouterLink></a>
          </li>

          <li class="nav-item">
            <a class="nav-link active"><router-link to="/membership">Membership</router-link></a>
          </li>

          <li class="nav-item">
            <a class="nav-link active"><router-link to="/programs&classes">Programs/Classes</router-link></a>
          </li>

          <li class="nav-item">
            <a class="nav-link active"><router-link to="/about">About Us</router-link></a>
          </li>

          <li class="nav-item">
            <a v-if="loggedIn === false" class="nav-link active"><router-link to="/LogIn">Login/SignUp</router-link></a>
            <a v-if="loggedIn === true" class="nav-link active"><router-link to="/account">Account</router-link></a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
