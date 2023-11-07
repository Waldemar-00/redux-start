import { createSlice } from '@reduxjs/toolkit'
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

export const userActions = userSlice.actions
export default userSlice.reducer