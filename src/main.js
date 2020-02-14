import router from "./router.js";
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store/store.js";


Vue.config.productionTip = false;



new Vue({
  el: "#app",
  render: h => h(App),
  vuetify,
  router,
  store
})
