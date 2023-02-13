import React from "react";
import styled from "styled-components";
import { path } from "../asset/DB/requestUrl";

const Nav = styled.nav`
  width: 220px;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  letter-spacing: -0.4px;
  h1 {
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
  .mainGnb {
    font-size: 15px;
    margin: 38px 0 7px;
    li {
      padding: 9px 10px 9px 30px;
      height: 23px;
      line-height: 23px;
      cursor: pointer;
      &:hover {
        color: var(--blue-color);
      }
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
`;

function Navigation() {
  return (
    <Nav>
      <h1>
        <img src={`${path}/images/logo_pc.png`} alt="로고이미지" />
        고속버스통합예매
      </h1>
      <ul className="mainGnb">
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
    </Nav>
  );
}

export default Navigation;
