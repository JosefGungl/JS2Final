<script>
import Navbar from "@/components/navbar.vue";
import googleMap from '@/components/googleMap.vue';

export default {
  name: "AboutPage",
  components: {Navbar, googleMap},
}
</script>

<template>
  <navbar></navbar>
  <h1 class="p-3">About Us</h1>
  <div class="row">
    <div class="col p-4 pt-1">
      <p>1111 Madison Ave, Hwy 12 <br>Fort Atkinson, Wisconsin 53538 </p>
      <p>Phone: (920)-563-5613</p>
      <p>Email: blackhawkfitness@charter.net</p>
      <p>Instagram: <a href="https://www.instagram.com/blackhawkfitness/">@blackhawkfitness</a></p>
      <p>Facebook: <a href="https://www.facebook.com/BlackHawkFitnessClub/">Blackhawk Fitness</a></p>
      <br>
      <h3>Current Staffed Hours:</h3>
      <ul>
        <li>Monday: 8am - 12pm</li>
        <li>Tuesday: 4pm - 8pm</li>
        <li>Wednesday: 8am - 12pm</li>
        <li>Thursday: 4pm - 8pm</li>
        <li>Friday: 8am - 12pm</li>
        <li>Saturday: 10am - 2pm</li>
        <li>Sunday: none</li>
      </ul>
    </div>
    <div class="col col-4 p-2">
      <google-map></google-map>
    </div>
    <div class="col col-1"></div>
  </div>


  <p class="p-3 pt-none">*If you would like to sign up for membership but are not able to come in during our scheduled staffed hours,
    please send us an email; we are happy to make an appointment during a time that works for you.</p>

</template>

<style scoped>
a{
  color: blue;
}
a:active{
  color: blue;
}
</style>
