import mutations from './mutations'
import getters from './getters'
import counterModule from './counter-module'

export default {
  state: {
    count: 0
  },
  mutations,
  getters,
  modules: {
    counter: counterModule
  }
}
