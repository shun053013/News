import router from "./router.js";
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store/store.js";
import firebase from 'firebase'

Vue.config.productionTip = false;


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAYNqOHAJjeoxyF3TrwpRu_vofbegQVvfM",
  authDomain: "news2-6ed6a.firebaseapp.com",
  databaseURL: "https://news2-6ed6a.firebaseio.com",
  projectId: "news2-6ed6a",
  storageBucket: "news2-6ed6a.appspot.com",
  messagingSenderId: "532608517354",
  appId: "1:532608517354:web:4dfde324eb606665db8393",
  measurementId: "G-Z20L3BMXMD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  el: "#app",
  render: h => h(App),
  vuetify,
  router,
  store
})
