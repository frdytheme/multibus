import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { busAPI, depTime, nowTime } from "../asset/DB/requestUrl";

export const fetchRoute = createAsyncThunk(
  "expRoute/fetchExpRoute",
  async ({ dep, arr, date, list, grade }) => {
    let result;
    if (sessionStorage.getItem(`${dep}/${arr}/${date}/${list}/${grade}`)) {
      result = JSON.parse(
        sessionStorage.getItem(`${dep}/${arr}/${date}/${list}/${grade}`)
      );
    } else {
      const res = await axios.get(busAPI.getRoute(dep, arr, date, list, grade));
      result = res === undefined ? [] : res.data.response.body.items.item;
      sessionStorage.setItem(
        `${dep}/${arr}/${date}/${list}/${grade}`,
        JSON.stringify(result)
      );
    }

    // 날짜가 오늘이면 현재 시간 이후로 운행하는 경로만 필터링.
    // 날짜가 오늘 이후면 모든 시간 경로 return.
    if (nowTime >= 2300) {
      return result;
    } else {
      const currentRes = result.filter((route) => {
        return route.depPlandTime > depTime;
      });
      return currentRes;
    }
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
      })
      .addCase(fetchRoute.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchRoute.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default getExpRoute.reducer;
