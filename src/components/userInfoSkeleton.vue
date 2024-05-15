<script setup>
import AnimatedPlaceholder from "@/components/animatedPlaceholder.vue";
console.log('skeleton')

</script>

<template>

  <div class="container">
    <h1><animated-placeholder
        height="36px"
        width="250px"
    /></h1>
    <div class="row">
      <div class="col container col-auto photoCol">
        <div class="container col photoBorder  rounded-circle border-5">
            <animated-placeholder
                height="250px"
                width="250px"
                border-radius="50%"
            ></animated-placeholder>
        </div>
        <div class="row">
          <div class="row row-cols-2 p-3 text-center" style="position: relative; left: 28px;">
            <div class="col col-auto">
              <animated-placeholder height="36px" width="90px"/>
            </div>
            <div class="col col-auto">
              <animated-placeholder height="36px" width="90px"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row h-25 align-content-center">
          <h3>
            <animated-placeholder height="36px" width="150px"/>
          </h3>
        </div>
        <div class="row h-25 align-content-center">
          <h5>
            <animated-placeholder height="36px" width="150px"/>
          </h5>
        </div>
        <div class="row h-25 align-content-center">
          <h5>
            <animated-placeholder height="36px" width="150px"/>
          </h5>
        </div>
      </div>
      <div class="col col-3 text-end">
        <animated-placeholder height="36px" width="90px"/>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <h2><animated-placeholder height="36px" width="150px"/></h2>
        <div class="row">
          <p><animated-placeholder height="36px" width="280px"/></p>
          <p><animated-placeholder height="36px" width="110px"/></p>
          <p><animated-placeholder height="36px" width="190px"/></p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
