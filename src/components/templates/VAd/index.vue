<template>
  <div>
    <VPost v-bind="post" />
  </div>
</template>

<script>

import VPost from '../../molecules/VPost/index'

export default {
  name: "VAd",
  components: {
    VPost
  },
  props: {
    post: Object
  }
}
</script>

<style>
</style>