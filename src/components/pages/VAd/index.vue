<template>
  <div>
    <VAdTemplate :post="post" />
  </div>
</template>

<script>

import VAdTemplate from '../../templates/VAd/index'
import { mapState, mapGetters } from 'vuex'

export default {
  name: "VAd",
  components: {
    VAdTemplate
  },
  computed: {
    ...mapGetters({
      post: 'post/purePost'
    })
  }
}
</script>

<style>
</style>