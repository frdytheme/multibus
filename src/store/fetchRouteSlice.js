import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { busAPI, depTime } from "../asset/DB/requestUrl";

export const fetchRoute = createAsyncThunk("expRoute/fetchExpRoute", async ({ dep, arr, date, list, grade }) => {
  const res = await axios.get(busAPI.getRoute(dep, arr, date, list, grade));
  const result = res.data.response.body.items.item;
  const currentRes = result.filter((route) => {
    return route.depPlandTime > depTime;
  });
  return currentRes;
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
