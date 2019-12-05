/**
 * data is represented API response
 */
import data from "../../assets/fakeData/posts.json"

import { lowerTurkishCharToUtf8 } from "../../helpers"

/**
 * This state is used to show post list
 */
const state = {
  posts: []
}

const mutations = {
  addAll: (state, payload) => {
    state.posts = payload
  },
  foundAd: (state, payload) => {
    let location = lowerTurkishCharToUtf8(
      payload.location.toLocaleLowerCase("tr-TR").trim()
    )

    let title = lowerTurkishCharToUtf8(
      payload.title.toLocaleLowerCase("tr-TR").trim()
    )

    let allPosts = [...data.result.items]

    let modifiedPosts = []
    for (let index in allPosts) {
      let item = { ...allPosts[index] }
      item.positionName = lowerTurkishCharToUtf8(
        item.positionName.toLocaleLowerCase("tr-TR")
      )
      item.companyName = lowerTurkishCharToUtf8(
        item.companyName.toLocaleLowerCase("tr-TR")
      )
      item.townName = lowerTurkishCharToUtf8(
        item.townName.toLocaleLowerCase("tr-TR")
      )
      item.cityName = lowerTurkishCharToUtf8(
        item.cityName.toLocaleLowerCase("tr-TR")
      )
      modifiedPosts.push(item)
    }

    let foundPosts = []
    for (let index in modifiedPosts) {
      let item = modifiedPosts[index]

      if (location != "") {
        if (item.cityName.indexOf(location) !== -1) {
          foundPosts.push(item)
          continue
        }
      }

      if (title != "") {
        if (item.positionName.indexOf(title) !== -1) {
          foundPosts.push(item)
          continue
        }

        if (item.companyName.indexOf(title) !== -1) {
          foundPosts.push(item)
          continue
        }

        if (item.townName.indexOf(title) !== -1) {
          foundPosts.push(item)
          continue
        }
      }
    }

    let foundIds = foundPosts.map(item => item.jobId)
    let filteredPosts = []
    for (let index in foundIds) {
      let id = foundIds[index]
      for (let key in data.result.items) {
        let item = data.result.items[key]
        if (item.jobId == id) {
          filteredPosts.push(item)
          continue
        }
      }
    }

    state.posts = filteredPosts
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
    }, 0)
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
