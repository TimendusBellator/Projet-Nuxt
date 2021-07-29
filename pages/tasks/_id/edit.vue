<template lang="pug">
  .container.mt-5.mb-5
    .row
      .col-md-6.mx-auto
        TaskForm(:is-update="true")
</template>

<script>
export default {
  head() {
    return {
      title: 'Edit Task',
      meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'You can edit an task from this page'
      }
    ],
    }
  }
}
</script>