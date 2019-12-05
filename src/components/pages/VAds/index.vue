<template>
  <div>
    <VAdsTemplate @click="click" :posts="posts" />
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
  methods: {
    click(id) {
      this.$router.push({ name: "jobdetail", params: { id: id } })
    }
  },
  mounted() {
    /**
     * fetching all posts from API asynchronously
     */
    this.$store.dispatch("posts/fetchAll")
  }
}
</script>

<style>
</style>