import { createSlice } from "@reduxjs/toolkit";
import {
  currentDepTime,
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
  currentDepTime: currentDepTime,
  newDate: JSON.stringify(new Date()),
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
    inputNewDate: (state, action) => {
      state.newDate = action.payload;
    },
  },
});

export const {
  inputDepDate,
  inputDepTime,
  inputToday,
  inputNxtday,
  inputCurrentTime,
  inputNewDate,
} = getDateSlice.actions;
export default getDateSlice.reducer;
