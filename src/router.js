import Vue from "vue";
import BootstrapVue from "bootstrap-vue"; // added
import VueRouter from "vue-router";
import News from "@/views/News.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: News
    }
  ]
});

export default router;
