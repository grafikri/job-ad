import Vue from "vue"
import VueRouter from "vue-router"

import VHome from "../components/pages/VHome/index"
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
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
