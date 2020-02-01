import axios from 'axios'

export const state = () => ({
  items: []
})

export const mutations = {
  setitems(state, items) {
    state.items = items
  }
}

export const actions = {
  async load_items({ commit }, url) {
    const { data } = await axios.get(url)
    commit('setitems', data.results)
  }
}
