<script setup>

defineProps(['leaderboardUsers']);

</script>

<template>

  <div class="modal" tabindex="-1" id="leaderboardModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Leaderboard</h3>
          <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row row-cols-2">
            <div class="col">Name: </div>
            <div class="col">Points: </div>
          </div>
          <div class="row" v-for="user in leaderboardUsers">
            <div class="col">{{ user.displayName }}</div>
            <div class="col">{{ user.points }}</div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
