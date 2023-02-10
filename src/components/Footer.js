import React from "react";
import styled from "styled-components";

const FooterBox = styled.footer`
  background-color: #aaa;
  width: 100%;
  height: 150px;
  position: fixed;
  left: 220px;
  bottom:0;
`;

function Footer(props) {
  return <FooterBox></FooterBox>;
}

export default Footer;
