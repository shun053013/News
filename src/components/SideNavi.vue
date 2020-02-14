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
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>東 俊輔</v-list-item-title>
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
import Login from "@/components/Login.vue";
export default {
  componnts: {
    Login
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "login", icon: "Login" ,link:{name:"home"}},
        { title: "News", icon: "News" ,link:{name:"about" }}
      ]
    };
  }
};
</script>
