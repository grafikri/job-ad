<template>
  <div>
    <VAdTemplate :post="post" />
  </div>
</template>

<script>

import VAdTemplate from '../../templates/VAd/index'

export default {
  name: "VAd",
  components: {
    VAdTemplate
  },
  data: () => {
    return {
      post: {
        position: "Hello World",
        jobTitle: "Full Stack Developer"
      }
    }
  }
}
</script>

<style>
</style>