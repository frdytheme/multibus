import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { busAPI, mainList, mainTerminal, showTerminal, Terminal1 } from "../asset/DB/requestUrl";

const TerminalOption = styled.ul`
  text-align: center;
  margin: 150px auto;
  width: 500px;
  height: 700px;
  background-color: #fff;
  padding: 30px;
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
  p {
    text-align: left;
    font-weight: bold;
    padding: 15px;
  }
  .mainTerminal {
    ul {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: repeat(3, 1fr);
      gap: 5px;
      li {
        font-size: 13px;
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #000;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;

function TerminalModal() {
  const [city, setCity] = useState([]);
  const [terminal, setTerminal] = useState([]);

  const fetchCity = async () => {
    try {
      const res = await axios.get(busAPI.getCity);
      const currentRes = res.data.response.body.items.item;
      setCity(currentRes);
    } catch (err) {
      console.log(err + "cityCode 데이터를 불러오지 못했습니다.");
    }
  };

  const fetchTerminal = async () => {
    try {
      const res = await axios.get(busAPI.getTerminal({city:11}));
      setTerminal(res.data.response.body);
    } catch (err) {
      console.log(err + "terminal 데이터를 불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    fetchCity();
    fetchTerminal();
  }, []);

  console.log(terminal)
  // console.log(Terminal1())

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
              <select name="cityList" id="cityList">
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
      </li>
      <li className="mainTerminal">
        <p>주요 출발지</p>
        <ul>
          {mainList.map((list) => {
            return <li key={list.id}>{list.name}</li>;
          })}
        </ul>
      </li>
      <li className="departTerminal">
        <p>출발지 선택</p>
        <ul>{}</ul>
      </li>
    </TerminalOption>
  );
}

export default TerminalModal;
