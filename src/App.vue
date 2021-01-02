<template>
  <div id="app">
    <px-header/>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>




<script>
import PxHeader from "@/components/PxHeader.vue";
export default {
  components: {
    PxHeader
  },
}
</script>

<style>
</style>
