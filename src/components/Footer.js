import React, { useState } from "react";
import styled from "styled-components";
import { path } from "../asset/DB/requestUrl";

const FooterBox = styled.footer`
  background-color: #2e2d3d;
  width: calc(100% - 220px);
  height: 150px;
  margin-left: auto;
  padding: 30px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  ul {
    li {
      font-size: 11px;
      line-height: 1.8;
      letter-spacing: -0.4px;
      ul {
        display: flex;
        align-items: center;
      }
      .busBrand {
        img {
          padding: 0 10px;
        }
      }
      .footerMenu {
        margin-top: 9px;
        li {
          font-size: 12px;
          color: #aaa;
          padding: 0 10px;
          border-right: 1px solid #444;
          &:nth-child(2) {
            font-size: 14px;
            font-weight: bold;
            color: #a38b5d;
          }
        }
      }
    }
    .copyright {
      color: #666;
      padding-left: 10px;
      &:nth-child(2) {
        font-size: 10px;
      }
    }
  }
  .sideBox {
    img {
      width: 100px;
      object-fit: cover;
    }
    .otherSite {
      font-size: 13px;
      position: relative;
      color: #666;
      width: 210px;
      height: 35px;
      line-height: 32px;
      border: 1px solid #666;
      padding: 0 20px;
      box-sizing: border-box;
      margin-bottom: 20px;
      img {
        width: 11px;
        height: 6px;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
      }
      ul {
        width: 100%;
        position: absolute;
        bottom: 100%;
        left: 0;
        user-select: none;
        li {
          background-color: #f9f9f9;
          padding: 10px;
          border-bottom: 1px solid #e6e6e6;
          &:hover {
            background-color: #fff;
            color: var(--blue-color);
            font-weight: bold;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

function Footer() {
  const [otherChk, setOtherChk] = useState(false);

  return (
    <FooterBox>
      <ul>
        <li>
          <ul className="busBrand">
            <li>
              <img src={`${path}/images/foot1_s.png`} alt="고속버스 브랜드" />
            </li>
            <li>
              <img src={`${path}/images/foot5_s.png`} alt="고속버스 브랜드" />
            </li>
            <li>
              <img src={`${path}/images/foot3_s.png`} alt="고속버스 브랜드" />
            </li>
            <li>
              <img src={`${path}/images/foot6_s.png`} alt="고속버스 브랜드" />
            </li>
            <li>
              <img src={`${path}/images/foot2_s.png`} alt="고속버스 브랜드" />
            </li>
            <li>
              <img src={`${path}/images/foot7_s.png`} alt="고속버스 브랜드" />
            </li>
            <li>
              <img src={`${path}/images/foot8_s.png`} alt="고속버스 브랜드" />
            </li>
            <li>
              <img src={`${path}/images/foot4_s.png`} alt="고속버스 브랜드" />
            </li>
          </ul>
        </li>
        <li>
          <ul className="footerMenu">
            <li>서비스 이용약관</li>
            <li>개인정보 처리방침</li>
            <li>고속버스 운송약관</li>
            <li>티머니</li>
            <li>고객센터 1644-9030</li>
          </ul>
        </li>
        <li className="copyright">
          서울특별시 서초구 신반포로 194 통신판매업신고: 2009-서울서초 0587호
          대표자 : 이광재
        </li>
        <li className="copyright">
          COPYRIGHT© 2016. WWW.KOBUS.CO.KR . ALL RIGHT RESERVED
        </li>
      </ul>
      <div className="sideBox">
        <div
          className="otherSite"
          onClick={() => {
            setOtherChk(!otherChk);
          }}>
          관련사이트
          {otherChk ? (
            <img
              src={`${path}/images/bu_selectArrow.png`}
              alt="화살표 아이콘"
            />
          ) : (
            <img
              src={`${path}/images/bu_selectArrowC.png`}
              alt="화살표 아이콘"
            />
          )}
          {otherChk && (
            <ul>
              <li>관련사이트</li>
              <li>장애인 휠체어 사이트</li>
              <li>국가대중교통정보센터</li>
              <li>인천장애인콜택시</li>
              <li>센트럴시티터미널</li>
              <li>시외버스 통합예매시스템</li>
            </ul>
          )}
        </div>
        <div className="kobusIcon">
          <img src={`${path}/images/foot_com1.png`} alt="운송사업조합 로고" />
          <img src={`${path}/images/foot_com2.png`} alt="터미널사업조합 로고" />
        </div>
      </div>
    </FooterBox>
  );
}

export default Footer;
