/**
 * This state is used to show post list
 */
const state = {
  posts: [
    {
      id: "1",
      jobTitle: "Gerber",
      companyName: "Testoğlu Pide",
      duration: "Taze çıktı",
      distance: "8.53 yakınında",
      cityName: "İstanbul",
      town: "Çengelköy"
    },
    {
      id: "2",
      jobTitle: "Gerber 2",
      companyName: "Testoğlu Pide",
      duration: "Taze çıktı",
      distance: "8.53 yakınında",
      cityName: "İstanbul",
      town: "Çengelköy"
    }
  ]
}

const getters = {
  allPosts: state => {
    return state.posts
  }
}

export default {
  namespaced: true,
  getters,
  state
}
