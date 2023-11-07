import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 10, isVisibleCounter: false },
  reducers: {
    changeCounter(state, action) {
      state.counter += action.payload
    },
    setVisibleCounter(state) {
      state.isVisibleCounter = !state.isVisibleCounter
    }
  }
})

export const counterActions = counterSlice.actions
export default counterSlice.reducer