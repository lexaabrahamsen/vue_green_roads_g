<template>
  <div class="home">
    <h1>Recycling Centers</h1>
    <div v-for="rec_place in rec_places">
      <img v-bind:src="rec_place.url" v-bind:alt="rec_place.name" />
      <h2>{{ rec_place.name }}</h2>
      <p>Body: {{ rec_place.body }}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "change.js!",
      rec_places: [],
      searchTerm: ""
    };
  },
  created: function() {
    axios.get("/api/rec_places").then(response => {
      this.rec_places = response.data;
      console.log(response.data);
    });
  },
  methods: {
    // axios.post("/api/rec_places", params).then(response => {
    //   this.rec_places.push(response.data);
    //   this.newPostname = "";
    //   this.newPostId = "";
    //   this.newPostBody = "";
    // });
    // }
  }
};
</script>