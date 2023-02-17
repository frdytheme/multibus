import { configureStore } from "@reduxjs/toolkit";
import arrivalTrml from "./arrTrmlSlice";
import departTrml from "./departTrmlSlice";
import fetchRouteSlice from "./fetchRouteSlice";
import getDateSlice from "./getDateSlice";
import getGradeSlice from "./getGradeSlice";
import setTrmlByNumSlice from "./setTrmlByNumSlice";
import showTrmlSlice from "./showTrmlSlice";
import ticketModalToggleSlice from "./ticketModalToggleSlice";

export const store = configureStore({
  reducer: {
		// 출발 터미널
    depTrml: departTrml,
		// 도착 터미널
    arrTrml: arrivalTrml,
		// input 터미널 검색창 value
    showTrml: showTrmlSlice,
		// 터미널 분류용 번호
    setTrmlNum: setTrmlByNumSlice,
		// 모달 / 알림창 토글
    modalSwitch: ticketModalToggleSlice,
		// 출/도착지 기반 asyncThunk axios
    expRoute: fetchRouteSlice,
		// 날짜 / 시간 관련
    getDate: getDateSlice,
		// 좌석 등급
    getGrade: getGradeSlice,
  },
});

export default store;
