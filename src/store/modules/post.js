/**
 * data is represented API response
 */
import data from "../../assets/fakeData/posts.json"

/**
 * This state is used to show post detail
 */
const state = {
  post: {}
}

const getters = {
  purePost: state => {
    return {
      jobTitle: state.post.positionName,
      company: state.post.companyName
    }
  }
}

const mutations = {
  updateAll(state, payload) {
    state.post = payload
  }
}

const actions = {
  fetchPost({ commit, state }, payload) {
    let post = data.result.items
      .filter(item => item.jobId == payload.id)
      .shift()
    commit("updateAll", post)
  }
}

export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state
}
