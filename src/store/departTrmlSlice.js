import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  status: false,
};

export const departTrml = createSlice({
  name: "trml",
  initialState,
  reducers: {
    setTrml: (state, action) => {
      state.data = action.payload;
      state.status = false;
    },
    initTrml: (state) => {
      state.data = initialState.data;
      state.status = false;
    },
    changeDep: (state) => {
      state.status = true;
    },
  },
});

export default departTrml.reducer;
export const { setTrml, initTrml, changeDep } = departTrml.actions;
