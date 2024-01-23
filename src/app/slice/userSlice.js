import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
      localStorage.removeItem("access_token");
    },
    checkUser: (state) => {
      if (state.value) {
        console.log(state.value);
        return true;
      }
      console.log(state.value);
      return false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logout, checkUser } = userSlice.actions;

export default userSlice.reducer;
