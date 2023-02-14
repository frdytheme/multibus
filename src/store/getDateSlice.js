import { createSlice } from "@reduxjs/toolkit";
import {
  currnetDepTime,
  depTime,
  nowDay,
  nxtDay,
  today,
} from "../asset/DB/requestUrl";

const initialState = {
  depDate: today,
  depTime: depTime,
  showToday: nowDay,
  showNxtday: nxtDay,
  currentDepTime: currnetDepTime,
};

export const getDateSlice = createSlice({
  name: "getDate",
  initialState,
  reducers: {
    inputDepDate: (state, action) => {
      state.depDate = action.payload;
    },
    inputDepTime: (state, action) => {
      state.depTime = action.payload;
    },
    inputToday: (state, action) => {
      state.showToday = action.payload;
    },
    inputNxtday: (state, action) => {
      state.showNxtday = action.payload;
    },
    inputCurrentTime: (state, action) => {
      state.currentDepTime = action.payload;
    },
  },
});

export const { inputDepDate, inputDepTime, inputToday, inputNxtday } =
  getDateSlice.actions;
export default getDateSlice.reducer;
