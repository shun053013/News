<template>
  <div>
    <h5 class="text">Filter by Category</h5>
    <form>
      <div class="row">
        <div class="large-6 columns">
          <div class="form-group">
            <select
              v-model="section"
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option v-for="section in sections" :key="section">{{
                section
              }}</option>
            </select>
          </div>
        </div>
        <div class="medium-6 columns">
          <button @click.prevent="getPost(section)" class="btn btn-primary">
            Retrieve</button
          ><br /><br />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import axios from "axios";

// function buildUrl(url) {
//   return BaseUrl + url + ".json?api-key=" + ApiKey;
// }

// const BaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
// const ApiKey = "fnjl2hJ7geAGq5FWQpoCAlRU5KC195Mv";

const SECTIONS =
  "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world";

export default {
  data() {
    return {
      sections: SECTIONS.split(", "),
      section:""
    };
  },
//   mounted() {
//     axios
//       .get(
//         "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=fnjl2hJ7geAGq5FWQpoCAlRU5KC195Mv"
//       )
//       .then(response => {
//         this.posts = response.data.results;
//       });
//   },
  methods: {
      getPost(section){
          console.log(section);
          this.$emit('category-event',this.section)
      }
    // getPost(section){
    //     let url = buildUrl(section);
    //     axios
    //       .get(url)
    //       .then(response => {
    //         this.posts = response.data.results;
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    // }

  }
  
};
</script>
