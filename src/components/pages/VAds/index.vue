<template>
  <div>
    <VAdsTemplate :posts="posts" />
  </div>
</template>

<script>

import VAdsTemplate from '../../templates/VAds/index.vue'

export default {
  name: "VAds",
  components: {
    VAdsTemplate
  },
  data: () => {
    return {
      posts: [
        {
          jobTitle: "Gerber",
          companyName: "Testoğlu Pide",
          duration: "Taze çıktı",
          distance: "8.53 yakınında",
          cityName: "İstanbul",
          town: "Çengelköy"
        },
        {
          jobTitle: "Gerber 2",
          companyName: "Testoğlu Pide",
          duration: "Taze çıktı",
          distance: "8.53 yakınında",
          cityName: "İstanbul",
          town: "Çengelköy"
        },

      ]
    }
  }
}
</script>

<style>
</style>