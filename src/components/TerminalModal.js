import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { busAPI } from "../asset/DB/requestUrl";

const TerminalOption = styled.ul`
  text-align: center;
  margin: 150px auto;
  width: 500px;
  height: 700px;
  background-color: #fff;
  h2 {
    font-size: 20px;
    padding: 20px;
  }
  form {
    text-align: left;
    fieldset {
      display: flex;
      flex-direction: column;
      padding-left: 50px;
      label {
        margin: 20px 0;
        select,
        input {
          width: 60%;
          height: 25px;
          margin-left: 15px;
        }
      }
    }
  }
`;

function TerminalModal() {
  const [city, setCity] = useState([]);
  // const [terminal, setTerminal] = useState([]);
  // const [route, setRoute] = useState([]);
  // const [grade, setGrade] = useState([]);
  // const [cityCode, setCityCode] = useState();
  const [mainCity, setMainCity] = useState([]);

  const fetchCity = async () => {
    try {
      const res = await axios.get(busAPI.getCity);
      const currentRes = res.data.response.body.items.item;
      setCity(currentRes);
    } catch (err) {
      console.log(err + "cityCode 데이터를 불러오지 못했습니다.");
    }
  };

  // const fetchMainCity = async () => {
  //   const mainList = [
  //     "동서울",
  //     "원주",
  //     "인천공항1터미널",
  //     "인천공항2터미널",
  //     "서울남부",
  //     "인천",
  //     "광주(유·스퀘어)",
  //     "대전복합",
  //     "성남",
  //     "대구서부",
  //     "천안",
  //     "청주",
  //   ];
  //   try {
  //     const res = await axios.get(busAPI.getTerminal(mainList.forEach(city => city)));
  //     const currentRes = res.data.response.body.items.item;
  //     setMainCity([currentRes]);
  //   } catch (err) {
  //     console.log(err + "터미널을 찾을 수 없습니다.");
  //   }
  // };

  // const requestCode = async () => {
  //   try {
  //     const TERMINAL = await axios.get(busAPI.getTerminal());
  //     setTerminal(TERMINAL.data.response.body.items.item);
  //   } catch (err) {
  //     console.log(err + "terminal 데이터를 불러오지 못했습니다.");
  //   }
  // };

  /*  
    REST API를 요청하는 URL이 길고 복잡해서 json파일로 만들어서 제어하고 필요한 문서에서는 함수로 요청할 수 있도록 API 관련 js파일을 만들어서 관리.
  */

  useEffect(() => {
    fetchCity();
    fetchMainCity();
  }, []);

  // useEffect(() => {
  //   requestCode();
  // }, [cityCode]);
  console.log(mainCity);

  return (
    <TerminalOption>
      <li>
        <h2>터미널 선택</h2>
      </li>
      <li>
        <form>
          <fieldset>
            <label>
              지역선택
              <select name="terminalList" id="terminalList">
                <option value="전체">전체</option>
                {city.map((city) => {
                  const { cityCode, cityName } = city;
                  return (
                    <option value={cityName} key={cityCode}>
                      {cityName}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              터미널명
              <input type="text" name="terminalList" id="searchTerminal" />
              <button type="submit">검색</button>
            </label>
          </fieldset>
        </form>
        <div className="Headterminal">
          <p>주요 출발지</p>
          <ul>
            <li></li>
          </ul>
        </div>
      </li>
    </TerminalOption>
  );
}

export default TerminalModal;
