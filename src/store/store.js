import { configureStore } from "@reduxjs/toolkit";
import CityCodeReducer from "./fetchCitySlice";
import trmlListReducer from "./fetchTrmlSlice";

export const store = configureStore({
  reducer: {
    cityCode: CityCodeReducer,
    trmlList: trmlListReducer,
  },
});

export default store;
