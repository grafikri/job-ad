import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import posts from "./modules/posts"

export default new Vuex.Store({
  state: {
    appName: "Everywhere is Ads"
  },
  mutations: {},
  actions: {},
  modules: {
    posts
  }
})
