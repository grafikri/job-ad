import data from "../../assets/fakeData/posts.json"

/**
 * This state is used to show post list
 */
const state = {
  posts: []
}

// post:[{
//   id: "1",
//   jobTitle: "Gerber",
//   companyName: "Testoğlu Pide",
//   duration: "Taze çıktı",
//   distance: "8.53 yakınında",
//   cityName: "İstanbul",
//   town: "Çengelköy"
// },
// {
//   id: "2",
//   jobTitle: "Gerber 2",
//   companyName: "Testoğlu Pide",
//   duration: "Taze çıktı",
//   distance: "8.53 yakınında",
//   cityName: "İstanbul",
//   town: "Çengelköy2"
// }]

const mutations = {
  addAll: (state, payload) => {
    state.posts = payload
  }
}

const getters = {
  allPosts: state => {
    return state.posts
  }
}

const actions = {
  fetchAll(context) {
    /**
     * Simulating to fetching data as if it comes from API
     */
    setTimeout(() => {
      context.commit("addAll", data)
    }, 1500)
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
