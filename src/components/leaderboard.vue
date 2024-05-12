<script setup>
import {onMounted} from "vue";
import {collection, getDocs, limit, query} from "firebase/firestore";
import {db} from "@/main.js";
import LeaderboardUser from "@/components/leaderboardUser.vue";

let p = defineProps(['user'])

let users = []

onMounted(async () => {
  users = [];
  query(collection(db, "users"), limit(3))
    .onSnapshot(snapshot => {
      snapshot.forEach((user) => {
        users.push({
          user: user.data().displayName,
          points: user.data().points,
          streak: user.data().dailyStreak,
        });
      })
    });
});
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
          <div v-if="users">
            <leaderboard-user v-for="user in users" :key="users" :currentUser="p.user" :user="user"></leaderboard-user>
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
