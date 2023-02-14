import React from "react";
import styled from "styled-components";
import { path } from "../asset/DB/requestUrl";

const BannerBox = styled.ul`
  width: 100%;
  height: 150px;
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  li {
    width: 25%;
    padding: 25px 0 0 30px;
    text-align: left;
    span {
      color: var(--blue-color);
      font-size: 13px;
    }
    p {
      color: #fff;
      font-size: 18px;
      padding: 20px 9.5vw 0 0;
      position: relative;
      line-height: 1.5;
      span {
        display: block;
        width: 6.5vw;
        height: 6.5vw;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    &:first-child {
      background-color: rgba(38, 114, 137, 0.8);
    }
    &:nth-child(2) {
      background-color: rgba(19, 129, 139, 0.8);
      span {
        right: 2%;
      }
    }
    &:nth-child(3) {
      background-color: rgba(29, 87, 120, 0.8);
      span {
        width: 9vw;
      }
    }
    &:nth-child(4) {
      background-color: rgba(52, 68, 121, 0.8);
    }
    .infomation {
      display: flex;
      width:90%;
      align-items: center;
      justify-content: space-evenly;
      padding: 10px 0;
      li {
        background-color: transparent;
        text-align: center;
        padding: 0;
        font-size: 12px;
        color: #aaa;
        img {
          display: block;
          padding: 10px;
          margin: 0 auto;
        }
      }
    }
  }
`;
function Banner(props) {
  return (
    <BannerBox>
      <li>
        <span>프리미엄 골드 익스프레스</span>
        <p>
          도로 위 비즈니스 클래스 프리미엄 고속버스
          <span>
            <img src={`${path}/images/mainBnrImg.png`} alt="" />
          </span>
        </p>
      </li>
      <li>
        <span>ZERODAY EXPRESS</span>
        <p>
          고속버스 당일배송 온라인 택배신청
          <span>
            <img src={`${path}/images/mainBnrImg2.png`} alt="" />
          </span>
        </p>
      </li>
      <li>
        <span>All Pass 신한카드 출시</span>
        <p>
          고속/시외버스 앱 결제시 30% 할인
          <span>
            <img src={`${path}/images/mainBnrImg1.png`} alt="" />
          </span>
        </p>
      </li>
      <li>
        <span>이용안내</span>
        <ul className="infomation">
          <li>
            {" "}
            <img src={`${path}/images/ico_info1.png`} alt="" /> 예매안내
          </li>
          <li>
            {" "}
            <img src={`${path}/images/ico_info2.png`} alt="" /> 환승안내
          </li>
          <li>
            {" "}
            <img src={`${path}/images/ico_info4.png`} alt="" /> 터미널안내
          </li>
        </ul>
      </li>
    </BannerBox>
  );
}

export default Banner;
