import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { path } from "../asset/DB/requestUrl";
import Banner from "./Banner";
import Ticketing from "./Ticketing";

const MainSection = styled.main`
  background: url(${path}/images/main_bg.jpg) no-repeat 50% 0 / cover;
  color: #fff;
  width: calc(100% - 220px);
  margin-left: auto;
  @media screen and (max-width: 1280px) {
    width: calc(100% - 60px);
  }
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
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 339px;
    section {
      display: none;
    }
    h1 {
      display: none;
    }
    .subGnb {
      width: 100%;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      gap: 0;
      li {
        display: none;
      }
      .mobileBtn {
        display: block;
        font-size: 22px;
        width: 100%;
        height: 106px;
        display: flex;
        flex-flow: row;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        p {
          padding-left: 20px;
        }
        .subBtn {
          transform: scale(1.05);
          margin: 0;
        }
        &:nth-child(1) {
          height: 127px;
          padding-top: 50px;
          .subBtn::after {
            transform: translateX(0);
          }
        }
        &:nth-child(2) {
          background-color: rgba(68, 104, 158, 0.5);
          .subBtn::after {
            transform: translateX(-116px);
          }
        }
        &:nth-child(3) {
          background-color: rgba(71, 33, 121, 0.5);
          .subBtn::after {
            transform: translateX(-232px);
          }
        }
        .subBtn::after {
          transform: translateX(0);
        }
      }
    }
  }
`;

function Home(props) {
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
    <MainSection>
      <h1>????????? ????????? ????????? ???, ???????????? ????????? ??????!</h1>
      <ul className="subGnb" ref={subGnbRef}>
        <li className="mobileBtn">
          <div className="subBtn on"></div>
          <p>??????????????????</p>
        </li>
        <li className="mobileBtn">
          <div className="subBtn"></div>
          <p>????????????</p>
        </li>
        <li className="mobileBtn">
          <div className="subBtn"></div>
          <p>??????????????????</p>
        </li>
        <li>
          <div className="subBtn"></div>
          <p>????????????</p>
        </li>
        <li>
          <div className="subBtn"></div>
          <p>??????????????????</p>
        </li>
      </ul>
      <Ticketing />
      <Banner />
    </MainSection>
  );
}

export default Home;
