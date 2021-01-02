<template>
  <div class="home mt-5">
    <h1 class="title">Matchify</h1>
    <h2  class="subtitle">By Torre</h2>
    <p class="description">Matchify your next remote dream job! <br>
    You just have to write your Torre username and our system will take care of showing you the best positions that fit your skills</p>
    <b-form-input v-on:keyup="pressKey" type="text" id="username" name="username" v-model="username"
              :state="!existErrorMessage?null:!existErrorMessage" class="mb-3" placeholder="Torre's username"></b-form-input>
    <b-form inline>
      <b-input-group class="amount" size="lg" prepend="$" append=".00">
        <b-form-input type="number" v-model="compensation.minAmount"  placeholder="Min amount"></b-form-input>
      </b-input-group>
      <b-input-group class="amount" size="lg" prepend="$" append=".00">
        <b-form-input type="number" v-model="compensation.maxAmount" placeholder="Max amount"></b-form-input>
      </b-input-group>
      <b-dropdown id="dropdown-1" :text="compensation.periodicity" class="m-md-2">
        <b-dropdown-item v-for="option in periodicity"
                          :key="option"
                          :value="option"
                          @click="compensation.periodicity = option">
          {{option | capitalize}}
        </b-dropdown-item>
      </b-dropdown>
    </b-form>
    <px-button @click.native='getJobsBySkills' msg="I feel lucky!"></px-button>
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

    <b-row class="mt-5" v-if="!isLoading">
      <b-col cols="12" md="6" lg="4" v-for="job in matchedJobs" :key="job.id">
        <px-card
          :title = "job.organizations[0].name"
          :imgSrc = "job.organizations[0].picture"
          :imgAlt = "job.organizations[0].name"
          :jobPosition = "job.objective"
          :jobType = "job.type"
          :compensation = "job.compensation? job.compensation : null"
          :isRemote = "job.remote"
          :status = "job.status"
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
import PxButton from "@/components/PxButton.vue";

export default {
  name: "Home",
  components: {
    PxCard,
    PxButton
  },
  data() {
    return {
      username: '',
      periodicity: ["hourly", "monthly", "yearly"],
      compensation: {
        periodicity: "Select a periodicity",
        minAmount: 0,
        maxAmount: 0
      }
    }
  },
  computed: {
    ...mapState(['matchedJobs', 'existErrorMessage', 'errorMessage', 'isLoading']),
  },
  methods: {
    pressKey(e) {
      if (e.keyCode === 13) {
        this.getJobsBySkills();
      }
    },
    getJobsBySkills() {
      if(this.compensation.periodicity === "Select a periodicity") {
        this.compensation.periodicity = "";
      }
      if((this.compensation.minAmount != "" || this.compensation.minAmount != "") && !this.periodicity.includes(this.compensation.periodicity)) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "If you enter min amount or max amount, you must select a periodicity",
        });
        return;
      }
      if(this.compensation.minAmount != "") {
        this.compensation.minAmount = parseInt(this.compensation.minAmount);
      }
      if(this.compensation.maxAmount != "") {
        this.compensation.maxAmount = parseInt(this.compensation.maxAmount);
      }
      if(this.username !== "") {
        this.$store.dispatch('getJobsBySkills', {username: this.username, compensation: this.compensation})
          .then(() => {
            if(!this.existErrorMessage) {
              this.$swal({
                icon: "success",
                title: "Successful",
                text: "Matched jobs found",
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
          title: "Oops...",
          text: "Please enter a Torre's username",
        });
      }
    },
  },

};
</script>
