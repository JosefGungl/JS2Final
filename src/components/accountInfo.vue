<script setup>
defineProps(['user']);
defineEmits([
  'handleSignOut',
  'startProfileEdit',
  'handleCheckIn',
])

</script>

<template>

  <div class="container">
    <h1>Hello, {{ user.displayName }}</h1>
    <div class="row">
      <div class="col container col-auto photoCol">
        <div class="container col photoBorder border rounded-circle border-5">
          <img class="border userPhoto rounded-circle" v-if="user.photoURL" :src=user.photoURL alt="User Photo">
        </div>
        <div class="row">
          <div class="row row-cols-2 p-3 text-center" style="position: relative; left: 28px;">
            <div class="col col-auto">
              <button type="button" class="btn btn-secondary" @click="$emit('handleSignOut')"> Sign Out</button>
            </div>
            <div class="col col-auto">
              <button type="button" class="btn btn-secondary" @click="$emit('startProfileEdit')">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row h-25 align-content-center">
          <h3 v-if="user.firstName && user.lastName">{{ user.firstName }} {{ user.lastName }}</h3>
        </div>
        <div class="row h-25 align-content-center">
          <h5 v-if="user.age">{{ user.age }}</h5>
        </div>
        <div class="row h-25 align-content-center">
          <h5 v-if="user.points">Account Points: {{ user.points }}
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#pointsInfoModal"><i
                class="bi bi-question-circle"></i></button>
          </h5>
          <h5 v-else>Account Points: 0</h5>
        </div>
      </div>
      <div class="col col-3 text-end">
        <button class="btn btn-primary" @click="$emit('handleCheckIn')">Check-in</button>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#checkInInfoModal"><i
            class="bi bi-question-circle"></i></button>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <h2>Streaks</h2>
        <div class="row">
          <div v-if="user.dailyStreak">Current Check-in streak: {{ user.dailyStreak }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
