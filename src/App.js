import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./asset/style/GlobalStyle";
import { useSelector } from "react-redux";
import ConfirmModal from "./components/ConfirmModal";
import TicketBox from "./components/TicketBox";
import MainPage from "./components/MainPage";
import RouteInfoPage from "./components/RouteInfoPage";

function App() {
  const modalToggle = useSelector((state) => state.modalSwitch.ticketToggle);
  const confirmToggle = useSelector((state) => state.modalSwitch.confirmToggle);
  return (
    <>
      <GlobalStyle />
      {modalToggle && <TicketBox />}
      {confirmToggle && <ConfirmModal />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/routeInfo" element={<RouteInfoPage />} />
      </Routes>
    </>
  );
}

export default App;
