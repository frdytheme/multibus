import axios from "axios";
import { useEffect, useState } from "react";
import { getBusGrade, getCity, getRequestId, getRoute, getTerminal } from "../asset";

function Test(props) {
  const [city, setCity] = useState([]);
  const [terminal, setTerminal] = useState([]);
  const [route, setRoute] = useState([]);
  const [grade, setGrade] = useState([]);
  const [cityCode, setCityCode] = useState(11);
  const requestId = getRequestId();

  const testApiCall = async () => {
    try {
      const CITY = await axios.get(getCity());
      setCity(CITY.data.response.body.items.item);

      const ROUTE = await axios.get(getRoute());
      setRoute(ROUTE.data.response.body.items.item);
      const GRADE = await axios.get(getBusGrade());
      setGrade(GRADE.data.response.body.items.item);
    } catch (err) {
      console.log(err + "데이터를 불러오지 못했습니다.");
    }
  };

  const requestCode = async () => {
    try {
      const TERMINAL = await axios.get(getTerminal(cityCode));
      setTerminal(TERMINAL.data.response.body.items.item);
    } catch (err) {
      alert(err);
    }
  };

  /*  
    REST API를 요청하는 URL이 길고 복잡해서 json파일로 만들어서 제어하고 필요한 문서에서는 함수로 요청할 수 있도록 API 관련 js파일을 만들어서 관리.
  
  */

  console.log(requestId);
  console.log(city);
  console.log(terminal);
  console.log(route);
  console.log(grade);

  useEffect(() => {
    testApiCall();
  }, []);

  useEffect(() => {
    requestCode();
  }, [cityCode]);

  return (
    <>
      <h2>테스트입니다.</h2>
      <ul
        style={{
          width: "100%",
          listStyle: "none",
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "1fr 1fr 1fr",
          placeContent: "center",
          cursor: "pointer",
          backgroundColor: "#ddd",
          padding: 0,
          marginLeft: 50,
        }}>
        {city.map((city) => (
          <li key={city.cityCode} onClick={() => setCityCode(city.cityCode)}>
            <strong>{city.cityName}</strong>
          </li>
        ))}
      </ul>
      <ul>
        {terminal.map((terminal) => {
          return <li key={terminal.terminalId}>{terminal.terminalNm}</li>;
        })}
      </ul>
    </>
  );
}

export default Test;
