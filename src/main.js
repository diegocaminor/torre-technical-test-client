import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { VueSpinners } from "@saeris/vue-spinners";
import { salaryFilter, capitalizeFilter } from "@/assets/scripts/filters";
import "@/assets/styles/style.css";

const optionsSwal = {
  confirmButtonColor: "#38686a",
  cancelButtonColor: "#ff7674",
};

Vue.filter("salary", salaryFilter);
Vue.filter("capitalize", capitalizeFilter);

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2, optionsSwal);
Vue.use(VueSpinners);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
