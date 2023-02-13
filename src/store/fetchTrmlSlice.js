import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { busAPI } from "../asset/DB/requestUrl";

export const fetchTrml = createAsyncThunk("trmlList/fetchTrmlList", async ({ name, list }) => {
  const res = await axios.get(busAPI.getTerminal(name, list));
  const result = res.data.response.body.items.item;
  const currentRes = result.sort((a, b) => {
    if (a.terminalNm > b.terminalNm) return 1;
    if (a.terminalNm < b.terminalNm) return -1;
    return 0;
  });
  return currentRes;
});

export const trmlListSlice = createSlice({
  name: "trmlList",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrml.pending, (state) => {
        state.status = "ready";
        console.log("전체 터미널리스트 fetch중...")
      })
      .addCase(fetchTrml.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        console.log("전체 터미널리스트 fetch 완료")

      })
      .addCase(fetchTrml.rejected, (state) => {
        state.status = "failed";
        console.log("전체 터미널리스트 fetch 실패")
      });
  },
});

export default trmlListSlice.reducer;
