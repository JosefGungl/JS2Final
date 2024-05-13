<script setup>
defineProps(['user'])

</script>

<template>

  <div class="row">
    <div class="col">{{ user.displayName }}</div>
    <div class="col">{{ user.points }}</div>
  </div>

</template>

<style scoped>

</style>
