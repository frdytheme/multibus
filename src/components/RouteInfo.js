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
  border-left: 1px solid #ddd;
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
                content: "??????";
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
              content: "??????";
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
                background: url(${path}/images/ico_night.png) no-repeat 50% / cover;
              }
              &::before {
                content: "";
                background: url(${path}/images/ico_daytime.png) no-repeat 50% / cover;
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

  // ?????? ????????? ??????????????? ????????? ?????????,?????? ???????????? ?????????
  // ??? 12??? ~ ????????? ?????? ?????? ???????????? API??? undefined ?????? ?????? ??????
  let filterTrml = [];
  if (routeRes === undefined) {
  } else {
    filterTrml = routeRes.filter((route) => {
      return route.arrPlaceNm === arrTrml.data.terminalNm && route.gradeNm.includes(busGrade);
    });
  }

  // ?????? ????????? ??? 12??? ????????? ????????? ????????? ??????.
  const alignTrml = [
    ...filterTrml
    .filter((time) => {
      return time.arrPlandTime > `${depDate}0500` * 1;
    }),
    ...filterTrml.filter((time) => {
      return time.arrPlandTime < `${depDate}0500` * 1;
    }),
  ];

  // ?????? ?????? / ?????? ?????? ??????
  let roadDistance = 0;
  const getRoadTime = () => {
    if (alignTrml.length === 0) return;
    const depHour = alignTrml[0].depPlandTime.toString().slice(8, 10);
    const depMin = alignTrml[0].depPlandTime.toString().slice(10, 12);
    const arrHour = alignTrml[0].arrPlandTime.toString().slice(8, 10);
    const arrMin = alignTrml[0].arrPlandTime.toString().slice(10, 12);
    const hour =
      arrHour === "00" || arrHour === "01" || arrHour === "02" || arrHour === "03"
        ? arrHour * 1 + 24 - depHour
        : arrHour - depHour;
    const min = arrMin - depMin;
    roadDistance = `??? ${90 * hour}km`;
    return `${hour}?????? ${min < 0 ? min * -1 : min}??? ??????`;
  };

  // ??? ??????????????? ?????? ????????? ?????? ?????? ??? return
  const gradeList = alignTrml.filter((trml, idx, route) => {
    return route.findIndex((item) => item.gradeNm === trml.gradeNm) === idx;
  });

  // ???????????? ?????? (ex. 0000 -> 00 : 00)
  const changeTime = (time) => {
    const isTime = time.toString().slice(8, 12);
    let isHour = isTime.slice(0, 2);
    const isMin = isTime.slice(2, 4);
    return isHour + ":" + isMin;
  };

  // ?????? ?????? ?????? (ex 11000 -> 11,000 ???)
  const changeCharge = (charge) => {
    return charge.toLocaleString() + " ???";
  };

  const timeTable = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];

  // datePick, grade ?????? ??? ????????? ????????? ?????????
  useEffect(() => {
    dispatch(fetchRoute({ dep: depId, arr: arrId, date: depDate, list: 1000 }));
  }, [depDate, busGrade]);

  return (
    <RouteInformation>
      <div className="currentStatus">
        <h2>??????????????????</h2>
        <ul className="statusStep">
          <li className="on">??????????????????</li>
          <li className="spreadArrow on">
            <img src={`${path}/images/arrow_process.png`} alt="????????? ?????????" />
          </li>
          <li>??????????????????</li>
          <li className="spreadArrow">
            <img src={`${path}/images/arrow_process.png`} alt="????????? ?????????" />
          </li>
          <li>????????????</li>
        </ul>
      </div>
      <ul className="sideMenu">
        <li>HOME</li>
        <li className={`${sideShow && "show"}`} onClick={() => handleSideMenu()}>
          ??????????????????
          {sideShow ? (
            <img src={`${path}/images/bu_selectArrowC.png`} alt="?????? ?????????" />
          ) : (
            <img src={`${path}/images/bu_selectArrow.png`} alt="?????? ?????????" />
          )}
          <ul>
            <li>??????????????????</li>
            <li>????????????</li>
            <li>????????????</li>
            <li>???????????? ????????????/?????????</li>
            <li>????????????</li>
            <li>????????????</li>
            <li>????????????</li>
            <li>????????????????????????????????????</li>
            <li>????????????????????????</li>
          </ul>
        </li>
      </ul>
      <article>
        <h2>????????????</h2>
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
                ??????
              </Link>
            </div>
            <ul className="chargeInfo">
              <li>
                ???????????? <span>(????????????)</span>
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
                  <img src={`${path}/images/ico_refresh_s.png`} alt="???????????? ?????????" />
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
                    <li key={time} className={time < currentHour ? "disabled" : undefined}>
                      {time}
                    </li>
                  );
                })}
              </ul>
              <div className="routeList">
                <ul className="category">
                  <li>??????</li>
                  <li>?????????</li>
                  <li>??????</li>
                  <li>??????</li>
                  <li>?????????</li>
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
                              <img src={`${path}/images/bus_company${ranNum}.png`} alt="?????????" />
                            </li>
                            <li className={`${gradeNm.includes("????????????") && "premium"}`}>{gradeNm}</li>
                            <li></li>
                            <li>36???</li>
                            <li className="submitRoute">??????</li>
                          </ul>
                        );
                      })
                    ) : alignTrml.length === 0 && busGrade ? (
                      <ul className="fetchFailed">
                        <li>
                          ?????? ????????? ?????? ????????? ?????? ??? ????????????.
                          <span>????????? ????????? ?????? ??? ?????? ??????????????????.</span>
                          <div
                            onClick={() => {
                              dispatch(setGrade(0));
                            }}>
                            ?????????????????????????
                          </div>
                        </li>
                      </ul>
                    ) : (
                      <ul className="fetchFailed">
                        <li>
                          ?????? ????????? ?????? ??? ????????????.
                          <span>
                            ?????? ???????????? 2????????? ?????? ???????????????.
                            <br /> ?????? ??????????????????.
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
