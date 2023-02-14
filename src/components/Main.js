import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ConfirmModal from "./ConfirmModal";
import Footer from "./Footer";
import Home from "./Home";
import Navigation from "./Navigation";
import RouteInfo from "./RouteInfo";
import TicketBox from "./TicketBox";
import UserNav from "./UserNav";

function Main() {
  const modalToggle = useSelector((state) => state.modalSwitch.ticketToggle);
  const confirmToggle = useSelector((state) => state.modalSwitch.confirmToggle);

  return (
    <>
      {modalToggle && <TicketBox />}
      {confirmToggle && <ConfirmModal />}
      <Navigation />
      <UserNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routeInfo" element={<RouteInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
