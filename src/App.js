import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Ticketing />} /> */}
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
