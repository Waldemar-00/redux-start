import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from './counter'
import userSliceReducer from './logged'
const store = configureStore({
  reducer: {
    counterReducer: counterSliceReducer, //reducer return function wich return  (state, action) from counterSlice
    userReducer: userSliceReducer //reducer return (state, action) from counterSlice
  },
})
export default store