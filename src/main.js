import Vue from 'vue'
import Vuex from 'vuex'
import storeConfig from './store/store-config'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store(storeConfig)

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
