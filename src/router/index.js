import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

import VHome from "../components/templates/VHome/index"
import VAd from "../components/pages/VAd/index"
import VAds from "../components/pages/VAds/index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: VHome
  },
  {
    path: "/joblist",
    name: "joblist",
    component: VAds
  },
  {
    path: "/jobdetail/:id",
    name: "jobdetail",
    component: VAd
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
