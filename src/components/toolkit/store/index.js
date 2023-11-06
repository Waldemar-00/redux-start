import { createSlice, configureStore } from '@reduxjs/toolkit'
const initialState = { counter: 10, isVisibleCounter: true }
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeCounter(state, action) {
      state.counter += action.payload
    },
    setVisibleCounter(state) {
      state.isVisibleCounter = !state.isVisibleCounter
    }
    }
  })
const store = configureStore({ reducer: counterSlice.reducer, })
export const  toolkitActions = counterSlice.actions
export default store