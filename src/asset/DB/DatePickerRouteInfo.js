import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { forwardRef, useState } from "react";
import "../style/datePickerCustom.css";
import { path } from "./requestUrl";
import { useDispatch, useSelector } from "react-redux";
import {
  inputCurrentTime,
  inputDepDate,
  inputDepTime,
  inputNxtday,
  inputToday,
} from "../../store/getDateSlice";

const DatePickerRouteInfo = () => {
  const dispatch = useDispatch();
  const newDateRes = useSelector((state) => state.getDate.newDate);
  const parseDate = JSON.parse(newDateRes);
  const newDate = new Date(parseDate);

  const [startDate, setStartDate] = useState(newDate);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <img
      src={`${path}/images/ico_calender.png`}
      alt="캘린더 아이콘"
      onClick={onClick}
      ref={ref}
    />
  ));

  // 날짜 / 시간 변경 로직
  const setDateandTime = (now) => {
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");

    // API호출 URL용 년월일 변수 ex. 20230214
    const today = `${year}${month}${day}`;
    dispatch(inputDepDate(today));

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
    const currentTime = `${
      currentHour < 10 ? "0" + currentHour : currentHour
    }${min}`;
    const currentDepTime = `${today}${currentTime}` * 1;
    const depTime = `${today}${prevTime}` * 1;
    dispatch(inputCurrentTime(currentDepTime));

    dispatch(inputDepTime(depTime));

    // 요일 계산
    const getWeek = now.getDay();
    const week = ["일", "월", "화", "수", "목", "금", "토"];

    // 년.월.일.요일 변수
    const nowDay = `${year}.${month}.${day}. ${week[getWeek]}`;
    const nxtDay = `${year}.${month}.${new Date()
      .getDate()
      .toString()
      .padStart(2, "0")}. ${week[getWeek + 1]}`;

    dispatch(inputToday(nowDay));
    dispatch(inputNxtday(nxtDay));
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

export default DatePickerRouteInfo;
