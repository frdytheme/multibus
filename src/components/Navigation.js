import React from "react";
import styled from "styled-components";
import { nowDay, path, today } from "../asset/DB/requestUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initTrml } from "../store/departTrmlSlice";
import { initArrTrml } from "../store/arrTrmlSlice";
import { inputDepDate, inputToday } from "../store/getDateSlice";
import { setGrade } from "../store/getGradeSlice";

const Nav = styled.nav`
  width: 220px;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  letter-spacing: -0.4px;
  h1 {
    a {
      font-size: 13px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      margin-top: 45px;
      cursor: pointer;
      img {
        margin-bottom: 12px;
      }
    }
  }
  .mainGnb {
    font-size: 15px;
    margin: 38px 0 7px;
    li {
      padding: 9px 10px 9px 30px;
      height: 23px;
      line-height: 23px;
      user-select: none;
      .tabImg {
        display: none;
      }
    }
    .tabMenu {
      display: none;
    }
  }
  .subBanner {
    li {
      border-top: 1px solid #ddd;
      padding: 20px 0 0 30px;
      position: relative;
      height: 110px;
      &::after {
        content: "";
        display: block;
        position: absolute;
        right: 10px;
        bottom: 5px;
      }
      &:first-child::after {
        content: url(${path}/images/main_wheel.jpg);
      }
      &:nth-child(2)::after {
        content: url(${path}/images/main_app.png);
        right: 29px;
        bottom: 20px;
      }
      span {
        font-size: 12px;
        color: #999;
      }
      p {
        margin-top: 10px;
        font-size: 18px;
        line-height: 1.5;
        color: #666;
      }
    }
    .noticeSwipe {
      p {
        font-size: 13px;
        margin-top: 5px;
      }
      em {
        display: block;
        margin-top: 10px;
        font-size: 12px;
        color: #bbb;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    width: 60px;
    h1 {
      margin: 75px 0 65px;
      a {
        img {
          width: 38px;
          height: 34px;
        }
        span {
          display: none;
        }
      }
    }
    .mainGnb li {
      position: relative;
      margin: 4px 0;
      &.tabMenu {
        display: block;
        margin-bottom: 25px;
        img {
          width: 60px;
          height: 50px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      p {
        display: none;
      }
      .tabImg {
        display: block;
        width: 24px;
        height: 22px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &:nth-of-type(3) .tabImg {
        width: 20px;
        height: 21px;
      }
      &:nth-of-type(4) .tabImg {
        width: 23px;
        height: 20px;
      }
      &:nth-of-type(5) .tabImg {
        width: 21px;
        height: 24px;
      }
      &:nth-of-type(6) .tabImg {
        width: 22px;
        height: 20px;
      }
      &:nth-of-type(8) .tabImg {
        width: 21px;
        height: 27px;
      }
      &:nth-of-type(9) .tabImg {
        width: 28px;
        height: 25px;
      }
      &:nth-of-type(10) .tabImg {
        width: 19px;
        height: 27px;
      }
    }
    .subBanner {
      display: none;
    }
    .tabIcon {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 150px;
      display: grid;
      grid-template-rows: 2fr 1fr;
      div {
        border-top: 1px solid #e5e5e5;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function Navigation() {
  const dispatch = useDispatch();

  return (
    <Nav>
      <h1>
        <Link
          to="/"
          onClick={() => {
            dispatch(initTrml());
            dispatch(initArrTrml());
            dispatch(inputToday(nowDay));
            dispatch(inputDepDate(today));
            dispatch(setGrade(0));
          }}>
          <img src={`${path}/images/logo_pc.png`} alt="로고이미지" />
          <span>고속버스통합예매</span>
        </Link>
      </h1>
      <ul className="mainGnb">
        <li className="tabMenu tabImg">
          <img src={`${path}/images/view_tablet.png`} alt="" />
        </li>
        <li>
          <img src={`${path}/images/menu01.png`} alt="" className="tabImg" />
          <p>고속버스예매</p>
        </li>
        <li>
          <img src={`${path}/images/menu02.png`} alt="" className="tabImg" />
          <p>예매확인</p>
        </li>
        <li>
          <img src={`${path}/images/menu03.png`} alt="" className="tabImg" />
          <p>운행정보</p>
        </li>
        <li>
          <img src={`${path}/images/menu04.png`} alt="" className="tabImg" />
          <p>고속버스 프리패스/정기권</p>
        </li>
        <li>
          <img src={`${path}/images/menu06.png`} alt="" className="tabImg" />
          <p>이용안내</p>
        </li>
        <li>
          <p>공지사항</p>
        </li>
        <li>
          <img src={`${path}/images/menu09.png`} alt="" className="tabImg" />
          <p>고객센터</p>
        </li>
        <li>
          <img src={`${path}/images/menu07.png`} alt="" className="tabImg" />
          <p>전국고속버스운송사업조합</p>
        </li>
        <li>
          <img src={`${path}/images/menu08.png`} alt="" className="tabImg" />
          <p>터미널사업자협회</p>
        </li>
      </ul>
      <ul className="subBanner">
        <li>
          <span>
            휠체어 좌석
            <br />
            예매 사이트
          </span>
          <p>
            함께가요!
            <br />
            행복여행
          </p>
        </li>
        <li>
          <span>예매부터 탑승까지!</span>
          <p>
            고속버스
            <br />
            티머니
          </p>
        </li>
        <li className="noticeSwipe">
          <span>NOTICE</span>
          <p>공지사항 SWIPE 리스트</p>
          <em>2023.02.14</em>
        </li>
      </ul>
      <div className="tabIcon">
        <div>
          <img src={`${path}/images/ico_app.png`} alt="" />
        </div>
        <div>
          <img src={`${path}/images/ico_notice.png`} alt="" />
        </div>
      </div>
    </Nav>
  );
}

export default Navigation;
