import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import api from "@/assets/scripts/api.js";

export default new Vuex.Store({
  state: {
    showGenome: false,
    genome: {},
    matchedJobs: [],
    sizeMatchedJobs: 0,
    totalMatchedJobs: 0,
    existErrorMessage: false,
    errorMessage: "",
    isLoading: false,
  },
  getters: {},
  mutations: {
    SET_GENOME_BY_USERNAME(state, payload) {
      state.genome = payload;
      state.showGenome = true;
      state.isLoading = false;
    },
    SET_MATCHED_JOBS(state, { results = [], size = 0, total = 0 }) {
      state.matchedJobs = results;
      state.sizeMatchedJobs = size;
      state.totalMatchedJobs = total;
      state.existErrorMessage = false;
      state.errorMessage = "";
      state.isLoading = false;
    },
    SET_ERROR_MESSAGE(state, payload) {
      state.genome = {};
      state.matchedJobs = [];
      state.sizeMatchedJobs = 0;
      state.totalMatchedJobs = 0;
      state.existErrorMessage = true;
      state.showGenome = false;
      state.errorMessage = payload;
      state.isLoading = false;
    },
  },
  actions: {
    async getBioByUsername({ commit, state }, { username }) {
      try {
        state.isLoading = true;
        const res = await api.getBioByUsername({ username });
        if (res.data) {
          commit("SET_GENOME_BY_USERNAME", res.data);
        } else {
          commit("SET_ERROR_MESSAGE", res.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getJobsBySkills({ commit, state }, { username }) {
      try {
        state.isLoading = true;
        const res = await api.getJobsBySkills({ username });
        if (res.data) {
          commit("SET_MATCHED_JOBS", res.data);
        } else {
          commit("SET_ERROR_MESSAGE", res.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
