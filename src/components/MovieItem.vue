

<template>
  <div class="movie">
    <div class="movie-col-left">
      <img v-bind:src="movie.Poster">
    </div>
    <div class="movie-col-left">
      <div class="movie-title">
        <h2>{{ movie.Title }}</h2>
      </div>
      <span class="movie-rating">{{ movie.Rated }}</span>
      <div class="movie-sessions">
        <div
          v-bind:key="session.id"
          v-for="session in filteredSessions(sessions)"
        >{{ formatSessionTime(session.time) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie", "sessions", "day"],
  methods: {
    formatSessionTime(rawTime) {
      return this.$moment(rawTime).format("h:mm A");
    },
    filteredSessions(sessions) {
      return sessions.filter(session => {
        return this.$moment(session.time).isSame(this.day, "day");
      });
    }
  }
};
</script>
