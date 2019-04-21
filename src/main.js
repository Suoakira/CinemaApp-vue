import Vue from 'vue';
import './style.scss';

import VueResource from 'vue-resource';
Vue.use(VueResource)

import moment from "moment-timezone"
import uuid from "uuid"
moment.tz.setDefault("UTC")

Object.defineProperty(Vue.prototype, "$moment", {
  get() {
    return this.$root.moment
  }
})
Object.defineProperty(Vue.prototype, "$uuid", {
  get() {
    return this.$root.uuid
  }
})

import { checkFilter } from "./util/bus"
const bus = new Vue()
// global bus object makes it easier to pass props rather than going from so many componenets
Object.defineProperty(Vue.prototype, "$bus", {
  get() {
    return this.$root.bus
  }
})

import Routes from "./util/routes"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  data: {
    genre: [],
    time: [],
    movies: [],
    moment,
    uuid,
    bus,
    day: moment()
  },
  components: {

  },
  created() {
    this.$http.get("./api")
      .then(resp => this.movies = resp.data)
    this.$bus.$on("check-filter", checkFilter.bind(this))
  },
  router
});