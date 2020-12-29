<template>
  <div>
    <b-card
        :title="title"
        :img-src="imgSrc"
        :img-alt="imgAlt"
        img-height="200"
        img-width="200"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Job position: {{ jobPosition }}
          Type: {{ jobType }}
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
  </div>
</template>

<script>
export default {
  name: "PxCard",
  props: {
    title: String,
    imgSrc: String,
    imgAlt: String,
    jobPosition: String,
    jobType: String,
  },
}
</script>

<style>

</style>