<template>
  <div>
    <VAdFilterBar @submit="handleSubmit" @reset="handleReset" />
    <VPosts @click="handleClick" :items="posts" />
  </div>
</template>

<script>

import VPosts from "../../organisms/VPosts/index.vue"
import VAdFilterBar from "../../organisms/VAdFilterBar/index.vue"

export default {
  name: "VAds",
  components: {
    VPosts,
    VAdFilterBar
  },
  props: {
    posts: {
      type: Array,
      default: []
    },
    click: Function,
    submit: Function
  },
  methods: {
    handleClick(id) {
      this.$emit("click", id)
    },
    handleSubmit(payload) {
      this.$emit("submit", payload)
    },
    handleReset() {
      this.$emit("reset")
    }
  }
}
</script>

<style>
</style>