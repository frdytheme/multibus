import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { busAPI, depTime } from "../asset/DB/requestUrl";

export const fetchRoute = createAsyncThunk(
  "expRoute/fetchExpRoute",
  async ({ dep, arr, date, list, grade }) => {
    const res = await axios.get(busAPI.getRoute(dep, arr, date, list, grade));
    const result = res.data.response.body.items.item;
    const currentRes = result.filter((route) => {
      return route.depPlandTime > depTime;
    });
    return currentRes;
  }
);

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
