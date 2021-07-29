<template lang="pug">
  .container.mt-5.mb-5
    .row
      .col-md-12
        Task(:isDetails="true" :task="task")
</template>

<script>
export default {
  asyncData({$axios, params, redirect}) {
    return $axios.get(`/api/tasks/${params.id}`)
    .then(res => {
      if (res.status == 200) {
        return { task: res.data }
      } else{
        throw new Error
      }
    }).catch(() => {
      redirect('/?status=notfound')
    })
  },
  head() {
    return {
      title: this.task.title,
      meta: [
      {
        hid: 'description',
        name: 'description',
        content: this.task.description
      }
    ],
    }
  }
}
</script>