import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { path } from "../asset/DB/requestUrl";
import { setTrmlNum } from "../store/setTrmlByNumSlice";
import ArrTrmlList from "./ArrTrmlList";
import DepTrmlList from "./DepTrmlList";

const TrmlBoard = styled.li`
  position: relative;
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
      position: relative;
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
      strong {
        position: absolute;
        font-size: 17px;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        color: #666;
        width:100%;
        text-align: center;
        line-height:2.5;
      }
    }
  }
  .loading {
    position: absolute;
    width: 200px;
    padding: 20px 0;
    font-size: 18px;
    text-align: center;
    background-color: #dddddd65;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
  }
`;

function TrmlList() {
  const mainList = useRef(null);
  const dispatch = useDispatch();
  const depTrml = useSelector((state) => state.depTrml.data);
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

  useEffect(() => {
    onMainTrml();
  }, []);

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
      {depTrml && fetchStatus === "ready" && (
        <div className="loading">
          {fetchStatus === "ready" ? (
            <img src={`${path}/images/loading.gif`} alt="로딩 gif" />
          ) : fetchStatus === "failed" ? (
            "터미널 검색에 실패했습니다."
          ) : null}
        </div>
      )}
    </TrmlBoard>
  );
}

export default TrmlList;
