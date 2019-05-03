const state = {
  count: 0
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  count: state => state.count
}

const mutations = {
  increment (state) {
    state.count++
  },
  setCount (state, value) {
    state.count = value
  }  
}

const actions = {
  getCountFromServer (commit) {
      return new Promise(resolve => {
        commit('setValue', 5)  
        resolve(5)
      })
  } 
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}