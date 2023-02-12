import { useSelector } from "react-redux";
import styled from "styled-components";
import Banner from "./Banner";
import Footer from "./Footer";
import Navigation from "./Navigation";
import TicketBox from "./TicketBox";
import Ticketing from "./Ticketing";

const MainSection = styled.main`
  background-color: #6096b4;
  color: #fff;
  width: calc(100% - 220px);
  margin-left: auto;
  height: calc(100vh - 150px);
  text-align: center;
  position: relative;
  h1 {
    font-size: 34px;
    font-weight: normal;
    padding-top: 70px;
  }
  .subGnb {
    display: flex;
    gap: 98px;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      .subBtn {
        background-color: #fff;
        border-radius: 50%;
        width: 53px;
        height: 53px;
        margin-bottom: 15px;
        cursor: pointer;
      }
    }
  }
`;

function Main() {
  const modalToggle = useSelector((state) => state.modalSwitch);

  return (
    <>
      {modalToggle && <TicketBox />}
      <Navigation />
      <MainSection>
        <h1>즐거운 여행의 시작과 끝, 프리미엄 버스와 함께!</h1>
        <ul className="subGnb">
          <li>
            <div className="subBtn"></div>고속버스예매
          </li>
          <li>
            <div className="subBtn"></div>예매확인
          </li>
          <li>
            <div className="subBtn"></div>도착시간안내
          </li>
          <li>
            <div className="subBtn"></div>프리패스
          </li>
          <li>
            <div className="subBtn"></div>휠체어사이트
          </li>
        </ul>
        <Ticketing />
        <Banner />
      </MainSection>
      <Footer />
    </>
  );
}

export default Main;
