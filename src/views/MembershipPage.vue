<script>
import Navbar from "@/components/navbar.vue";

export default {
  name: "MembershipPage",
  components: {Navbar}
}
</script>

<template>
  <navbar></navbar>
  <div class="p-5">
    <h1>Membership</h1>
    <br>
    <h3>Silver</h3>
    <ul>
      <li>Access hours: Mon/Wed/Fri 8am - 12pm</li>
      <li>One-time enrollment fee: $99 ($159 for couples, $199 for families)</li>
      <li>$39/ month ($20 off each additional family member)</li>
    </ul>

    <h3>Gold</h3>
    <ul>
      <li>Access hours: 24/7!</li>
      <li>One-time enrollment fee: $99 ($159 for couples, $199 for families)</li>
      <li>$49/ month ($20 off each additional family member)</li>
    </ul>

    <h3 style="white-space: pre-wrap">Membership Freeze Option</h3>
    <p>📅 Need to take a break? Think you won’t use your membership during the nice weather months?</p>
    <p>We will freeze your membership for up to two months
      (within a 12-month period) by your request. If you have any questions, <br>our staff is happy to help!
      If you have any questions, please send us an email, Facebook/Instagram message us, or give us a call during our staffed hours
    </p>
  </div>

</template>

<style scoped>

</style>
