<script setup>
props = defineProps(['user', 'currentUser'])

let user = props.user;
let currentUser = props.currentUser;

</script>

<template>

  <div class="row">
    <div v-if="user.value.displayName === currentUser.displayName" class="col text-success">{{ user.value.displayName }}</div>
    <div v-else class="col">{{ user.value.displayName }}</div>
    <div class="col">{{ user.value.points }}</div>
  </div>

</template>

<style scoped>

</style>
