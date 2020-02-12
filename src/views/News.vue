<template>
  <div class="container" >
    <h1 class="text-center">VueNews</h1>

    <h5 class="text">Filter by Category</h5>
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
    </form>

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

const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "fnjl2hJ7geAGq5FWQpoCAlRU5KC195Mv";

function buildUrl(url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey;
}
const SECTIONS =
  "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world";

export default {
  
  data() {
    return {
      posts: [],
      sections: SECTIONS.split(", "),
      section: "home"
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
    getPosts(section) {
      let url = buildUrl(section);
      axios
        .get(url)
        .then(response => {
          this.posts = response.data.results;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};


</script>

<style> 
.card-img-top {
  text-align: "center";
}
.image {
  width: 275px;
}
.texr-center {
  left: 50px;
}
body{
   background-color: #FFE4B5;
}
</style>
