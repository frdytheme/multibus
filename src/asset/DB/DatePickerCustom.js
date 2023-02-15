import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { forwardRef, useState } from "react";
import "../style/datePickerCustom.css";
import { path, today } from "./requestUrl";
import { useDispatch } from "react-redux";
import {
  inputCurrentTime,
  inputDepDate,
  inputDepTime,
  inputNewDate,
  inputNxtday,
  inputToday,
} from "../../store/getDateSlice";

const DatePickerCustom = () => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <img src={`${path}/images/ico_calender.png`} alt="캘린더 아이콘" onClick={onClick} ref={ref} />
  ));

  // 날짜 / 시간 변경 로직
  const setDateandTime = (now) => {
    const year = now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(0, 2);
    const day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();

    // API호출 URL용 년월일 변수 ex. 20230214
    const isToday = `${year}${month}${day}`;
    dispatch(inputDepDate(isToday));

    // 출/도착지 / 현재 시간 기반 예매 가능 터미널 자동 검색용. 년월일시간분 변수 ex. 202302140036
    // 1시간 전 목록부터 불러올 수 있게 현재 시간 -1시간
    let prevHour = now.getHours();
    let currentHour = now.getHours();
    const minutes = now.getMinutes();
    if (prevHour > 2) {
      prevHour -= 1;
    }
    const min = minutes < 10 ? "0" + minutes : minutes;
    const prevTime = `${prevHour < 10 ? "0" + prevHour : prevHour}${min}`;
    const currentTime = `${currentHour < 10 ? "0" + currentHour : currentHour}${min}`;
    const currentDepTime = `${today}${currentTime}` * 1;
    const depTime = `${isToday}${prevTime}` * 1;
    dispatch(inputCurrentTime(currentDepTime));

    dispatch(inputDepTime(depTime));

    // 요일 계산
    const getWeek = now.getDay();
    const week = ["일", "월", "화", "수", "목", "금", "토"];

    // 년.월.일.요일 변수
    const nowDay = year + ". " + month.slice(1, 2) + ". " + day + ". " + week[getWeek];
    const nxtDay =
      year + ". " + month.slice(1, 2) + ". " + (day * 1 + 1) + ". " + week[getWeek !== 6 ? getWeek + 1 : 0];

    dispatch(inputToday(nowDay));
    dispatch(inputNxtday(nxtDay));
    dispatch(inputNewDate(JSON.stringify(new Date())));
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        setDateandTime(date);
      }}
      locale={ko}
      minDate={new Date()}
      customInput={<ExampleCustomInput />}
    />
  );
};

export default DatePickerCustom;
