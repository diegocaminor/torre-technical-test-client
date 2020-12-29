<template>
  <div class="home mt-5">
    <h1>Matchify</h1>
    <h3>By Torre</h3>
    <p>Matchify your next remote dream job!</p>
    <p>You just have to write your Torre username and our system will take care of showing you the best positions that fit your skills</p>
    <b-form-input v-on:keyup="pressKey" type="text" id="username" name="username" v-model="username"
            :state="!existErrorMessage" class="mb-3"></b-form-input>
    <b-button variant="primary" @click='getJobsBySkills'>Search!</b-button>

    <b-row class="mt-5">
      <b-col cols="12" md="6" lg="4" v-for="job in matchedJobs" :key="job.id">
        <px-card
          :title ="job.organizations[0].name"
          :imgSrc ="job.organizations[0].picture"
          :imgAlt ="job.organizations[0].name"
          :jobPosition ="job.objective"
          :jobType ="job.type"
        />
      </b-col>
    </b-row>

    <h1 v-if="existErrorMessage">{{errorMessage}}</h1>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import PxCard from "@/components/PxCard.vue";

export default {
  name: "Home",
  components: {
    PxCard
  },
  data() {
    return {
      username: '',
    }
  },
  computed: {
    ...mapState(['matchedJobs', 'existErrorMessage', 'errorMessage']),
  },
  methods: {
    pressKey(e) {
      if (e.keyCode === 13) {
        this.getJobsBySkills();
      }
    },
    getJobsBySkills() {
      if(this.username !== "") {
        this.$store.dispatch('getJobsBySkills', {username: this.username})
      } else {
        alert("Please enter a username from Torre");
      }
    },
  },

};
</script>
