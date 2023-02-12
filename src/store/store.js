import { configureStore } from "@reduxjs/toolkit";
import departTrml from "./departTrmlSlice";
import CityCodeReducer from "./fetchCitySlice";
import fetchRouteSlice from "./fetchRouteSlice";
import trmlListReducer from "./fetchTrmlSlice";
import setTrmlByNumSlice from "./setTrmlByNumSlice";
import showTrmlSlice from "./showTrmlSlice";
import ticketModalToggleSlice from "./ticketModalToggleSlice";

export const store = configureStore({
  reducer: {
    cityCode: CityCodeReducer,
    trmlList: trmlListReducer,
    depTrml: departTrml,
    showTrml: showTrmlSlice,
    setTrmlNum: setTrmlByNumSlice,
    modalSwitch: ticketModalToggleSlice,
    expRoute: fetchRouteSlice,
  },
});

export default store;
