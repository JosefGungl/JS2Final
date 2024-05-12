<script setup>

defineProps(['user']);
defineEmits([
    'handleSignOut',
    'handleEditProfile',
    'handleCheckIn',
])

</script>

<template>

  <div class="container">
    <h1>Hello, {{ user.displayName }}</h1>
    <div class="row">
      <div class="col col-auto photoCol">
        <div class="col photoBorder border rounded-circle border-5">
          <img class="border userPhoto rounded-circle" v-if="user.photoURL" :src=user.photoURL alt="User Photo">
        </div>
        <div class="row">
<!--          TODO: add functionality to edit profile button-->
          <div class="row row-cols-2 p-3 text-center" style="position: relative; left: 28px;">
            <div class="col col-auto">
              <button type="button" class="btn btn-primary" @click="$emit('handleSignOut')"> Sign Out </button>
            </div>
            <div class="col col-auto">
              <button type="button" class="btn btn-primary" @click="$emit('handleEditProfile')">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row h-25 align-content-center">
          <h3 v-if="user.firstName && user.lastName">{{user.firstName}} {{user.lastName}}</h3>
        </div>
        <div class="row h-25 align-content-center">
          <h5 v-if="user.age">{{user.age}}</h5>
        </div>
        <div class="row h-25 align-content-center">
          <h5 v-if="user.points">Account Points: {{user.points}}</h5>
        </div>
      </div>
      <div class="col col-3 text-end">
        <button class="btn btn-primary" @click="$emit('handleCheckIn')">Check-in</button>
        <p></p>
<!--        todo: add goals modal-->
        <button class="btn btn-primary" data-bs-target="#goalsModal" data-bs-toggle="modal">Goals and Progress</button>
      </div>
    </div>
    <div class="row border">
      <div class="col">
        <h2>Badges</h2>
        <div class="row">
<!--          TODO: Add badges cards here-->
          <div></div>
          <div v-if="user.badges" v-for="i in user.badges" class="card">
            <div v-if="user.badges[i].title" class="card-header">{{user.badges[i].title}}</div>
            <div v-if="user.badges[i].photoURL" class="card-body"><img class="badgeImg" :src="user.badges[i].photoURL" alt="Badge Image"></div>
          </div>
        </div>
      </div>
      <div class="col">
        <h2>Streaks</h2>
        <div class="row">
<!--          TODO: Add streaks cards here-->
          <div v-if="user.dailyStreak">Current Check-in streak: {{user.dailyStreak}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.photoBorder {
  height: 265px;
  width: 265px;
  border-color: grey;
}

.userPhoto {
  max-height: 250px;
  position: relative;
  top: 2.5px;
  left: 2.5px;
}

.badgeImg {
  object-fit: contain;
}
</style>
