import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { busAPI, mainList2 } from "../asset/DB/requestUrl";

const TerminalOption = styled.ul`
  text-align: center;
  margin: 150px auto;
  width: 500px;
  background-color: #fff;
  padding: 20px;
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
  .placeList {
    ul {
      height: 200px;
      border: 1px solid #000;
      overflow-y: scroll;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: left;
      grid-auto-rows: 40px;
      li {
        border-bottom: 1px solid #d9d9d9;
        line-height: 40px;
        text-indent: 20px;
        &:nth-child(even) {
          border-left: 1px solid #d9d9d9;
        }
        &:hover {
          background-color: #ddd;
          cursor: pointer;
        }
      }
    }
  }
`;

function TerminalModal() {
  const [city, setCity] = useState([]);
  const [mainTerm, setMainTerm] = useState([]);
  const [placeList, setPlaceList] = useState([]);
  const [cityCode, setCityCode] = useState("");

  const fetchCity = async () => {
    try {
      const res = await axios.get(busAPI.getCity);
      const currentRes = res.data.response.body.items.item;
      setCity(currentRes);
    } catch (err) {
      console.log(err + "cityCode 데이터를 불러오지 못했습니다.");
    }
  };

  const fetchMainTerm = async () => {
    try {
      const res = await axios.get(busAPI.getTerminal({ list: 2117 }));
      const result = res.data.response.body.items.item;
      const currentRes = mainList2.map((name) => {
        return result.filter((nm) => nm.terminalNm === name)[0];
      });
      setMainTerm(currentRes);
    } catch (err) {
      console.log(err + "주요 터미널 정보를 불러오지 못했습니다.");
    }
  };

  const setTermList = async () => {
    try {
      const res = await axios.get(
        busAPI.getTerminal({ city: cityCode, list: 500 })
      );
      const result = res.data.response.body.items.item;
      setPlaceList(result);
    } catch (err) {
      console.log(err + "터미널을 불러오지 못했습니다.");
    }
  };

  const handleChangeCity = (e) => {
    setCityCode(e.target.value);
  };

  useEffect(() => {
    fetchCity();
    fetchMainTerm();
  }, []);

  useEffect(() => {
    setTermList();
  }, [cityCode]);

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
              <select
                name="cityList"
                id="cityList"
                onChange={(e) => handleChangeCity(e)}>
                <option value="">전체</option>
                {city.map((city) => {
                  const { cityCode, cityName } = city;
                  return (
                    <option value={cityCode} key={cityCode}>
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
          {mainTerm.map((list) => {
            return <li key={list.terminalId}>{list.terminalNm}</li>;
          })}
        </ul>
      </li>
      <li className="placeList">
        <p>출발지 선택</p>
        <ul>
          {placeList.sort().map((list) => {
            return <li key={list.terminalId}>{list.terminalNm}</li>;
          })}
        </ul>
      </li>
    </TerminalOption>
  );
}

export default TerminalModal;
