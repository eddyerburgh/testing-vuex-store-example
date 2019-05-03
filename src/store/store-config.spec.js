import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './store-config'
import { cloneDeep } from 'lodash'

test('increments count value when increment is commited', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  expect(store.getters['counter/count']).toBe(0)
  store.commit('counter/increment')
  expect(store.getters['counter/count']).toBe(1)
})

test('updates evenOrOdd getter when increment is commited', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  expect(store.getters['counter/evenOrOdd']).toBe('even')
  store.commit('counter/increment')
  expect(store.getters['counter/evenOrOdd']).toBe('odd')
})

test('modules include counterModule', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  expect(Object.keys(store.getters)).toContain('counter/evenOrOdd')
})
