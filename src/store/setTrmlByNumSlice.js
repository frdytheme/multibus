import { createSlice } from "@reduxjs/toolkit";

const setTrmlByNum = createSlice({
  name: "setTrmlNum",
  initialState: {
    num: "all",
  },
  reducers: {
    setTrmlNum: (state, action) => {
      state.num = action.payload;
    },
    initTrmlNum: (state) => {
      state.num = "all";
    },
  },
});

export const { setTrmlNum, initTrmlNum } = setTrmlByNum.actions;
export default setTrmlByNum.reducer;
