/**
 * data is represented API response
 */
import data from "../../assets/fakeData/posts.json"

/**
 * This state is used to show post list
 */
const state = {
  posts: []
}

const mutations = {
  addAll: (state, payload) => {
    state.posts = payload
  }
}

const getters = {
  allPosts: state => {
    return state.posts.map(item => ({
      id: item.jobId,
      jobTitle: item.positionName,
      companyName: item.companyName,
      duration: item.durationDayText,
      distance: item.distance,
      cityName: item.cityName,
      town: item.townName
    }))
  }
}

const actions = {
  fetchAll(context) {
    /**
     * Simulating to fetching data as if it comes from API
     */
    setTimeout(() => {
      context.commit("addAll", data.result.items)
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
