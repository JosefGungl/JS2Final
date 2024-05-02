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
  <div class="row">
    <h2>Content HERE!!!!</h2>
  </div>

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
