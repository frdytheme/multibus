import React from "react";
import styled from "styled-components";
import { path } from "../asset/DB/requestUrl";

const FooterBox = styled.footer`
  background-color: #2e2d3d;
  width: calc(100% - 220px);
  height: 150px;
  /* position: fixed; */
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
      width: 50px;
      object-fit: cover;
    }
  }
`;

function Footer(props) {
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
        <div className="otherSite"></div>
        <div className="kobusIcon">
          <img src={`${path}/images/foot_com1.png`} alt="" />
          <img src={`${path}/images/foot_com2.png`} alt="" />
        </div>
      </div>
    </FooterBox>
  );
}

export default Footer;
