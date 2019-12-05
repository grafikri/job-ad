<template>
  <div class="v-o-posts">
    <ul class="list-unstyled">
      <b-media @click="handleClick(item.id)" tag="li" :key="index" v-for="(item, index) in items">
        <template v-slot:aside>
          <b-img :src="item.imageUrl" width="64" alt="placeholder"></b-img>
        </template>
        <h5 class="mt-0 mb-1">{{item.jobTitle}}</h5>
        <h6 class="mt-0 mb-1">{{item.companyName}}</h6>
        <p class="mb-0">{{item.cityName}}</p>
        <p class="mb-0">Tarih: {{item.duration}}</p>
      </b-media>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Posts",
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },
    click: Function
  },
  methods: {
    handleClick(id) {
      this.$emit("click", id)
    }
  }
}
</script>

<style lang="sass" scoped>
  .v-o-posts
    ul
      li
        margin-bottom: 10px
        padding: 10px
        &:hover
          background-color: $light
          cursor: pointer
          

</style>
