<script setup>
defineProps(['entryType'])
defineEmits({'newEntry': Object})



let title = '', info = ''




</script>

<template>

  <div class="modal" tabindex="-1" id="newEntryModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New {{ entryType }} Entry</h5>
          <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="entryTitle" class="form-label">{{ entryType }} Title</label>
            <input type="text" class="form-control" id="entryTitle">
          </div>
          <div class="mb-3">
            <label for="entryInfo" class="form-label">{{ entryType }} Info</label>
            <textarea id="entryInfo" class="form-control" rows="2"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" @click="$emit('newEntry', {title: title, info: info})" data-bs-target="#goalsModal" data-bs-toggle="modal">Save</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
