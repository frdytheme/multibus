import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 220px;
  height: 100vh;
  background-color: #ddd;
  position:fixed;
  top:0;
  left:0;
`;

function Navigation(props) {

  return (
    <Nav>
      <h1>임시 내비게이션</h1>
    </Nav>
  );
}

export default Navigation;
