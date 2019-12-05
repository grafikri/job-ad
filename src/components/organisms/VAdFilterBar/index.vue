<template>
  <div class="v-o-ad-filter-bar">
    <b-form inline v-on:submit.prevent="onSubmit" action="#">
      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Konum"
        v-model="location"
      ></b-input>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="inline-form-input-username" placeholder="Pozisyon, ünvan" v-model="title"></b-input>
      </b-input-group>
      <b-button type="submit" variant="primary" :disabled="isDisabledSubmit">Listele</b-button>
      <b-button variant="danger" class="btn-reset" @click="formReset">Sıfırla</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "VAdFilterBar",
  data: () => {
    return {
      location: "",
      title: "",
      isDisabledSubmit: true
    }
  },
  props: {
    submit: Function,
    reset: Function
  },
  watch: {
    location(val) {
      this.isDisabledSubmit = val.length > 0 || this.title.length > 0 ? false : true
    },
    title(val) {
      this.isDisabledSubmit = val.length > 0 || this.location.length > 0 ? false : true
    },
  },
  methods: {
    onSubmit() {
      this.$emit("submit", {
        location: this.location,
        title: this.title
      })
    },
    formReset() {
      this.location = ""
      this.title = ""
      this.$emit("reset")
    }
  }
}
</script>

<style lang="sass" scoped>

  .v-o-ad-filter-bar
    padding: 10px
    background-color: $light
    border-bottom: 0.5px solid $secondary
    .btn-reset
      margin-left: 10px

</style>