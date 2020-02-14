<template>
  <div class="container" id="app">
    <Header />
    <SearchByCategory v-on:category-event="searchByCategory"></SearchByCategory>
    <SideNavi></SideNavi>

    <!-- <h5 class="text">Filter by Category</h5>
    <form>
      <div class="row">
        <div class="large-6 columns">
          <div class="form-group">
          <select v-model="section" class="form-control" id="exampleFormControlSelect1">
            <option v-for="section in sections" :key="section">{{
              section
            }}</option>
          </select>
          </div>
        </div>
        <div class="medium-6 columns">
          <button @click="getPosts(section)" class="btn btn-primary">
            Retrieve</button
          ><br /><br />
        </div>
      </div>
    </form> -->

    <div class="container">
      <div class="row row-cols-4">
        <div
          class="card"
          style="width: 18rem;"
          v-for="(post, i) in posts"
          :key="i"
        >
          <div class="card-img-top">
            <a :href="post.url" target="_blank">
              <img :src="post.multimedia[3].url" class="image" />
            </a>
          </div>
          <div class="col">
            <div class="card-header">
              {{ post.title }}
            </div>
            <div class="card-body">
              <p>{{ post.abstract }}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import SearchByCategory from "@/components/SearchByCategory.vue";
import SideNavi from "@/components/SideNavi.vue";

const BaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "fnjl2hJ7geAGq5FWQpoCAlRU5KC195Mv";

function buildUrl(url) {
  return BaseUrl + url + ".json?api-key=" + ApiKey;
}
// const SECTIONS =
//   "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world";

export default {
  
  components: {
    Header,
    SearchByCategory,
    SideNavi
  },

  data() {
    return {
      posts: [],
      // sections: SECTIONS.split(", "),
      section: ""
    };
  },
  mounted() {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=fnjl2hJ7geAGq5FWQpoCAlRU5KC195Mv"
      )
      .then(response => {
        this.posts = response.data.results;
      });
  },
  methods: {
    searchByCategory(section) {
      let url = buildUrl(section);
      console.log(url)
      axios
        .get(url)
        .then(response => {
          this.posts = response.data.results;
        })
        .catch(error => {
          console.log(error);
        });
        console.log(this.posts)
    }
    
  }
};
</script>

<style scope>

.v-content__wrap{
  background: #304352; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #d7d2cc,
    #304352
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #d7d2cc,
    #304352
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}


.card-img-top {
  text-align: "center";
}
.image {
  width: 275px;
}
.texr-center {
  left: 50px;
}


</style>


