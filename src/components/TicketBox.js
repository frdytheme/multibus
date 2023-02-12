import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { initTrml } from "../store/departTrmlSlice";
import { modalToggle } from "../store/ticketModalToggleSlice";
import MainTrmlList from "./MainTrmlList";
import SearchTrml from "./SearchTrml";
import SetPlace from "./SetPlace";
import TrmlList from "./TrmlList";

const TicketModal = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  .bgBox {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    text-indent: -9999px;
  }
  .ticketBox {
    width: 700px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    z-index: 999;
    p {
      color: var(--blue-color);
      font-size: 14px;
    }
    h2 {
      background-color: #68b3ce;
      color: #fff;
      font-size: 22px;
      font-weight: normal;
      text-align: center;
      padding: 8px 0;
      height: 35px;
      line-height: 35px;
    }
    .ticketList {
      padding: 30px;
    }
  }
`;

function TicketBox() {
  const dispatch = useDispatch();
  const depTrml = useSelector((state) => state.depTrml.data);
  const depState = useSelector((state) => state.depTrml.status);
  
  return (
    <TicketModal>
      <div
        className="bgBox"
        onClick={() => {
          dispatch(modalToggle());
          dispatch(initTrml());
        }}>
        반투명 배경
      </div>
      <div className="ticketBox">
        <h2>출/도착지 선택</h2>
        <ul className="ticketList">
          <SetPlace />
          <SearchTrml />
          {depTrml ? null : <MainTrmlList />}
          {depState ? <MainTrmlList /> : null}
          <TrmlList />
        </ul>
      </div>
    </TicketModal>
  );
}

export default TicketBox;
