<template>
  <b-button variant="primary">{{value}}</b-button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    value: {
      type: String,
      default: "Button"
    }
  }
}
</script>

<style>
</style>