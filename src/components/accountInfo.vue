<script setup>

defineProps(['user']);
defineEmits(['handleSignOut', 'handleEditProfile'])

</script>

<template>

  <div class="container">
    <h1>Hello, {{ user.displayName }}</h1>
    <div class="row">
      <div class="col photoCol">
        <div class="col photoBorder border rounded-circle border-5">
          <img class="border rounded-circle" v-if="user.photoURL" :src=user.photoURL alt="User Photo">
        </div>
        <div class="row">
          <div class="row row-cols-2 p-2 text-center" style="position: relative; left: 40px;">
            <div class="col col-auto">
              <button type="button" class="btn btn-primary" @click="$emit('handleSignOut')">Sign Out</button>
            </div>
            <div class="col col-auto">
              <button type="button" class="btn btn-primary" @click="$emit('handleEditProfile')">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
      <!--      TODO: Add Profile info here \/-->
      <div class="col">

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

img {
  max-height: 250px;
  position: relative;
  top: 2.5px;
  left: 2.5px;
}


</style>
