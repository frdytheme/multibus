import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { busAPI } from "../asset/DB/requestUrl";

export const fetchCityCode = createAsyncThunk("cityCode/fetchCityCode", async () => {
  const res = await axios.get(busAPI.getCity);
  return res.data.response.body.items.item;
});

export const fetchCitySlice = createSlice({
  name: "cityCode",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityCode.pending, (state) => {
        state.status = "ready";
      })
      .addCase(fetchCityCode.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchCityCode.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default fetchCitySlice.reducer;
