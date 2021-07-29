<template lang="pug">
  form
    h1.mb-5.text-center {{isUpdate ? "UPDATE" : "CREATE"}} TASK FORM
    .alert.alert-danger.text-center(v-if="validError") {{validError}}
    .mb-3
      label.form-label Task title
      input.form-control(type='text' v-model="form.title")
    .mb-3
      label.form-label Task description
      textarea.form-control(rows='5' v-model="form.description")
    .mb-3
      label.form-label Task priority
      input.form-control(type='text'  v-model="form.priority")
    .mb-3
      label.form-label Task deadline
      input.form-control(type='date'  v-model="form.deadline")
    button.btn(@click.prevent="submitForm" :class="{'btn-primary' : isUpdate, 'btn-success' : !isUpdate}") {{isUpdate ? "UPDATE" : "CREATE"}} TASK
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        text: ''
      },
      validError: ''
    }
  },
  methods: {
    async submitForm() {
      if (this.form.title.length >= 4 && this.form.description.length >= 4) {
        let res = this.isUpdate ? await this.$axios.put('/api/tasks/update', this.form) : await this.$axios.post('/api/tasks/new', this.form)
        if (res.status == 201 || res.status == 200) {
          this.$router.push(`/tasks/${res.data._id}`)
        } else {
          this.validError = res.data
        }
      } else {
        this.validError = 'Validation error'
      }      
    }
  },
  props: {
    isUpdate: {
      type: Boolean,
      default: false,
    }
  },
  created() {
    if (this.isUpdate) {
      this.$axios.get(`/api/tasks/${this.$route.params.id}`)
      .then(res => {
        if (res.status == 200) {
          this.form = res.data
        } else {
          this.$router.push('/?status=notfound')
        }
      }).catch(() => {
        this.$router.push('/?status=notfound')
      })
    }
  }
}
</script>