import styled from "styled-components";
import TerminalModal from "./TerminalModal";

const TerminalPopup = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

function TerminalBox() {
  return (
    <>
      <TerminalPopup>
        <TerminalModal />
      </TerminalPopup>
    </>
  );
}

export default TerminalBox;
