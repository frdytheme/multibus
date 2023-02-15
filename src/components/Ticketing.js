import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchCityCode } from "../store/fetchCitySlice";
import { confirmToggle, modalToggle } from "../store/ticketModalToggleSlice";
import { changeArrDep, initArrTrml } from "../store/arrTrmlSlice";
import { initTrml, setTrml } from "../store/departTrmlSlice";
import { nxtDepTime, path } from "../asset/DB/requestUrl";
import DatePickerCustom from "../asset/DB/DatePickerCustom";
import { setGrade } from "../store/getGradeSlice";
import { inputDepDate } from "../store/getDateSlice";

const TicketingOption = styled.section`
  width: 750px;
  height: 300px;
  color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -48%);
  text-align: left;
  & > div {
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-bottom: 8px;
    border-radius: 7px;
    overflow: hidden;
    font-size: 18px;
    text-indent: 55px;
    p {
      width: 50%;
      background-color: #eee;
      position: relative;
      user-select: none;
      color: #b3b3b3;
      &:first-child {
        &::after {
          content: "";
          background: url(${path}/images/ico_oneway.png) no-repeat center /
            cover;
          display: block;
          width: 19px;
          height: 10px;
          position: absolute;
          top: 50%;
          left: 8%;
          transform: translateY(-30%);
        }
      }
      &:nth-child(2) {
        &::after {
          content: "";
          background: url(${path}/images/ico_roundtrip.png) no-repeat center /
            cover;
          display: block;
          width: 19px;
          height: 19px;
          position: absolute;
          top: 50%;
          left: 7%;
          transform: translateY(-40%);
        }
      }
      &.on {
        background-color: #fff;
        color: var(--blue-color);
        &:first-child {
          &::after {
            background: url(${path}/images/ico_oneway_on.png) no-repeat center /
              cover;
          }
        }
        &:nth-child(2) {
          &::after {
            background: url(${path}/images/ico_roundtrip_on.png) no-repeat
              center / cover;
          }
        }
        &::before {
          content: "";
          background: url(${path}/images/ico_tab_s_on.png) no-repeat center /
            cover;
          display: block;
          width: 12px;
          height: 11px;
          position: absolute;
          top: 50%;
          left: 25%;
          transform: translateY(-30%);
        }
        & .directWay {
          display: block;
        }
      }
      .directWay {
        position: absolute;
        width: 160px;
        top: 5%;
        right: 0;
        display: block;
        margin: 0;
        overflow: visible;
        text-indent: 0;
        display: none;
        span {
          color: #b3b3b3;
          font-size: 15px;
          margin: 0 20px;
          position: relative;
          &.checked {
            color: #000;
            &::after {
              content: "";
              background: url(${path}/images/custom_chk_s.png);
              width: 11px;
              height: 12px;
              display: block;
              position: absolute;
              top: 15%;
              right: -50%;
            }
          }
        }
      }
    }
  }
  .ticketBox {
    width: 100%;
    height: 175px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr 1fr;
    gap: 8px;
    li {
      background-color: #f3f4f6;
      border-radius: 5px;
      padding: 17px 20px;
      p {
        font-size: 14px;
        cursor: pointer;
      }
      &.choicePlace {
        background-color: transparent;
        display: flex;
        padding: 0;
        gap: 8px;
        position: relative;
        p {
          background-color: #f3f4f6;
          width: 50%;
          border-radius: 5px;
          padding: 17px 20px;
          span {
            margin-top: 10px;
            display: block;
            font-size: 19px;
            color: #b3b3b3;
          }
        }
        .toggleIcon {
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          text-indent: -9999px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          &::after {
            content: "";
            background: url(${path}/images/arrow_toggle_s.png);
            display: block;
            width: 100%;
            height: 100%;
          }
          &:hover::after {
            background: url(${path}/images/arrow_toggle_s.png) no-repeat center
              bottom / cover;
          }
        }
      }
      .seatGrade {
        display: flex;
        align-items: center;
        margin-top: 15px;
        li {
          width: auto;
          padding: 0 15px 0 0;
          position: relative;
          cursor: pointer;
          line-height: 21px;
          margin-right: 10px;
          user-select: none;
          color: #b3b3b3;
          &.checked {
            color: #000;
          }
          &:first-child {
            margin-right: 18px;
            &:hover {
              color: #000;
            }
          }
          &:nth-child(2) {
            color: #e9a410;
            width: 85px;
            background: url(${path}/images/ico_grade1_s.png) no-repeat 65px
              center;
            &.checked::after {
              content: url(${path}/images/ico_gradeY_s_on.png);
            }
            &::before {
              content: url(${path}/images/ico_premium_s.png);
              position: absolute;
              left: 20%;
              top: -100%;
            }
            &:hover,
            &.checked {
              color: #d29400;
              background: url(${path}/images/ico_grade1_s_on.png) no-repeat 65px
                center;
              &::before {
                content: url(${path}/images/ico_premium_s_on.png);
              }
            }
          }
          &:nth-child(3) {
            width: 53px;
            background: url(${path}/images/ico_grade2_s.png) no-repeat 35px
              center;
            &:hover,
            &.checked {
              background: url(${path}/images/ico_grade2_s_on.png) no-repeat 35px
                center;
              color: #000;
            }
          }
          &:nth-child(4) {
            width: 53px;
            background: url(${path}/images/ico_grade3_s.png) no-repeat 35px
              center;
            &:hover,
            &.checked {
              background: url(${path}/images/ico_grade3_s_on.png) no-repeat 35px
                center;
              color: #000;
            }
          }
          &.checked::after {
            content: url(${path}/images/ico_grade_s_on.png);
            display: inline-block;
            width: 11px;
            height: 12px;
            position: absolute;
            right: 0;
          }
        }
      }
      &:last-child {
        padding: 0;
        button {
          border: none;
          width: 100%;
          height: 100%;
          font-size: 18px;
          font-weight: bold;
          background-color: #b8becc;
          border-radius: 5px;
          color: #fff;
          cursor: pointer;
          &:hover {
            background-color: #a1abc2;
          }
          &.full {
            background-color: #5754b5;
          }
          &.full:hover {
            background-color: #4b4a73;
          }
        }
      }
    }
    .dateBox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      &::after {
        content: "";
        background: url(${path}/images/input_after.png) no-repeat center / cover;
        display: block;
        width: 8px;
        height: 8px;
        position: absolute;
        bottom: 5px;
        right: 5px;
      }
      .dateTxt {
        display: block;
        p {
          margin-bottom: 12px;
        }
        span {
          font-size: 24px;
        }
      }
      .dateChoice {
        height: 26px;
        line-height: 26px;
        span {
          padding: 0 10px;
          cursor: pointer;
          &.checked {
            color: var(--blue-color);
          }
        }
        .react-datepicker-wrapper {
          width: auto;
        }
        img {
          width: 28px;
          height: 26px;
          object-fit: cover;
          margin-left: 15px;
          cursor: pointer;
        }
      }
    }
  }
`;

function Ticketing() {
  const dispatch = useDispatch();
  const depTrml = useSelector((state) => state.depTrml.data.terminalNm);
  const depTrmlObj = useSelector((state) => state.depTrml.data);
  const arrTrml = useSelector((state) => state.arrTrml.data.terminalNm);
  const arrTrmlObj = useSelector((state) => state.arrTrml.data);
  const today = useSelector((state) => state.getDate.showToday);
  const nxtDay = useSelector((state) => state.getDate.showNxtday);
  const [oneWay, setOneWay] = useState(false);
  const [check, setCheck] = useState(false);
  const [dateChk, setDateChk] = useState(false);
  const gradeRef = useRef(null);

  // 버스 등급 체크 classList 라디오버튼 로직
  const handleGradeChk = () => {
    const lis = gradeRef.current.querySelectorAll("li");
    lis.forEach((li) => {
      li.addEventListener("click", (e) => {
        lis.forEach((li) => {
          li.classList.remove("checked");
          e.currentTarget.classList.add("checked");
        });
      });
    });
  };

  // 조회하기 클릭 시 알림창
  const confirmAlert = () => {
    alert(
      "당일출발차량의 경우 예매 후 당일취소를 하셔도 취소위약금이 청구되오니 유의 바랍니다."
    );
    dispatch(confirmToggle());
  };

  // 출도착지 초기화 함수.
  const initPlace = () => {
    dispatch(initTrml());
    dispatch(initArrTrml());
  };

  // 출도착지 반전 함수.
  const changePlace = () => {
    const currentArr = { ...depTrmlObj };
    dispatch(setTrml(arrTrmlObj));
    dispatch(changeArrDep(currentArr));
  };

  useEffect(() => {
    handleGradeChk();
    dispatch(fetchCityCode());
  }, []);

  return (
    <>
      <TicketingOption>
        <div>
          <p className="on">
            편도
            <span className="directWay">
              <span className="checked">직통</span>
              <span>환승</span>
            </span>
          </p>
          <p>왕복</p>
        </div>
        <ul className="ticketBox">
          <li className="choicePlace">
            <p
              onClick={() => {
                dispatch(modalToggle());
                dispatch(initArrTrml());
                dispatch(initTrml());
              }}>
              출발지
              <span style={depTrml && { color: "#000" }}>
                {depTrml ? depTrml : "선택"}
              </span>
            </p>
            <div
              className="toggleIcon"
              onClick={() => {
                changePlace();
              }}></div>
            <p
              onClick={() => {
                dispatch(modalToggle());
              }}>
              도착지
              <span style={depTrml && { color: "#000" }}>
                {arrTrml ? arrTrml : "선택"}
              </span>
            </p>
          </li>
          <li className="dateBox">
            <div className="dateTxt">
              <p>가는날</p>
              <span>{dateChk ? nxtDay : today}</span>
            </div>
            <div className="dateChoice">
              <span
                className={`${dateChk || "checked"}`}
                onClick={() => setDateChk(false)}>
                오늘
              </span>
              <span
                className={`${dateChk && "checked"}`}
                onClick={() => {
                  setDateChk(true);
                  dispatch(inputDepDate(nxtDepTime));
                }}>
                내일
              </span>
              <DatePickerCustom />
            </div>
          </li>
          <li>
            <p>등급</p>
            <ul className="seatGrade" ref={gradeRef}>
              <li
                className="checked"
                onClick={() => {
                  dispatch(setGrade(0));
                }}>
                전체
              </li>
              <li
                onClick={() => {
                  dispatch(setGrade(7));
                }}>
                프리미엄
              </li>
              <li
                onClick={() => {
                  dispatch(setGrade(1));
                }}>
                우등
              </li>
              <li
                onClick={() => {
                  dispatch(setGrade(5));
                }}>
                일반
              </li>
            </ul>
          </li>
          <li>
            <button
              className={`${depTrml && arrTrml && "full"}`}
              onClick={() => {
                if (depTrml && arrTrml) {
                  confirmAlert();
                } else {
                  alert("출발지와 도착지를 선택해주세요.");
                }
              }}>
              조회하기
            </button>
          </li>
        </ul>
      </TicketingOption>
    </>
  );
}

export default Ticketing;
