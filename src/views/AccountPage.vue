<script setup>
import Navbar from "@/components/navbar.vue";
import { onMounted, ref } from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {useRouter} from "vue-router";
import {doc, getDoc, onSnapshot, updateDoc, query, collection, limit, getDocs} from 'firebase/firestore';
import {db} from "@/main.js";
import AccountInfo from "@/components/accountInfo.vue";
import GoalsModal from "@/components/goalsModal.vue";
import Leaderboard from "@/components/leaderboard.vue";
import EditAccountInfo from "@/components/editAccountInfo.vue";

const router = useRouter();
const loggedIn = ref(false);

let user = ref();
let auth;
let docRef;
let leaderboardUsers = [];
let action = ref('view')
let uid;


onMounted(async () => {
  auth = getAuth();
  uid = auth.currentUser.uid;
  docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    onSnapshot(docRef, (doc) => {
      user.value = {...doc.data()};
    });
  } else {
    console.log("No document exists");
  }
  //leaderboard
  const querySnapshot = await getDocs(query(collection(db, "users"), limit(3)));
  querySnapshot.forEach((doc) => {
    leaderboardUsers.push({...doc.data()});
  })
  console.log(leaderboardUsers)
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

const startProfileEdit = () => {
  action.value = 'edit';
}

const handleEditProfile = async (updates) => {
  await updateDoc(docRef, {
    displayName: updates.newDisplayName,
    firstName: updates.newFirstName,
    lastName: updates.newLastName,
    age: updates.newAge,
    photoURL: updates.newPhotoURL
  })
  action.value = 'view';
  console.log('edit complete')
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
  <div v-if="user">
    <account-info v-show="action === 'view'" :user="user"
                  @handleSignOut="handleSignOut"
                  @startProfileEdit="startProfileEdit"
                  @handleCheckIn="handleCheckIn"
    ></account-info>

    <edit-account-info v-show="action === 'edit'" :key="action"
                       :user="user" :userUID="uid"
                       @handleEditProfile="handleEditProfile"
    ></edit-account-info>
  </div>

  <div v-show="action === 'view'" class="row p-5 justify-content-center ">
    <div class="col col-auto">
      <button class="btn btn-primary" data-bs-target="#leaderboardModal" data-bs-toggle="modal">View Leaderboard
      </button>
    </div>
  </div>
  <goals-modal v-if="user" :user="user"></goals-modal>
  <leaderboard v-if="user" :users="leaderboardUsers"></leaderboard>
</template>

<style scoped>

</style>
