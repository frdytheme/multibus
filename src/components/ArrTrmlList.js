import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrml } from "../store/departTrmlSlice";

function ArrTrmlList() {
  const dispatch = useDispatch();
  const trmlNum = useSelector((state) => state.setTrmlNum.num);
  const arrTrmlList = useSelector((state) => state.expRoute.data);
  const fetchStatus = useSelector((state) => state.expRoute.status);

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
                    dispatch(setTrml(trml));
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
                      dispatch(setTrml(trml));
                    }}>
                    {trml.arrPlaceNm}
                  </li>
                );
              })}
        {alignRoute.length < 1 ? <li>현재 시간 예매 가능한 터미널이 없습니다.</li> : null}
      </ul>
    </>
  );
}

export default ArrTrmlList;
