<template>
  <div>
    <VLink href="/joblist">
      <VButton value="Tüm ilanları listele" />
    </VLink>
  </div>
</template>

<script>

import VButton from '../../atoms/VButton/index'
import VLink from '../../atoms/VLink/index'

export default {
  name: "VHome",
  components: {
    VButton,
    VLink
  }
}
</script>

<style>
</style>