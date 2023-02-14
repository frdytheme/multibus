import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  status: false,
  name: "검색 전",
};

export const departTrml = createSlice({
  name: "trml",
  initialState,
  reducers: {
    setTrml: (state, action) => {
      state.data = action.payload;
      state.status = false;
      state.name = action.payload.terminalNm;
    },
    initTrml: (state) => {
      state.data = initialState.data;
      state.status = false;
      state.name = "";

    },
    changeDep: (state) => {
      state.status = true;
    },
  },
});

export default departTrml.reducer;
export const { setTrml, initTrml, changeDep } = departTrml.actions;
