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
  },
  mounted() {
    /**
     * fetching related post from API asynchronously
     */
    this.$store.dispatch("post/fetchPost", {
      id: this.$route.params.id
    })
  }
}
</script>

<style>
</style>