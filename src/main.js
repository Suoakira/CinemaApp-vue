import vue from "vue";


import "./style.scss";

import genres from "./util/genres";

new vue({
  el: "#app",
  data: {
    genre: [],
    time: []
  },
  methods: {
    checkFilter(cat, title, checked) {
      if (checked) {
        this[cat].push(title)
      } else {
        let index = this[cat].indexOf(title)
        if (index > -1) {
          this[cat].splice(index, 1)
        }
      }
      console.log("top-level", cat, title, checked)
    }
  },
  components: {
    "movie-list": {
      template: `<div id="movie-list">
                            <div v-for="movie in movies" class="movie">
                                {{ movie.title }}
                            </div>
                        </div>`,
      data() {
        return {
          movies: [{ title: "hulk" }, { title: "JP" }, { title: "movie3" }]
        };
      }
    },
  
    "movie-filter": {
      data() {
        return {
          genres
        }
      },
      template: `<div id="movie-filter">
                            <h2>Movie Filter</h2>
                            <div class="filter-group">
                                <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check-filter="checkFilter"> </check-filter>
                            </div>
                        </div>`,
      methods: {
        checkFilter(cat, title, checked) {
          console.log("2cnd-level", cat, title, checked)
          this.$emit("check-filter", cat, title, checked)
        }
      },
      components: {
        "check-filter": {
          data() {
            return {
              checked: false
            }
          },
          props: [`title`],
          template: `
                <div v-bind:class="{ 'check-filter': true, active: checked }" v-on:click="() => checkFilter()">
                        <span class="checkbox"></span>
                        <span class="check-filter-title"> {{ title }}</span>
                </div>`,
          methods: {
            checkFilter() {
              this.checked = !this.checked
              this.$emit("check-filter", "genre", this.title, this.checked)
            }
 
          }
        }
      }
    }
  }
});
