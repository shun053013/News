<template>
  <v-app >
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>VueNews</v-toolbar-title>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
       

  
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <router-view />
    <SideNavi />
    </v-content>

  </v-app>
</template>

<script>
import SideNavi from "./components/SideNavi";
import {mapActions} from 'vuex'
import firebase from 'firebase'


export default {
  name: "App",
  components: {
    SideNavi
  },
  created(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.setLoginUser(user)
        if (this.$router.currentRoute.name === 'login') {
          this.$router.push({ name: 'home' }, () => {})
        }
      } else {
        this.deleteLoginUser()
        this.$router.push({ name: 'login' }, () => {})
      }
      
    })
  },
  

  data: () => ({

  }),

 methods:{
   ...mapActions(['toggleSideMenu','setLoginUser'])
 }
};
</script>

