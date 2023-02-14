import { createSlice } from "@reduxjs/toolkit";

const modalSwitch = createSlice({
  name: "modalSwitch",
  initialState: {
    ticketToggle: false,
    confirmToggle: false,
  },
  reducers: {
    modalToggle: (state) => {
      state.ticketToggle = !state.ticketToggle;
    },
    modalClose: (state) => {
      state.ticketToggle = false;
      state.confirmToggle = false;
    },
    confirmToggle: (state) => {
      state.confirmToggle = !state.confirmToggle;
    },
  },
});

export const { modalToggle, modalClose, confirmToggle } = modalSwitch.actions;
export default modalSwitch.reducer;
