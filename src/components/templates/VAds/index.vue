<template>
  <div>
    <VPosts :items="posts" />
  </div>
</template>

<script>

import VPosts from "../../organisms/VPosts/index.vue"

export default {
  name: "VAds",
  components: {
    VPosts
  },
  props: {
    posts: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style>
</style>