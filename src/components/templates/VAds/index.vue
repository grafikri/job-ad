<template>
  <div>
    <VPosts :items="items" />
  </div>
</template>

<script>

import VPosts from "../../organisms/VPosts/index.vue"

export default {
  name: "VAds",
  components: {
    VPosts
  },
  data: () => {
    return {
      items: [
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