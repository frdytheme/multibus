import React from "react";
import styled from "styled-components";

const BannerBox = styled.ul`
  width: 100%;
  height: 150px;
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #000;
  h1 {
    font-size: 2em;
  }
`;

function Banner(props) {
  return (
    <BannerBox>
      <li>
        <h1>배너입니다.</h1>
      </li>
    </BannerBox>
  );
}

export default Banner;
