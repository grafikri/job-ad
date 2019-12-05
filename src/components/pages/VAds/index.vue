<template>
  <div>
    <VAdsTemplate :posts="posts" />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import VAdsTemplate from '../../templates/VAds/index.vue'

export default {
  name: "VAds",
  components: {
    VAdsTemplate
  },
  computed: {
    ...mapGetters({
      posts: 'posts/allPosts'
    })
  },
}
</script>

<style>
</style>