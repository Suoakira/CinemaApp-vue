<template>
  <div id="day-select">
    <ul class="days">
      <li
        v-bind:class="{day: true, active: isActive(day)} "
        v-bind:key="day"
        v-on:click="selected = day"
        v-for="day in days"
      >{{ formatDay(day) }}</li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selected: this.$moment(),
      days: [0, 1, 2, 3, 4, 5, 6].map(num => this.$moment().add(num, "days"))
    };
  },
  methods: {
    formatDay(raw) {
      if (this.$moment()._d + "" !== raw._d + "") {
        return raw.format("ddd DD/MM");
      } else {
        return "Today";
      }
    },
    isActive(day) {
      return day.isSame(this.selected, "day");
    }
  }
};
</script>
