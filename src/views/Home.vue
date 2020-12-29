<template>
  <div class="home">
    <h1>Matchifyyy</h1>
    <h3>By Torre</h3>
    <p>Matchify your next remote dream job!</p>
    <input v-on:keyup="pressKey" type="text" id="username" name="username" v-model="username"><br><br>
    <button @click='getJobsBySkills'>Search!</button>
    
    <ul id="example-1">
      <li v-for="job in matchedJobs" :key="job.id">
        {{ job.objective }}
      </li>
    </ul>
    <h1 v-if="existErrorMessage">{{errorMessage}}</h1>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: "Home",
  components: {
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
