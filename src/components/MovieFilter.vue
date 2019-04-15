

<template>
  <div id="movie-filter">
    <h2>Filter results</h2>
    <div class="filter-group">
      <h3>By Time Of Day</h3>
      <check-filter
        category="time"
        v-bind:key="time.id"
        v-for="time in times"
        v-bind:title="time"
        v-on:check-filter="checkFilter"
      ></check-filter>
      <h3>By Genre</h3>
      <check-filter
        category="genre"
        v-bind:key="genre.id"
        v-for="genre in genres"
        v-bind:title="genre"
        v-on:check-filter="checkFilter"
      ></check-filter>
    </div>
  </div>
</template>

<script>
import genres from "../util/genres";
import CheckFilter from "./CheckFilter.vue";
import times from "../util/times.js";
export default {
  data() {
    return {
      genres,
      times
    };
  },
  methods: {
    checkFilter(category, title, checked) {
      this.$emit("check-filter", category, title, checked);
    }
  },
  components: {
    CheckFilter
  }
};
</script>