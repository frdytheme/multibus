import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  status: false,
};

export const arrivalTrml = createSlice({
  name: "trml",
  initialState,
  reducers: {
    setArrTrml: (state, action) => {
      state.data = action.payload;
      state.status = false;
    },
    initArrTrml: (state) => {
      state.data = initialState.data;
      state.status = false;
    },
    changeArr: (state) => {
      state.status = true;
    },
  },
});

export default arrivalTrml.reducer;
export const { setArrTrml, initArrTrml, changeArr } = arrivalTrml.actions;
