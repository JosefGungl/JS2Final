<script>
export default {
  name: "logInSignUp"
}
</script>

<template>
  <div class="modal" id="logInModal" aria-hidden="true" aria-labelledby="logInModalLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Log In</h1>
          <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          log in form here
        </div>
        <div class="modal-footer">
          Dont have an account? Click
          <button class="btn" data-bs-target="#signUpModal" data-bs-toggle="modal">here</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal" id="signUpModal" aria-hidden="true" aria-labelledby="signUpModalLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Sign Up</h1>
          <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          sign up form here
        </div>
        <div class="modal-footer">
          Already have an account? Click
          <button class="btn" data-bs-target="#logInModal" data-bs-toggle="modal">here</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
