import { createSlice } from "@reduxjs/toolkit";
import { allGradeList } from "../asset/DB/allDepTrmlList";

const getGrade = createSlice({
  name: "setGrade",
  initialState: {
    id: 0,
    data: "",
  },
  reducers: {
    setGrade: (state, action) => {
      state.id = action.payload;
      if (state.id === 1) {
        state.data = "우등";
      } else if (state.id === 5) {
        state.data = "일반";
      } else if (state.id === 7) {
        state.data = "프리미엄";
      }
    },
  },
});

export const { setGrade } = getGrade.actions;
export default getGrade.reducer;
