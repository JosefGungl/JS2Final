<script setup>
import Navbar from "@/components/navbar.vue";
import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {useRouter} from "vue-router";
import {doc, getDoc, onSnapshot, updateDoc, Timestamp} from 'firebase/firestore';
import {db} from "@/main.js";
import AccountInfo from "@/components/accountInfo.vue";
import moment from "moment";
import GoalsModal from "@/components/goalsModal.vue";
import Leaderboard from "@/components/leaderboard.vue";

const router = useRouter();
const loggedIn = ref(false);

let user = ref();
let auth;
let docRef;

onMounted(async () => {
  auth = getAuth();
  docRef = doc(db, 'users', auth.currentUser.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    onSnapshot(docRef, (doc) => {
      user.value = {...doc.data()};
    });
  } else {
    console.log("No document exists");
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      loggedIn.value = true;
    } else {
      loggedIn.value = false;
    }
  });
})
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  })
};

const handleEditProfile = () => {
//   TODO: enable to edit profile
}

const handleCheckIn = async () => {
  let alertMsg = 'You have been checked in :)\n 1 point has been added to your account';
  await getDoc(docRef);

  let fbDate = user.value.lastCheckIn.toDate().getDate();
  let today = new Date()
  let pointsAdded = 1;

  if (today.getDate() - fbDate === 1) {
    let currentStreak = user.value.dailyStreak;
    //if the streak has been extended by a week, 5 points rather than 1
    if (currentStreak % 7 === 0) {
      pointsAdded = 5;
      alertMsg = 'Congrats on progressing your streak by a week! \n' +
          '5 points have been added to your account'
    }

    //TODO: highest streak badge by week

    await updateDoc(docRef, {
      lastCheckIn: today,
      dailyStreak: currentStreak + 1,
      points: user.value.points + pointsAdded,
    })
    alert(alertMsg);

  } else if (today.getDate() - fbDate === 0) {
    alert('You have already checked in for today :)')

  } else {
    await updateDoc(docRef, {
      lastCheckIn: today,
      dailyStreak: 1,
      points: user.value.points + pointsAdded,
    })
    alert('Oh no! Looks like you lost your streak :( \nyou have been checked in ' +
        'and the streak has been reset');
  }
}
</script>

<template>
  <navbar></navbar>
  <account-info v-if="user" :user="user"
                @handleSignOut="handleSignOut"
                @handleEditProfile="handleEditProfile"
                @handleCheckIn="handleCheckIn"
  ></account-info>
  <div class="row p-5 justify-content-center ">
    <div class="col col-auto">
      <button class="btn btn-primary" data-bs-target="#leaderboardModal" data-bs-toggle="modal">View Leaderboard</button>
    </div>
  </div>
  <goals-modal v-if="user" :user="user"></goals-modal>
  <leaderboard v-if="user" :user="user"></leaderboard>
</template>

<style scoped>

</style>
