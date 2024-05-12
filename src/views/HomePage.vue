<script>
import Navbar from "@/components/navbar.vue";


export default {
  name: "HomePage",
  components: {Navbar}
}
</script>

<template>
  <div id="page">
    <navbar class='custom-nav'></navbar>
  </div>
  <div class="row text-center">
    <h2>Hey, down here!</h2>
    <p class="p-5"></p>
    <p>
      Are you looking for a new home gym that is stress and judgment free? Look no further than us here at BlackHawk Fitness.<br>
      We are a small and locally run gym that is open 24/7! We offer plenty of amenities such as our:
    </p>
    <ul>
      <li>Cardio Theatre</li>
      <li>Free Weight Room</li>
      <li>Machine Strength Training Equipment</li>
      <li>Group Exercise Classroom</li>
      <li>Racquetball Court</li>
      <li>Locker Rooms (with showers)</li>
      <li>Sauna</li>
    </ul>
    <br>
    <p>
      Still not sure if you want to make us your home gym? Try our free day pass to come and see what we are all about!
      Just stop on by and we can get that free day pass set up for you!
    </p>
  </div>
<footer class="p-5">
</footer>

</template>

<style scoped>
#page{
  background-image: url("../assets/bhf-outside.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 800px;
  width: 100%;
}
.custom-nav{
  background-image: none;
}




</style>
