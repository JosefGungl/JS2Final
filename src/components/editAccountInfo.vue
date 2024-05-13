<script setup>
import { storage } from "@/main.js";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

let props = defineProps(['user', 'userUID'])
const emit = defineEmits(['handleEditProfile'])

let newDisplayName = props.user.displayName;
let newFirstName = props.user.firstName;
let newLastName = props.user.lastName;
let newAge = props.user.age;
let newPhotoURL = props.user.photoURL;
let fileLocation = 'userPhotos/' + props.userUID;

let selectedPhoto;


const onFileSelect = (event) => {
  selectedPhoto = event.target.files[0];
}

const upload = () => {
  const storageRef = ref(storage, fileLocation);
  uploadBytes(storageRef, selectedPhoto)
      .then(
          (snapshot) => {
            getDownloadURL(ref(storage, fileLocation))
                .then((download_url) => (newPhotoURL = download_url));
            console.log('uploaded!');
            alert("Photo uploaded successfully! Save to view changes")
          }
      )
}

const sendEdit = () => {
  let updates = {
    newDisplayName: newDisplayName,
    newAge: newAge,
    newFirstName: newFirstName,
    newLastName: newLastName,
    newPhotoURL: newPhotoURL
  }
  emit('handleEditProfile', updates)
}

</script>

<template>

  <div class="container p-4">
    <div class="row text-center">
      <h1>Edit Profile</h1>
    </div>
    <div class="col">
      <div class="row row-cols-3 photoCol">
        <div class="col photoBorder ">
          <img class="border userPhoto " v-if="newPhotoURL" :src="newPhotoURL"  alt="User Photo">
        </div>
        <div class="col align-content-center">
          <input type="file" @change="onFileSelect"><br><br>
          <button class="btn btn-secondary" @click="upload">Upload Photo</button>
        </div>
      </div>
      <div class="row">
        <div class="row align-content-center" style="width: 305px;">
          Display Name: <input class="form-control" type="text" v-model="newDisplayName">
        </div>
      </div>
      <div class="row">
        Name:
        <div class="row">
          <input class="form-control" type="text" v-model="newFirstName" style="width: 140px;">
          <input class="form-control" type="text" v-model="newLastName" style="width: 140px;">
        </div>
      </div>
      <div class="row h-25 align-content-center" style="width: 280px;">
        Age: <input class="form-control" type="number" v-model="newAge">
      </div>
    </div>
    <br>
    <div class="row justify-content-center">
      <div class="col col-auto">
        <button class="btn btn-primary" @click="sendEdit">Save</button>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
