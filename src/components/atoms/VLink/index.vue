<template>
  <router-link :to="href">
    <slot></slot>
  </router-link>
</template>

<script>

export default {
  name: "VLink",
  props: {
    href: {
      type: String,
      default: "#"
    }
  }
}
</script>

<style>
</style>