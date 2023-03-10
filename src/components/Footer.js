import React, { useState } from "react";
import styled from "styled-components";
import { path } from "../asset/DB/requestUrl";

const FooterBox = styled.footer`
  background-color: #2e2d3d;
  width: calc(100% - 220px);
  @media screen and (max-width: 1280px) {
    width: calc(100% - 60px);
    overflow: hidden;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
              <img src={`${path}/images/foot1_s.png`} alt="???????????? ?????????" />
            </li>
            <li>
              <img src={`${path}/images/foot5_s.png`} alt="???????????? ?????????" />
            </li>
            <li>
              <img src={`${path}/images/foot3_s.png`} alt="???????????? ?????????" />
            </li>
            <li>
              <img src={`${path}/images/foot6_s.png`} alt="???????????? ?????????" />
            </li>
            <li>
              <img src={`${path}/images/foot2_s.png`} alt="???????????? ?????????" />
            </li>
            <li>
              <img src={`${path}/images/foot7_s.png`} alt="???????????? ?????????" />
            </li>
            <li>
              <img src={`${path}/images/foot8_s.png`} alt="???????????? ?????????" />
            </li>
            <li>
              <img src={`${path}/images/foot4_s.png`} alt="???????????? ?????????" />
            </li>
          </ul>
        </li>
        <li>
          <ul className="footerMenu">
            <li>????????? ????????????</li>
            <li>???????????? ????????????</li>
            <li>???????????? ????????????</li>
            <li>?????????</li>
            <li>???????????? 1644-9030</li>
          </ul>
        </li>
        <li className="copyright">
          ??????????????? ????????? ???????????? 194 ?????????????????????: 2009-???????????? 0587??? ????????? : ?????????
        </li>
        <li className="copyright">COPYRIGHT?? 2016. WWW.KOBUS.CO.KR . ALL RIGHT RESERVED</li>
      </ul>
      <div className="sideBox">
        <div
          className="otherSite"
          onClick={() => {
            setOtherChk(!otherChk);
          }}>
          ???????????????
          {otherChk ? (
            <img src={`${path}/images/bu_selectArrow.png`} alt="????????? ?????????" />
          ) : (
            <img src={`${path}/images/bu_selectArrowC.png`} alt="????????? ?????????" />
          )}
          {otherChk && (
            <ul>
              <li>???????????????</li>
              <li>????????? ????????? ?????????</li>
              <li>??????????????????????????????</li>
              <li>????????????????????????</li>
              <li>????????????????????????</li>
              <li>???????????? ?????????????????????</li>
            </ul>
          )}
        </div>
        <div className="kobusIcon">
          <img src={`${path}/images/foot_com1.png`} alt="?????????????????? ??????" />
          <img src={`${path}/images/foot_com2.png`} alt="????????????????????? ??????" />
        </div>
      </div>
    </FooterBox>
  );
}

export default Footer;
