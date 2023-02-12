import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchCityCode } from "../store/fetchCitySlice";
import { fetchTrml } from "../store/fetchTrmlSlice";
import { modalToggle } from "../store/ticketModalToggleSlice";

const TicketingOption = styled.section`
  width: 750px;
  height: 300px;
  color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -48%);
  text-align: left;
  div {
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
      &:first-child {
        background-color: #fff;
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
      background-color: #eee;
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
          background-color: #eee;
          width: 50%;
          border-radius: 5px;
          padding: 17px 20px;
          span {
            margin-top: 10px;
            display: block;
            font-size: 19px;
            color: #999;
          }
        }
        .toggleIcon {
          position: absolute;
          width: 30px;
          height: 30px;
          background-color: #fff;
          border-radius: 50%;
          text-indent: -9999px;
          border: 1px solid #ddd;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          &:hover {
            border-color: lightblue;
          }
        }
      }
      .seatGrade {
        display: flex;
        margin-top: 15px;
        li {
          width: 25%;
          padding: 0;
        }
      }
      &:last-child {
        padding: 0;
        button {
          border: none;
          width: 100%;
          height: 100%;
          font-size: 20px;
          background-color: #b8becc;
          border-radius: 5px;
          color: #fff;
        }
      }
    }
  }
`;

function Ticketing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCityCode());
    dispatch(fetchTrml({}));
  }, []);

  return (
    <>
      <TicketingOption>
        <div>
          <p>편도</p>
          <p>왕복</p>
        </div>
        <ul className="ticketBox">
          <li className="choicePlace">
            <p onClick={() => dispatch(modalToggle())}>
              출발지<span>선택</span>
            </p>
            <div className="toggleIcon">출발지 도착지 반전</div>
            <p onClick={() => dispatch(modalToggle())}>
              도착지<span>선택</span>
            </p>
          </li>
          <li>
            <p>가는날</p>
          </li>
          <li>
            <p>등급</p>
            <ul className="seatGrade">
              <li>전체</li>
              <li>프리미엄</li>
              <li>우등</li>
              <li>일반</li>
            </ul>
          </li>
          <li>
            <button>조회하기</button>
          </li>
        </ul>
      </TicketingOption>
    </>
  );
}

export default Ticketing;
