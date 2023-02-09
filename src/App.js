import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Ticketing from "./components/Ticketing";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Ticketing />} />
      </Routes>
    </>
  );
}

export default App;
