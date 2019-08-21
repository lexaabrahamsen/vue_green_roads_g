<template>
  <div class="container">
    <h1>All Rec Places</h1>
    <p>Search: <input type="text" v-model="searchTerm"></p>
    <div v-for="rec_place in filterBy(rec_places, searchTerm, 'name')">
    <h2>{{ rec_place.name }}</h2>
      <p>Pages: {{ rec_place.formatted_address }}</p>
    <h1>All Recycling Places</h1>
      <div v-for="rec_place in rec_places">
      <img v-bind:src="rec_place.url" v-bind:alt="rec_place.name" />
    <h2>{{ rec_place.name }}</h2>
      <p>Hours: {{ rec_place.opening_hours }}</p>
      </div>
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
      rec_places: [],
      searchTerm: "",
      opening_hours: "",
      name
    };
  },
  created: function() {
    // var location = {
    //   query: "recycling+places+chicago"
    // };
    axios.get("/api/rec_places?query=recycling+places+new+york+city").then(response => {
      this.rec_places = response.data.rec_places.results;
      console.log(response.data.rec_places.results);
    // axios.get("/api/rec_places", location).then(response => {
    //   this.rec_places = response.data;
    //   console.log(response);
    });
  },
  methods: {}
};
</script>