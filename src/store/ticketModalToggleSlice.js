import { createSlice } from "@reduxjs/toolkit";

const modalSwitch = createSlice({
  name: "modalSwitch",
  initialState: false,
  reducers: {
    modalToggle: (state) => (state = !state),
    modalClose: (state) => (state = false),
  },
});

export const { modalToggle, modalClose } = modalSwitch.actions;
export default modalSwitch.reducer;
