<template>
  <div>
    <VAdsTemplate @reset="handleReset" @submit="handleSubmit" @click="click" :posts="posts" />
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'
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
    },
    handleSubmit(payload) {
      this.$store.commit("posts/foundAd", payload)
    },
    handleReset() {
      this.$store.dispatch("posts/fetchAll")
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