import { legacy_createStore } from 'redux'
function reducer(state = { counter: 0, isVisibleCounter: false }, action) {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        counter: state.counter + action.payload,
      }
    case 'TOGGLE': 
      return {
        ...state,
        isVisibleCounter: state.isVisibleCounter = action.payload
      }
    default: return state
  }
}
const store = legacy_createStore(reducer)
export default store