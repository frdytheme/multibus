import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchRoute } from "../store/fetchRouteSlice";
import { setTrmlNum } from "../store/setTrmlByNumSlice";
import ArrTrmlList from "./ArrTrmlList";
import DepTrmlList from "./DepTrmlList";

const TrmlBoard = styled.li`
  position: relative;
  .loading {
    position: absolute;
    width: 500px;
    padding: 20px 0;
    font-size: 18px;
    text-align: center;
    background-color: rgba(0,0,0,.7);
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 7px;
  }
  p {
    margin-top: 15px;
    padding: 15px 12px 8px 15px;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #e6e6e6;
  }
  .areaList {
    display: flex;
    border-bottom: 1px solid #e6e6e6;
    .cityList {
      li {
        width: 100px;
        background-color: var(--grey-box);
        margin: 8px;
        padding: 8px 10px;
        color: #666;
        cursor: pointer;
        &.checked {
          background-color: var(--blue-color);
          color: #fff;
        }
      }
    }
    .cityItem {
      width: 100%;
      padding-left: 30px;
      border-left: 1px solid #e6e6e6;
      ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 40px;
        height: 400px;
        overflow-y: scroll;
        li {
          border-bottom: 1px solid #e6e6e6;
          color: #999;
          padding: 15px 0;
          line-height: 10px;
          cursor: pointer;
          &:hover {
            color: var(--blue-color);
          }
        }
      }
    }
  }
`;

function TrmlList() {
  const mainList = useRef(null);
  const dispatch = useDispatch();
  const depTrml = useSelector((state) => state.depTrml.data);
  const arrTrml = useSelector((state) => state.arrTrml.data);
  const depId = depTrml.terminalId;
  const fetchStatus = useSelector((state) => state.expRoute.status);

  const province = [
    { id: 0, name: "서울" },
    { id: 1, name: "인천/경기" },
    { id: 2, name: "강원" },
    { id: 3, name: "대전/충남" },
    { id: 4, name: "충북" },
    { id: 5, name: "광주/전남" },
    { id: 6, name: "전북" },
    { id: 7, name: "부산/경남" },
    { id: 8, name: "대구/경북" },
  ];

  const onMainTrml = () => {
    const mainTrmls = mainList.current.querySelectorAll("li");
    mainTrmls.forEach((trml) => {
      trml.addEventListener("click", (e) => {
        mainTrmls.forEach((trml) => trml.classList.remove("checked"));
        e.currentTarget.classList.add("checked");
      });
    });
  };

  console.log(arrTrml)

  useEffect(() => {
    onMainTrml();
    dispatch(fetchRoute({ dep: depId }));
  }, [depId]);

  return (
    <TrmlBoard>
      <p>지역별 터미널</p>
      <div className="areaList">
        <div className="cityList">
          <ul ref={mainList}>
            <li className="checked" onClick={() => dispatch(setTrmlNum("all"))}>
              전체
            </li>
            {province.map((province) => {
              return (
                <li key={province.id} id={province.id} onClick={(e) => dispatch(setTrmlNum(e.target.id))}>
                  {province.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="cityItem">{depTrml ? <ArrTrmlList /> : <DepTrmlList />}</div>
      </div>
      {fetchStatus === "success" || (
        <div className="loading">
          {fetchStatus === "ready" && "예매 가능한 터미널을 검색중입니다..."}
          {fetchStatus === "rejected" && "터미널 검색에 실패했습니다.(통신 오류)"}
        </div>
      )}
    </TrmlBoard>
  );
}

export default TrmlList;
