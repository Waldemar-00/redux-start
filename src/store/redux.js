import { legacy_createStore } from 'redux'
function reducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      }
    case 'decrement': 
      return {
        counter: state.counter - 1
      }
    default: return state
  }
}
const store = legacy_createStore(reducer)
export default store
// function output() {
  // console.log(store.getState())
// }
// store.subscribe(output)
// store.dispatch({type: 'increment'})
// store.dispatch({type: 'increment'})
// store.dispatch({type: 'increment'})
// store.dispatch({type: 'decrement'})