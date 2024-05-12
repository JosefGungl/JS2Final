<script setup>
import GoalAndProgressCard from "@/components/goalAndProgressCard.vue";
import NewGoalEntryModal from "@/components/newGoalEntryModal.vue";
import {doc, updateDoc, getDoc, onSnapshot} from 'firebase/firestore'
import {db} from "@/main.js";
import {getAuth} from "firebase/auth";
import {onMounted} from "vue";


const goals = []
const progress = []
let entryType = '';

const props = defineProps(['user'])
let docRef;
let user = props.user

onMounted(async () => {
  const auth = getAuth();
  const docRef = doc(db, 'users', auth.currentUser.uid);

  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    onSnapshot(docRef, (doc) => {
      user.value = {...doc.data()};
    });
  } else {
    console.log("No document exists");
  }

  for (let i in user.value.goalsAndProgress){
    if (i.type === "goal") {
      goals.push(i);
    }else if (i.type === "progress") {
      progress.push(i);
    }
  }
})


//TODO: sort into respective list based on att 'type'


const addEntry = async (newEntry) => {
  const list = goals.concat(progress)
  list.push(newEntry)

  await getDoc(docRef);
  await updateDoc(docRef, {
    //TODO: add list of objects here
    goalsAndProgress: list,

  });
  console.log('updated')
}



</script>

<template>

  <div class="modal" id="goalsModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4>Goals and Progress</h4>
          <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col">
              <button @click="entryType = 'Goal'" class="btn btn-primary" data-bs-target="#newEntryModal" data-bs-toggle="modal">New
                Goal Entry
              </button>
            </div>
            <div class="col">
              <goal-and-progress-card
                  :goals-and-progress="goals"
              ></goal-and-progress-card>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button @click="entryType='Progress'" class="btn btn-primary" data-bs-target="#newEntryModal" data-bs-toggle="modal">
                New Progress Entry
              </button>
            </div>
            <div class="col">
              <goal-and-progress-card
                  :goals-and-progress="progress"
              ></goal-and-progress-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <new-goal-entry-modal
      :entryType="entryType"
      @new-entry="addEntry"
  ></new-goal-entry-modal>

</template>

<style scoped>

</style>
