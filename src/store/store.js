import { configureStore } from "@reduxjs/toolkit";
import arrivalTrml from "./arrTrmlSlice";
import departTrml from "./departTrmlSlice";
import CityCodeReducer from "./fetchCitySlice";
import fetchRouteSlice from "./fetchRouteSlice";
import trmlListReducer from "./fetchTrmlSlice";
// import filterTrmlList from "./filterTrmlList";
import getDateSlice from "./getDateSlice";
import getGradeSlice from "./getGradeSlice";
import setTrmlByNumSlice from "./setTrmlByNumSlice";
import showTrmlSlice from "./showTrmlSlice";
import ticketModalToggleSlice from "./ticketModalToggleSlice";

export const store = configureStore({
  reducer: {
    cityCode: CityCodeReducer,
    trmlList: trmlListReducer,
    depTrml: departTrml,
    arrTrml: arrivalTrml,
    showTrml: showTrmlSlice,
    setTrmlNum: setTrmlByNumSlice,
    modalSwitch: ticketModalToggleSlice,
    expRoute: fetchRouteSlice,
    getDate: getDateSlice,
    getGrade: getGradeSlice,
    // filterTrml: filterTrmlList,
  },
});

export default store;
