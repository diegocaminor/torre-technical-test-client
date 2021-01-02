<template>
  <div class="about mt-5">
    <h1 class="title">Matchify</h1>
    <h2 class="subtitle">By Torre</h2>
    <p class="description">Find your genome in order to know what are your current skills!</p>
    <p class="description">If there's no company that fit with your skills you can change it via <a href="https://torre.co">Torre.co</a><br>
    You just have to write your Torre username and our system will take care of showing you the best positions that fit your skills</p>
    <b-form-input v-on:keyup="pressKey" type="text" id="username" name="username" v-model="username"
            :state="!existErrorMessage?null:!existErrorMessage" class="mb-3" placeholder="Torre's username"></b-form-input>
    <px-button @click.native='getBioByUsername' msg="Wanna know my skills!"></px-button>
    <b-row class="text-center">
      <b-col></b-col>
      <b-col cols="1">
        <bounce-loader
          :loading="isLoading"
          class="spinner-loader"
          color="#38686a"
          :size="100"
        />
      </b-col>
      <b-col></b-col>
    </b-row>

    <div v-if="!isLoading">
      <b-row class="mt-5" v-if="showGenome">
        <b-col cols="12">
          <h2 class="subtitle">You're a: {{genome.person.professionalHeadline}}</h2>
        </b-col>
        <b-col cols="12">
          <h2 class="subtitle">Your current skills are:</h2>
        </b-col>
        <ul class="text-center">
          <li  cols="12" md="6" lg="4"  v-for="strength in genome.strengths" :key="strength.id">{{strength.name}}</li>
        </ul>
      </b-row>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import PxButton from "@/components/PxButton.vue";

export default {
  name: "Genome",
  components: {
    PxButton
  },
  data() {
    return {
      username: '',
    }
  },
  computed: {
    ...mapState(['genome', 'showGenome', 'existErrorMessage', 'errorMessage', 'isLoading']),
  },
  methods: {
    pressKey(e) {
      if (e.keyCode === 13) {
        this.getBioByUsername();
      }
    },
    getBioByUsername() {
      if(this.username !== "") {
        this.$store.dispatch('getBioByUsername', {username: this.username})          .then(() => {
            if(!this.existErrorMessage) {
              this.$swal({
                icon: "success",
                title: "Successful",
                text: "Bio retrieved",
              });
            } else {
               this.$swal({
                icon: "error",
                title: "Oops...",
                text: "Username does not exist :(",
              });
            }
          })
      } else {
        this.$swal({
          icon: "info",
          title: "Please enter a username from Torre",
        });
      }
    },
  },

};
</script>

<style  scoped>
/* List */
ul {
  counter-reset: index;
  padding: 0;
  max-width: 300px;
  display: table;
  margin: 0 auto;
}

/* List element */
li {
  counter-increment: index;
  display: flex;
  align-items: center;
  padding: 12px 0;
  font-size: 20px;
  font-weight: 800;
  box-sizing: border-box;
}


/* Element counter */
li::before {
  content: counters(index, ".", decimal-leading-zero);
  font-size: 1.5rem;
  text-align: right;
  font-weight: bold;
  min-width: 50px;
  padding-right: 12px;
  font-variant-numeric: tabular-nums;
  align-self: flex-start;
  background-image: linear-gradient(to bottom, #fdb687, #DB4D22);
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


/* Element separation */
li + li {
  border-top: 1px solid rgba(255,255,255,0.2);
}

</style>