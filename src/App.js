import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./asset/style/GlobalStyle";
import { useSelector } from "react-redux";
import ConfirmModal from "./components/ConfirmModal";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import RouteInfo from "./components/RouteInfo";
import TicketBox from "./components/TicketBox";

function App() {
  const modalToggle = useSelector((state) => state.modalSwitch.ticketToggle);
  const confirmToggle = useSelector((state) => state.modalSwitch.confirmToggle);
  return (
    <>
      <GlobalStyle />
      {modalToggle && <TicketBox />}
      {confirmToggle && <ConfirmModal />}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routeInfo" element={<RouteInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
