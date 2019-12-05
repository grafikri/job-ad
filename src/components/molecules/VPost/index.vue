<template>
  <div>
    <div>
      <b-card :title="position" :sub-title="jobTitle">
        <b-card-text>
          <em>card title</em> and make up the bulk of the card's
          content.
        </b-card-text>

        <b-card-text>A second paragraph of text in the card.</b-card-text>

        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>
      </b-card>
    </div>
  </div>
</template>

<script>

export default {
  name: "VPost",
  props: {
    position: String,
    jobTitle: String,
    companyName: String,
    durationDayText: String,
    country: String,
    city: String,
    town: String,
    addres: String

  }
}
</script>

<style>
</style>