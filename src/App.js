import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

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
