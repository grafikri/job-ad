<template>
  <div>
    <div>
      <b-card :title="jobTitle" :sub-title="company">
        <b-card-text>
          <em>{{country}}</em>
          {{city}} / {{town}}
        </b-card-text>

        <p class="mb-0">Mesafe: {{distance}}</p>
        <p class="mb-0">{{desc}}</p>
        <p class="mb-0">{{phone}}</p>
      </b-card>
    </div>
  </div>
</template>

<script>

export default {
  name: "VPost",
  props: {
    jobTitle: String,
    company: String,
    durationDayText: String,
    country: String,
    city: String,
    town: String,
    distance: String,
    desc: String,
    phone: String
  }
}
</script>

<style>
</style>