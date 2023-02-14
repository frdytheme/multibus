import React from "react";
import styled from "styled-components";
import { path } from "../asset/DB/requestUrl";

const UserInfo = styled.ul`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  margin: 6px 40px 0 0;
  letter-spacing: -0.4px;
  li {
    cursor: pointer;
    font-size: 11px;
    color: #fff;
    padding: 6px 10px;
    position: relative;
    &:first-child {
      background-color: #cfa346;
      border: 1px solid #fff;
      margin-right: 10px;
      font-weight: bold;
      &::after {
        right: -13px;
      }
    }
    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 9px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      opacity: 0.5;
    }
    &:last-child {
      &::after {
        display: none;
      }
      &::before {
        content: url(${path}/images/bu_selectArrowW.png);
        position: absolute;
        right: -6px;
        top: 4px;
      }
    }
  }
`;

function UserNav() {
  return (
    <UserInfo>
      <li>로그인</li>
      <li>회원가입</li>
      <li>마이페이지</li>
      <li>결제내역조회</li>
      <li>사이트맵</li>
      <li>한국어</li>
    </UserInfo>
  );
}

export default UserNav;
