import { legacy_createStore } from 'redux'
function reducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        counter: state.counter + action.payload
      }
    default: return state
  }
}
const store = legacy_createStore(reducer)
export default store