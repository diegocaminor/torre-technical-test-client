<template>
  <div class="about mt-5">
    <h1>Matchify</h1>
    <h3>By Torre</h3>
    <p>Find your genome in order to know what are your current skills!</p>
    <p>If there's no company that fit with your skills you can change it via https://torre.co/</p>
    <p>You just have to write your Torre username and our system will take care of showing you the best positions that fit your skills</p>
    <b-form-input v-on:keyup="pressKey" type="text" id="username" name="username" v-model="username"
            :state="!existErrorMessage" class="mb-3"></b-form-input>
    <b-button variant="primary" @click='getBioByUsername'>Search Genome</b-button>

    <b-row class="mt-5" v-if="showGenome">
      <b-col cols="12">
        <h3>{{genome.person.professionalHeadline}}</h3>
      </b-col>
      <b-col cols="12" md="6" lg="4" v-for="strength in genome.strengths" :key="strength.id">
        <p>{{strength.name}}</p>
      </b-col>
        

    </b-row>
  </div>
</template>


<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: "Genome",
  components: {
  },
  data() {
    return {
      username: '',
    }
  },
  computed: {
    ...mapState(['genome', 'showGenome', 'existErrorMessage', 'errorMessage']),
  },
  methods: {
    pressKey(e) {
      if (e.keyCode === 13) {
        this.getBioByUsername();
      }
    },
    getBioByUsername() {
      if(this.username !== "") {
        this.$store.dispatch('getBioByUsername', {username: this.username})
      } else {
        alert("Please enter a username from Torre");
      }
    },
  },

};
</script>
