import { createSlice } from "@reduxjs/toolkit";
import { allDepTrmlList } from "../asset/DB/allDepTrmlList";

const initialState = {
  data: "",
  status: false,
  name: "검색 전",
};

export const arrivalTrml = createSlice({
  name: "trml",
  initialState,
  reducers: {
    setArrTrml: (state, action) => {
      const arrInfo = action.payload;

      // 경로 호출 API로 받아온 객체 배열 내 동일한 터미널을 Id가 있는 객체 배열 데이터로 변경
      const findArrTrml = allDepTrmlList.find(
        (item) => item.terminalNm === arrInfo.arrPlaceNm
      );
      state.data = findArrTrml;
      state.status = false;
      state.name = findArrTrml.terminalNm;
    },
    initArrTrml: (state) => {
      state.data = initialState.data;
      state.status = false;
      state.name = "";
    },
    changeArr: (state) => {
      state.status = true;
    },
    changeArrDep: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default arrivalTrml.reducer;
export const { setArrTrml, initArrTrml, changeArr, changeArrDep } =
  arrivalTrml.actions;
