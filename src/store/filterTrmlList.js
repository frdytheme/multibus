import { createSlice } from "@reduxjs/toolkit";

const filterTrmlList = createSlice({
  name: "filterTrml",
  initialState: {
    data: [],
  },
  reducers: {
    filterTrml: (state, action) => {
      const route = JSON.parse(window.localStorage.getItem("route"));
      const depTrml = JSON.parse(window.localStorage.getItem("depTrml"));
      const arrTrml = JSON.parse(window.localStorage.getItem("arrTrml"));
      const busGrade = window.localStorage.getItem("busGrade")
      state.data = route.filter((route) => {
        return route.arrPlaceNm === arrTrml.terminalNm && route.gradeNm.includes(busGrade);
      });
    },
  },
});

export const { filterTrml } = filterTrmlList.actions;
export default filterTrmlList.reducer;
