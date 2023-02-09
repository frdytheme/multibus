import { useState } from "react";
import { nowDay } from "../asset/DB/requestUrl";

function TicketForm(props) {
  // 편도 왕복 onClick 관리 스테이트
  const [travel, setTravel] = useState(true);

  // select map자료
  let option = [];
  const select = [
    { no: 0, title: "어른", name: "peoples", id: "adult" },
    { no: 1, title: "아동", name: "peoples", id: "children" },
    { no: 2, title: "중고생", name: "peoples", id: "student" },
  ];
  for (let i = 0; i <= 23; i++) {
    option = [...option, i];
  }

  return (
    <form>
      <div className="travelMode">
        <label>
          <input
            type="radio"
            name="travelMode"
            id="travelOne"
            defaultChecked
            onClick={() => setTravel(true)}
          />
          편도
        </label>
        <label>
          <input
            type="radio"
            name="travelMode"
            id="travelTwo"
            onClick={() => {
              setTravel(false);
            }}
          />
          왕복
        </label>
      </div>
      <ul>
        <li>
          <span>출발지</span>
          <input
            type="text"
            name="depart"
            id="depart"
            placeholder="출발지 선택"
          />
        </li>
        <li>
          <span>도착지</span>
          <input
            type="text"
            name="arrive"
            id="arrive"
            placeholder="도착지 선택"
          />
        </li>
        <li>
          <span>가는일시</span>
          <input type="text" name="Date" id="departDate" placeholder={nowDay} />
          <select name="setTime" id="departTime">
            {option.map((time) => {
              return (
                <option key={time} value={time}>
                  {(time < 10 ? "0" + time : time) + ":00"}
                </option>
              );
            })}
          </select>
        </li>
        <li>
          <span>오는일시</span>
          <input
            type="text"
            name="Date"
            id="arriveDate"
            placeholder={nowDay}
            disabled={travel}
          />
          <select name="setTime" id="arriveTime">
            {option.map((time) => {
              return (
                <option key={time} value={time}>
                  {(time < 10 ? "0" + time : time) + ":00"}
                </option>
              );
            })}
          </select>
        </li>
        {select.map((select) => {
          return (
            <li key={select.no}>
              <span>{select.title}</span>
              <select name={select.name} id={select.id}>
                {option.slice(0, 11).map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default TicketForm;
