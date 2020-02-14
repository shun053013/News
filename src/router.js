import Vue from "vue";
import BootstrapVue from "bootstrap-vue"; // added
import VueRouter from "vue-router";
import News from "@/views/News.vue";
import Login from "@/components/Login.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name:"home",
      component: News
    },{
      path:"/login",
      name:"login",
      component: Login
    }
  ]
});

export default router;
