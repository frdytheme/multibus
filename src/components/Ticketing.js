import styled from "styled-components";
import TerminalBox from "./TerminalBox";
import TicketForm from "./TicketForm";

const TicketingBox = styled.section`
  width: 800px;
  height: 300px;
  color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  div {
    display: flex;
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    border-radius: 7px;
    overflow: hidden;
    line-height: 60px;
    font-size: 22px;
    text-indent: 50px;
    a {
      width: 50%;
      background-color: #eee;
      &:first-child {
        background-color: #fff;
      }
    }
  }
  .ticketBox {
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr 1fr;
    gap: 10px;
    li {
      background-color: #eee;
      border-radius: 7px;
      padding: 15px 20px;
      p {
        font-size: 17px;
        cursor: pointer;
      }
      &.choicePlace {
        background-color: transparent;
        display: flex;
        padding: 0;
        gap: 10px;
        position: relative;
        p {
          background-color: #eee;
          width: 50%;
          border-radius: 7px;
          padding: 15px 20px;
          span {
            margin-top: 15px;
            display: block;
            font-size: 20px;
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
          border-radius: 7px;
          color: #fff;
        }
      }
    }
  }
`;

function Ticketing() {
  return (
    <TicketingBox>
      <div>
        <a href="#">편도</a>
        <a href="#">왕복</a>
      </div>
      <ul className="ticketBox">
        <li className="choicePlace">
          <p>
            출발지<span>선택</span>
          </p>
          <div className="toggleIcon">출발지 도착지 반전</div>
          <p>
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
    </TicketingBox>
  );
}

export default Ticketing;
