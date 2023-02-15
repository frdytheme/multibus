import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArrTrml } from "../store/arrTrmlSlice";
import { modalToggle } from "../store/ticketModalToggleSlice";

function ArrTrmlList() {
  const dispatch = useDispatch();
  const trmlNum = useSelector((state) => state.setTrmlNum.num);
  const arrTrmlList = useSelector((state) => state.expRoute.data);
  const fetchStatus = useSelector((state) => state.expRoute.status);

  // 출도착지 기반 예매 가능한 터미널 목록 = 중복 제거 / 이름순 정렬 로직
  const currentRoute = arrTrmlList.filter((trml, idx, route) => {
    return route.findIndex((item) => item.arrPlaceNm === trml.arrPlaceNm) === idx;
  });
  const alignRoute = currentRoute.sort((a, b) => {
    if (a.arrPlaceNm > b.arrPlaceNm) return 1;
    if (a.arrPlaceNm < b.arrPlaceNm) return -1;
    return 0;
  });

  return (
    <>
      <ul>
        {trmlNum === "all" && fetchStatus !== "failed"
          ? alignRoute.map((trml) => {
              return (
                <li
                  key={trml.routeId}
                  onClick={() => {
                    dispatch(setArrTrml(trml));
                    dispatch(modalToggle());
                  }}>
                  {trml.arrPlaceNm}
                </li>
              );
            })
          : alignRoute
              .filter((id) => id.routeId.charAt(7) === trmlNum)
              .map((trml) => {
                return (
                  <li
                    key={trml.routeId}
                    onClick={() => {
                      dispatch(setArrTrml(trml));
                      dispatch(modalToggle());
                    }}>
                    {trml.arrPlaceNm}
                  </li>
                );
              })}
      </ul>
      {fetchStatus === "success" && alignRoute.length === 0 ? (
        <strong>현재 시간 예매 가능한 터미널이 없습니다.</strong>
      ) : fetchStatus === "failed" ? (
        <strong>
          선택하신 날짜로 검색되는 터미널이 없습니다.
          <br />
          평균 1일 ~ 최대 2일 후까지 검색 가능합니다.
        </strong>
      ) : null}
    </>
  );
}

export default ArrTrmlList;
