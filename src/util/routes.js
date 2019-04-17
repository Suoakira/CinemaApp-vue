import Overview from "../components/Overview.vue"
import Detail from "../components/Detail.vue"

export default [
    { path: "/", component: Overview, name: "home" },
    { path: "/movie:id", component: Detail, name: "movie" },
    // if they enter any other page redirect to the home page
    { path: "*", redirect: { name: "home" } }
]