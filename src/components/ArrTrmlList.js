import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArrTrml } from "../store/arrTrmlSlice";
import { modalToggle } from "../store/ticketModalToggleSlice";

function ArrTrmlList() {
  const dispatch = useDispatch();
  const trmlNum = useSelector((state) => state.setTrmlNum.num);
  const arrTrmlList = useSelector((state) => state.expRoute.data);

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
        {trmlNum === "all"
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
      {alignRoute.length < 1 ? <strong>현재 시간 예매 가능한 터미널이 없습니다.</strong> : null}
    </>
  );
}

export default ArrTrmlList;
