import counterModule from './counter-module'

describe('counterModule/getters', () => {
  test('evenOrOdd returns even if state.count is even', () => {
    const state = {
      count: 2
    }
    expect(counterModule.getters.evenOrOdd(state)).toBe('even')
  })
  
  test('evenOrOdd returns odd if state.count is even', () => {
    const state = {
      count: 1
    }
    expect(counterModule.getters.evenOrOdd(state)).toBe('odd')
  })  
})

describe('counterModule/mutations', () => {
  test('increment increments state.count by 1', () => {
    const state = {
      count: 0
    }
    counterModule.mutations.increment(state)
    expect(state.count).toBe(1)
  })  
})

describe('counterModule/actions', () => {
  test('getCountFromServer commits setCount mutation', async () => {
    const commit = jest.fn()
    await counterModule.actions.getCountFromServer(commit)
    expect(commit).toHaveBeenCalledWith('setValue', 5)
  })
})