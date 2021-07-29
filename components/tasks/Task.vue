<template lang="pug">
  .card.text-center.shadow.bg-body.rounded
    .card-header {{task.title}}
    .card-body
      p.card-text {{ isDetails ? task.text : task.text.substring(0, 50)}}
      .actions
        nuxt-link(:to="'/tasks/'+task._id" class="btn btn-primary btn-sm" v-if="!isDetails") Read
        nuxt-link(:to="'/tasks/'+task._id + '/edit'" class="btn btn-warning btn-sm") Update
        button.btn.btn-danger.btn-sm(@click.prevent="deleteTask") Delete
    .card-footer.text-muted Created at
</template>

<script>
export default {
  methods: {
    async deleteTask() {
      let res = await this.$axios.delete('/api/tasks/delete', {data: {id: this.task._id}}, {})
      if (res.data !== null && res.status == 200) {
        this.isDetails ? this.$router.push('/') : this.$nuxt.refresh()
      } else {
        this.$router.push('/?status=deleteerror')
      }      
    }
  },
  props: {
    isDetails: {
      type: Boolean,
      default: false,
    },
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.btn{
  margin: 2px 2px 2px 2px;
}
</style>