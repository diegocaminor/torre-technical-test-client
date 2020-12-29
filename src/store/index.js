import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import api from "@/assets/scripts/api.js";

export default new Vuex.Store({
  state: {
    matchedJobs: [],
    sizeMatchedJobs: 0,
    totalMatchedJobs: 0,
    existErrorMessage: false,
    errorMessage: "",
  },
  getters: {},
  mutations: {
    SET_MATCHED_JOBS(state, { results = [], size = 0, total = 0 }) {
      console.log("ENMTRANDO A MUTATIONS");
      state.matchedJobs = results;
      state.sizeMatchedJobs = size;
      state.totalMatchedJobs = total;
      state.existErrorMessage = false;
      state.errorMessage = "";
    },
    SET_ERROR_MESSAGE(state, payload) {
      state.matchedJobs = [];
      state.sizeMatchedJobs = 0;
      state.totalMatchedJobs = 0;
      state.existErrorMessage = true;
      state.errorMessage = payload;
    },
  },
  actions: {
    async getJobsBySkills({ commit }, { username }) {
      try {
        const res = await api.getJobsBySkills({ username });
        console.log("lallalalala");
        console.log(res);
        alert(res.message);
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
