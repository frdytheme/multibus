import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { focusBorder } from "../asset/style/GlobalStyle";
import { setArrTrml } from "../store/arrTrmlSlice";
import { setTrml } from "../store/departTrmlSlice";
import { findTrml } from "../store/showTrmlSlice";
import { modalClose } from "../store/ticketModalToggleSlice";
import { allDepTrmlList } from "../asset/DB/allDepTrmlList";
import { fetchRoute } from "../store/fetchRouteSlice";

const SearchTerminal = styled.li`
  border-top: 1px solid #aaa;
  padding: 20px 0;
  margin: 20px 0 0;
  position: relative;
  input {
    width: 620px;
    padding: 15px 0 8px;
    border: none;
    background-color: #f3f4f6;
    text-indent: 15px;
    &:focus {
      ${focusBorder}
      background-color:#fff;
      & + span {
        display: none;
        & + span {
          display: block;
        }
      }
    }
  }
  span {
    cursor: pointer;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2em;
    color: #aaa;
    &:nth-child(3) {
      display: none;
    }
  }
  .searchResult {
    font-size: 13px;
    width: 620px;
    position: absolute;
    z-index: 99;
    li {
      background-color: #f9f9f9;
      padding: 12px;
      border-bottom: 1px solid #e6e6e6;
      &:hover {
        background-color: #fff;
        color: var(--blue-color);
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;

function SearchTrml() {
  const dispatch = useDispatch();
  const showTrml = useSelector((state) => state.showTrml.result);
  const trmlList = [...allDepTrmlList];
  const depTrml = useSelector((state) => state.depTrml.data.terminalNm);
  const arrTrmlList = useSelector((state) => state.expRoute.data);
  const depDate = useSelector((state) => state.getDate.depDate);

  // 중복된 터미널 제거, 이름 순 정렬.
  const currentRoute = arrTrmlList.filter((trml, idx, route) => {
    return route.findIndex((item) => item.arrPlaceNm === trml.arrPlaceNm) === idx;
  });
  const alignRoute = currentRoute.sort((a, b) => {
    if (a.arrPlaceNm > b.arrPlaceNm) return 1;
    if (a.arrPlaceNm < b.arrPlaceNm) return -1;
    return 0;
  });

  return (
    <SearchTerminal>
      <input
        type="text"
        placeholder="터미널/지역 이름을 검색하세요"
        value={showTrml}
        onChange={(e) => dispatch(findTrml(e.target.value))}
      />
      <span className="material-symbols-outlined">search</span>
      <span className="material-symbols-outlined">close</span>
      {depTrml ? (
        <ul className="searchResult">
          {showTrml &&
            alignRoute
              .filter((trml) => trml.arrPlaceNm.includes(showTrml))
              .map((result) => {
                return (
                  <li
                    key={result.routeId}
                    onClick={() => {
                      dispatch(setArrTrml(result));
                      dispatch(findTrml(""));
                      dispatch(modalClose());
                    }}>
                    {result.arrPlaceNm}
                  </li>
                );
              })}
        </ul>
      ) : (
        <ul className="searchResult">
          {showTrml &&
            trmlList
              .filter((trml) => trml.terminalNm.includes(showTrml))
              .map((result) => {
                return (
                  <li
                    key={result.terminalId}
                    onClick={() => {
                      dispatch(setTrml(result));
                      dispatch(findTrml(""));
                      dispatch(fetchRoute({ dep: result.terminalId, date: depDate }));
                    }}>
                    {result.terminalNm}
                  </li>
                );
              })}
        </ul>
      )}
    </SearchTerminal>
  );
}

export default SearchTrml;
