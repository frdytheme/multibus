import { useEffect, useState } from "react";
import styled from "styled-components";
import { currentHour, nowDay, path, today } from "../asset/DB/requestUrl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRoute } from "../store/fetchRouteSlice";
import { inputDepDate, inputToday } from "../store/getDateSlice";
import { initArrTrml } from "../store/arrTrmlSlice";
import { initTrml } from "../store/departTrmlSlice";
import { setGrade } from "../store/getGradeSlice";
import DatePickerRouteInfo from "../asset/DB/DatePickerRouteInfo";

const RouteInformation = styled.div`
  width: 100%;
  background-color: #ddd;
  padding-left: 220px;
  box-sizing: border-box;
  .currentStatus {
    height: 180px;
    background: url(${path}/images/visual_route_bg.jpg) no-repeat 50% / cover;
    h2 {
      font-size: 34px;
      font-weight: normal;
      padding-top: 80px;
      text-align: center;
      color: #fff;
    }
    .statusStep {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      font-size: 15px;
      gap: 30px;
      li {
        height: 20px;
        line-height: 20px;
        color: #a1a6b3;
        &.on {
          color: #fff;
          &.spreadArrow {
            img {
              transform: translateY(0);
            }
          }
        }
      }
      .spreadArrow {
        overflow: hidden;
        img {
          width: 30px;
          object-fit: cover;
          transform: translateY(-19px);
        }
      }
    }
  }
  .sideMenu {
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #ddd;
    li {
      border-right: 1px solid #ddd;
      padding: 18px 18px;
      font-size: 12px;
      color: #666;
      &:nth-child(2) {
        font-size: 13px;
        position: relative;
        cursor: pointer;
        img {
          margin-top: 4px;
          padding-left: 20px;
        }
        ul {
          display: none;
          position: absolute;
          width: 175px;
          height: 40px;
          left: 0;
          top: calc(100% + 1px);
          li {
            background-color: #f9f9f9;
            border-bottom: 1px solid #e6e6e6;
            padding: 13px 0 13px 20px;
            cursor: pointer;
            &:hover {
              color: var(--blue-color);
            }
          }
        }
        &.show {
          ul {
            display: block;
          }
        }
      }
    }
  }
  article {
    background-color: #fff;
    padding: 40px 30px 100px;
    h2 {
      font-weight: normal;
      font-size: 28px;
      text-align: center;
    }
    .routeStatus {
      display: flex;
      width: 960px;
      height: 640px;
      margin: 30px auto;
      gap: 10px;
      .routeInfo {
        background-color: var(--blue-color);
        width: 230px;
        color: #fff;
        padding: 0 20px;
        box-sizing: border-box;
        .dateInfo {
          display: block;
          font-weight: bold;
          font-size: 15px;
          padding: 20px 0;
        }
        .depArrInfo {
          border-bottom: 1px solid #86c2d8;
          p {
            font-size: 22px;
            padding: 12px 0 12px 45px;
            display: flex;
            position: relative;
            &:nth-child(2) {
              &::before {
                content: "도착";
              }
              &::after {
                content: "";
                display: block;
                width: 1px;
                height: 30px;
                position: absolute;
                left: 17.5px;
                top: -15px;
                background-color: #fff;
              }
            }
            &::before {
              content: "출발";
              width: 35px;
              height: 35px;
              display: block;
              text-align: center;
              line-height: 35px;
              font-size: 12px;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              background-color: #fff;
              color: var(--blue-color);
              border-radius: 50%;
            }
          }
          em {
            display: block;
            font-size: 12px;
            padding-left: 45px;
            margin-bottom: 10px;
          }
          a {
            font-size: 12px;
            position: relative;
            padding-left: 17px;
            margin: 15px 0;
            &::before {
              content: url(${path}/images/btn_modify_s.png);
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            &:hover {
              opacity: 0.5;
            }
          }
        }
        .chargeInfo {
          font-size: 12px;
          li {
            border-bottom: 1px solid #76b9d2;
            padding: 5px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:first-child {
              font-size: 15px;
              border-bottom: 1px solid #add3e1;
              padding: 15px 0 8px;
            }
            span {
              font-size: 12px;
            }
            strong {
              font-size: 13px;
            }
          }
        }
      }
      .routeChoice {
        border: 1px solid #ddd;
        width: 720px;
        .handler {
          border-bottom: 1px solid #999;
          display: flex;
          .datePicker {
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .refreshBtn {
              width: 48px;
              height: 48px;
              text-align: center;
              cursor: pointer;
              padding: 8px;
              border-right: 1px solid #ddd;
              img {
                padding: 12px 12px;
                background-color: #e6e6e6;
              }
            }
            text-align: center;
            display: flex;
            p {
              font-size: 22px;
              font-weight: bold;
            }
            .picker {
              padding: 8px;
              cursor: pointer;
              img {
                width: 48px;
                width: 48px;
                padding: 10px;
                box-sizing: border-box;
                background-color: #e6e6e6;
              }
            }
          }
        }
        .routeDisplay {
          display: flex;
          .timeTable {
            height: 574px;
            width: 65px;
            text-align: right;
            border-right: 1px solid #ddd;
            padding-right: 8px;
            box-sizing: border-box;
            user-select: none;
            li {
              padding-right: 8px;
              color: var(--blue-color);
              margin-top: 8px;
              font-size: 14px;
              height: 25px;
              line-height: 25px;
              position: relative;
              &:first-child::before,
              &:nth-child(2)::before,
              &:nth-child(3)::before {
                background: url(${path}/images/ico_night.png) no-repeat 50% /
                  cover;
              }
              &::before {
                content: "";
                background: url(${path}/images/ico_daytime.png) no-repeat 50% /
                  cover;
                display: block;
                width: 16px;
                height: 16px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 10px;
              }
              &:hover {
                background-color: var(--blue-color);
                color: #fff;
              }
              &.disabled {
                color: #ddd;
                &:hover {
                  background-color: #ccc;
                }
              }
            }
          }
          .routeList {
            width: 653px;
            .category {
              display: grid;
              border-bottom: 1px solid #ddd;
              padding: 8px 0 8px 20px;
              font-size: 13px;
              text-align: left;
              grid-template-columns: 1fr 1.5fr 1fr 0.7fr 2fr;
              grid-auto-rows: 1fr;
              color: #666;
              li {
              }
            }
            .routeItem {
              height: 543px;
              margin-left: 20px;
              overflow: auto;
              ul {
                display: grid;
                grid-template-columns: 1fr 1.5fr 1fr 0.7fr 2fr;
                grid-auto-rows: 1fr;
                position: relative;
                border-bottom: 1px solid #ddd;
                cursor: pointer;
                &.disabled {
                  opacity: 0.4;
                  cursor: default;
                  img {
                    filter: grayscale();
                  }
                }
              }
              li {
                font-size: 18px;
                height: 54px;
                line-height: 54px;
                &:nth-child(2) {
                  display: flex;
                  align-items: center;
                }
                &:nth-child(3),
                &:nth-child(5) {
                  font-size: 14px;
                }
                &:nth-child(4) {
                  font-size: 12px;
                }
              }
              .submitRoute {
                position: absolute;
                right: 75px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 13px;
                color: var(--blue-color);
                &::after {
                  content: url(${path}/images/btn_arrow.png);
                  margin-left: 5px;
                }
              }
            }
            li {
              .fetchFailed {
                font-size: 20px;
                font-weight: bold;
                display: block;
                text-align: center;
                color: #999;
                span {
                  display: block;
                  font-size: 13px;
                  font-weight: normal;
                  color: crimson;
                  line-height: 2;
                  margin-top: 20px;
                }
                div {
                  background-color: var(--blue-color);
                  color: #fff;
                  width: 200px;
                  padding: 5px 20px;
                  margin: 30px auto;
                  border-radius: 6px;
                  cursor: pointer;
                  &:hover {
                    opacity: 0.7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

function RouteInfo() {
  const dispatch = useDispatch();
  const [sideShow, setSideShow] = useState(false);
  const getDate = useSelector((state) => state.getDate);
  const showToday = getDate.showToday;
  const depDate = getDate.depDate;
  const currentTime = getDate.currentDepTime;
  const depTrml = useSelector((state) => state.depTrml);
  const arrTrml = useSelector((state) => state.arrTrml);
  const depId = depTrml.data.terminalId;
  const arrId = arrTrml.data.terminalId;
  const expRoute = useSelector((state) => state.expRoute);
  const routeRes = expRoute.data;
  const routeStatus = expRoute.status;
  const busGrade = useSelector((state) => state.getGrade.data);

  const currentToday = today;

  const handleSideMenu = () => {
    setSideShow(!sideShow);
  };

  // 전체 도착지 리스트에서 선택한 도착지,버스 등급으로 필터링
  const filterTrml = routeRes.filter((route) => {
    return (
      route.arrPlaceNm === arrTrml.data.terminalNm &&
      route.gradeNm.includes(busGrade)
    );
  });

  // 출발 시간이 밤 12시 이후면 리스트 끝으로 이동.
  const alignTrml = [
    ...filterTrml.filter((time) => {
      return time.arrPlandTime > `${depDate}0500` * 1;
    }),
    ...filterTrml.filter((time) => {
      return time.arrPlandTime < `${depDate}0500` * 1;
    }),
  ];

  // 소요 시간 / 이동 거리 계산
  let roadDistance = 0;
  const getRoadTime = () => {
    if (alignTrml.length === 0) return;
    const depHour = alignTrml[0].depPlandTime.toString().slice(8, 10);
    const depMin = alignTrml[0].depPlandTime.toString().slice(10, 12);
    const arrHour = alignTrml[0].arrPlandTime.toString().slice(8, 10);
    const arrMin = alignTrml[0].arrPlandTime.toString().slice(10, 12);
    const hour =
      arrHour === "00" ||
      arrHour === "01" ||
      arrHour === "02" ||
      arrHour === "03"
        ? arrHour * 1 + 24 - depHour
        : arrHour - depHour;
    const min = arrMin - depMin;
    roadDistance = `약 ${90 * hour}km`;
    return `${hour}시간 ${min < 0 ? min * -1 : min}분 소요`;
  };
  console.log(alignTrml);

  // 총 리스트에서 좌석 등급만 중복 제거 후 return
  const gradeList = alignTrml.filter((trml, idx, route) => {
    return route.findIndex((item) => item.gradeNm === trml.gradeNm) === idx;
  });

  // 시간표기 변경 (ex. 0000 -> 00 : 00)
  const changeTime = (time) => {
    const isTime = time.toString().slice(8, 12);
    let isHour = isTime.slice(0, 2);
    const isMin = isTime.slice(2, 4);
    return isHour + ":" + isMin;
  };

  // 가격 표기 변경 (ex 11000 -> 11,000 원)
  const changeCharge = (charge) => {
    return charge.toLocaleString() + " 원";
  };

  const timeTable = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];

  // datePick, grade 변경 시 터미널 리스트 재출력
  useEffect(() => {
    dispatch(fetchRoute({ dep: depId, arr: arrId, date: depDate, list: 1000 }));
  }, [depDate, busGrade]);

  return (
    <RouteInformation>
      <div className="currentStatus">
        <h2>고속버스예매</h2>
        <ul className="statusStep">
          <li className="on">예매정보입력</li>
          <li className="spreadArrow on">
            <img src={`${path}/images/arrow_process.png`} alt="화살표 아이콘" />
          </li>
          <li>결제정보입력</li>
          <li className="spreadArrow">
            <img src={`${path}/images/arrow_process.png`} alt="화살표 아이콘" />
          </li>
          <li>예매완료</li>
        </ul>
      </div>
      <ul className="sideMenu">
        <li>HOME</li>
        <li
          className={`${sideShow && "show"}`}
          onClick={() => handleSideMenu()}>
          고속버스예매
          {sideShow ? (
            <img src={`${path}/images/bu_selectArrowC.png`} alt="아래 화살표" />
          ) : (
            <img src={`${path}/images/bu_selectArrow.png`} alt="아래 화살표" />
          )}
          <ul>
            <li>고속버스예매</li>
            <li>예매확인</li>
            <li>운행정보</li>
            <li>고속버스 프리패스/정기권</li>
            <li>이용안내</li>
            <li>공지사항</li>
            <li>고객센터</li>
            <li>전국고속버스운송사업조합</li>
            <li>터미널사업자협회</li>
          </ul>
        </li>
      </ul>
      <article>
        <h2>배차조회</h2>
        <div className="routeStatus">
          <div className="routeInfo">
            <span className="dateInfo">{showToday}</span>
            <div className="depArrInfo">
              <p>{depTrml.name}</p>
              <p>{arrTrml.name}</p>
              <em>{routeStatus === "failed" || getRoadTime()}</em>
              <em>{roadDistance}</em>
              <Link
                to="/"
                onClick={() => {
                  dispatch(initArrTrml());
                  dispatch(initTrml());
                  dispatch(inputDepDate(today));
                  dispatch(inputToday(nowDay));
                }}>
                수정
              </Link>
            </div>
            <ul className="chargeInfo">
              <li>
                요금정보 <span>(일반요금)</span>
              </li>
              {gradeList.map((grade, idx) => {
                return (
                  <li key={idx}>
                    {grade.gradeNm}
                    <strong>{changeCharge(grade.charge)}</strong>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="routeChoice">
            <div className="handler">
              <div className="datePicker">
                <div className="refreshBtn">
                  <img
                    src={`${path}/images/ico_refresh_s.png`}
                    alt="새로고침 아이콘"
                  />
                </div>
                <p>{showToday}</p>
                <div className="picker">
                  <DatePickerRouteInfo />
                </div>
              </div>
            </div>
            <div className="routeDisplay">
              <ul className="timeTable">
                {timeTable.map((time) => {
                  return (
                    <li
                      key={time}
                      className={time < currentHour ? "disabled" : undefined}>
                      {time}
                    </li>
                  );
                })}
              </ul>
              <div className="routeList">
                <ul className="category">
                  <li>출발</li>
                  <li>고속사</li>
                  <li>등급</li>
                  <li>할인</li>
                  <li>잔여석</li>
                </ul>
                <ul className="routeItem">
                  <li>
                    {routeStatus !== "failed" && alignTrml.length !== 0 ? (
                      alignTrml.map((route, idx) => {
                        const { depPlandTime, gradeNm } = route;
                        const ranNum = Math.trunc(Math.random() * 7 + 1);
                        return (
                          <ul
                            key={idx}
                            className={
                              depPlandTime < currentTime &&
                              depDate === currentToday &&
                              depPlandTime.toString().slice(8, 10) !== "00"
                                ? `disabled`
                                : null
                            }>
                            <li>{changeTime(depPlandTime)}</li>
                            <li>
                              <img
                                src={`${path}/images/bus_company${ranNum}.png`}
                                alt="고속사"
                              />
                            </li>
                            <li
                              className={`${
                                gradeNm.includes("프리미엄") && "premium"
                              }`}>
                              {gradeNm}
                            </li>
                            <li></li>
                            <li>36석</li>
                            <li className="submitRoute">선택</li>
                          </ul>
                        );
                      })
                    ) : alignTrml.length === 0 && busGrade ? (
                      <ul className="fetchFailed">
                        <li>
                          해당 좌석의 도착 정보를 찾을 수 없습니다.
                          <span>좌석을 전체로 변경 후 다시 검색해주세요.</span>
                          <div
                            onClick={() => {
                              dispatch(setGrade(0));
                            }}>
                            변경하시겠습니까?
                          </div>
                        </li>
                      </ul>
                    ) : (
                      <ul className="fetchFailed">
                        <li>
                          도착 정보를 찾을 수 없습니다.
                          <span>
                            오늘 날짜부터 2일까지 검색 가능합니다.
                            <br /> 다시 검색해주세요.
                          </span>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </RouteInformation>
  );
}

export default RouteInfo;
