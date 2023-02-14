import { createSlice } from "@reduxjs/toolkit";


const showTrmlSlice = createSlice({
  name: "showTrml",
  initialState: {
    result: ""
  },
  reducers: {
    findTrml: (state,action)=>{
      state.result = action.payload;
    },
    initResult: state => {
      state.result = "";
    }
  }
})

export const {findTrml, initResult} = showTrmlSlice.actions;
export default showTrmlSlice.reducer;