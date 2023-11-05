import { legacy_createStore } from 'redux'
function reducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
    case 'DECREMENT': 
      return {
        counter: state.counter - 1
      }
    case 'MORE_THEN_ONE': 
      return {
        counter: state.counter + action.payload
      }
    default: return state
  }
}
const store = legacy_createStore(reducer)
export default store