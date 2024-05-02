<script>
import Navbar from "@/components/navbar.vue";
import logInSignUp from "@/components/logInSignUp.vue";
import LogInSignUp from "@/components/logInSignUp.vue";

export default {
  name: "AccountPage",
  components: {LogInSignUp, Navbar}
}
</script>

<template>
  <navbar></navbar>
  <p>Account Page</p>

<!--  TODO: authenticate login, display modal if not logged in yet-->
  <logInSignUp></logInSignUp>

</template>

<style scoped>

</style>
