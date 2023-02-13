import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./asset/style/GlobalStyle";
import Main from "./components/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        {/* <Route path="/" element={<Ticketing />} /> */}
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
