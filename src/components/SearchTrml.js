import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { focusBorder } from "../asset/style/commonStyle";
import { setTrml } from "../store/departTrmlSlice";
import { findTrml } from "../store/showTrmlSlice";

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
  const trmlList = useSelector(state=>state.trmlList.data);

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
      <ul className="searchResult">
        {showTrml &&
          trmlList
            .filter((trml) => trml.terminalNm.includes(showTrml))
            .map((result) => {
              return (
                <li
                  key={result.terminalId}
                  onClick={() => {
                    dispatch(setTrml(result.terminalNm));
                    dispatch(findTrml(""));
                  }}>
                  {result.terminalNm}
                </li>
              );
            })}
      </ul>
    </SearchTerminal>
  );
}

export default SearchTrml;
