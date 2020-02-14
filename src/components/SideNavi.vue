<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <!-- <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn> -->
    </v-row>

    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <img v-if="photoURL" :src="photoURL">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{userName}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
 
  data() {
    return {
      drawer: null,
      items: [
        { title: "login", icon: "Login" ,link:{name:"login"}},
        { title: "News", icon: "News" ,link:{name:"home" }}
      ]
    }
  },
  computed:{
    ...mapGetters(['userName','photoURL'])
  }
};
</script>
