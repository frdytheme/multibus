import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { busAPI, depTime, nowTime, today } from "../asset/DB/requestUrl";

export const fetchRoute = createAsyncThunk("expRoute/fetchExpRoute", async ({ dep, arr, date, list, grade }) => {
  const res = await axios.get(busAPI.getRoute(dep, arr, date, list, grade));
  const result = res.data.response.body.items.item;

  // 날짜가 오늘이면 현재 시간 이후로 운행하는 경로만 필터링.
  // 날짜가 오늘 이후면 모든 시간 경로 return.
  if (nowTime >= 2300) {
    console.log("밤 11시 이후니까 내일 것 까지 ");
    return result;
  } else {
    console.log("현재 시간 이후 예매 가능한 목록 검색 중...");
    const currentRes = result.filter((route) => {
      return route.depPlandTime > depTime;
    });
    return currentRes;
  }
});

export const getExpRoute = createSlice({
  name: "expRoute",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoute.pending, (state) => {
        state.status = "ready";
        console.log("출도착지 경로 fetch중...");
      })
      .addCase(fetchRoute.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        console.log("출도착지 경로 fetch 완료");
      })
      .addCase(fetchRoute.rejected, (state) => {
        state.status = "failed";
        console.log("출도착지 경로 fetch 실패");
      });
  },
});

export default getExpRoute.reducer;
