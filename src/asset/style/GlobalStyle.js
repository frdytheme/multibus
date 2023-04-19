import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --blue-color: #68b3ce;
  --blue-border: #7bc6e4;
  --grey-box: #f3f4f6;
  --grey-border: 1px solid #f1f2f4;
}

body {
  overflow-x: hidden;
}

`;

export const focusBorder = css`
  outline: solid var(--blue-border) 2px;
  box-shadow: var(--blue-border) 0px 1px 0px, var(--blue-border) 0px 0px 8px;
`;

export default GlobalStyle;
