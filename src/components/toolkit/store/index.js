import { createSlice, configureStore } from '@reduxjs/toolkit'
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
const userSlice = createSlice({
  name: "user",
  initialState: { isLoggedIn: false },
  reducers: {
    logIn(state) {
      state.isLoggedIn = true
    },
    logOut(state) {
      state.isLoggedIn = false
    }
  }
})
const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer, //reducer return function wich return  (state, action) from counterSlice
    userReducer: userSlice.reducer //reducer return (state, action) from counterSlice
  },
})
export const counterActions = counterSlice.actions // actions returnd object of functions from property reducers of counterSlice
export const userActions = userSlice.actions // actions returnd object of functions from property reducers of counterSlice
export default store