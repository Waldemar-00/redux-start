import { createSlice, configureStore } from '@reduxjs/toolkit'
const initialState = { counter: 10, isVisibleCounter: true }
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    setVisibleCounter(state) {
      state.isVisibleCounter = !state.isVisibleCounter
    }
    }
  })
const store = configureStore({ reducer: counterSlice.reducer, })
export const  toolkitActions = counterSlice.actions
export default store