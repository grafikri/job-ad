<template>
  <div>
    <VPosts @click="handleClick" :items="posts" />
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
      default: []
    },
    click: Function
  },
  methods: {
    handleClick(id) {
      this.$emit("click", id)
    }
  }
}
</script>

<style>
</style>