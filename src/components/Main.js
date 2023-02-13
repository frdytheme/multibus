import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { path } from "../asset/DB/requestUrl";
import Banner from "./Banner";
import ConfirmModal from "./ConfirmModal";
import Footer from "./Footer";
import Navigation from "./Navigation";
import TicketBox from "./TicketBox";
import Ticketing from "./Ticketing";

const MainSection = styled.main`
  background: url(${path}/images/main_bg.jpg) no-repeat 50% 0 / cover;
  color: #fff;
  width: calc(100% - 220px);
  margin-left: auto;
  height: calc(100vh - 150px);
  text-align: center;
  position: relative;
  letter-spacing: -0.5px;
  h1 {
    font-size: 33px;
    font-weight: normal;
    padding-top: 70px;
    position: relative;
  }
  .subGnb {
    display: flex;
    gap: 98px;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      .subBtn {
        border-radius: 50%;
        width: 53px;
        height: 53px;
        margin-bottom: 15px;
        cursor: pointer;
        overflow: hidden;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:first-child .subBtn::after {
        content: url(${path}/images/main_menuset.png);
        display: block;
        transform: translateX(-58px);
      }
      &:first-child .subBtn.on::after {
        transform: translateX(0);
      }
      &:nth-child(2) .subBtn::after {
        content: url(${path}/images/main_menuset.png);
        display: block;
        transform: translateX(-174px);
      }
      &:nth-child(2) .subBtn.on::after {
        transform: translateX(-116px);
      }
      &:nth-child(3) .subBtn::after {
        content: url(${path}/images/main_menuset.png);
        display: block;
        transform: translateX(-290px);
      }
      &:nth-child(3) .subBtn.on::after {
        transform: translateX(-232px);
      }
      &:nth-child(4) .subBtn::after {
        content: url(${path}/images/main_menuset_freepass.png);
        display: block;
      }
      &:nth-child(5) .subBtn::after {
        content: url(${path}/images/main_menuset_wheelchair_off.png);
        display: block;
      }
    }
  }
`;

function Main() {
  const modalToggle = useSelector((state) => state.modalSwitch.ticketToggle);
  const confirmToggle = useSelector((state) => state.modalSwitch.confirmToggle);
  const subGnbRef = useRef(null);

  const handleGnb = () => {
    const btns = subGnbRef.current.querySelectorAll(".subBtn");
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btns.forEach((btn) => btn.classList.remove("on"));
        e.currentTarget.classList.add("on");
      });
    });
  };

  useEffect(() => {
    handleGnb();
  }, []);

  return (
    <>
      {modalToggle && <TicketBox />}
      {confirmToggle && <ConfirmModal />}
      <Navigation />
      <MainSection>
        <h1>즐거운 여행의 시작과 끝, 프리미엄 버스와 함께!</h1>
        <ul className="subGnb" ref={subGnbRef}>
          <li>
            <div className="subBtn on"></div>
            고속버스예매
          </li>
          <li>
            <div className="subBtn"></div>
            예매확인
          </li>
          <li>
            <div className="subBtn"></div>
            도착시간안내
          </li>
          <li>
            <div className="subBtn"></div>
            프리패스
          </li>
          <li>
            <div className="subBtn"></div>
            휠체어사이트
          </li>
        </ul>
        <Banner />
        <Ticketing />
      </MainSection>
      <Footer />
    </>
  );
}

export default Main;
