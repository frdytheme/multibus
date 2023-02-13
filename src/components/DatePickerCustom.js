import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { forwardRef, useEffect, useState } from "react";
import "../asset/style/datePickerCustom.css";
import { path } from "../asset/DB/requestUrl";
import { useDispatch, useSelector } from "react-redux";
import { inputDepDate, inputDepTime, inputNxtday, inputToday } from "../store/getDateSlice";

const DatePickerCustom = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <img src={`${path}/images/ico_calender.png`} alt="캘린더 아이콘" onClick={onClick} ref={ref} />
  ));
  const dispatch = useDispatch();
  const dateInfo = useSelector((state) => state.getDate);

  // 날짜 / 시간 변경 로직
  const setDateandTime = (now) => {
    const year = now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(0, 2);
    const day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();

    // API호출 URL용 년월일 변수 ex. 20230214
    const today = `${year}${month}${day}`;
    dispatch(inputDepDate(today));

    // 출/도착지 / 현재 시간 기반 예매 가능 터미널 자동 검색용. 년월일시간분 변수 ex. 202302140036
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const min = minutes < 10 ? "0" + minutes : minutes;
    const nowTime = `${hour}${min}`;
    const depTime = `${today}${nowTime}` * 1;

    dispatch(inputDepTime(depTime));

    // 요일 계산
    const getWeek = now.getDay();
    const week = ["일", "월", "화", "수", "목", "금", "토"];

    // 년.월.일.요일 변수
    const nowDay = year + ". " + month.slice(1, 2) + ". " + day + ". " + week[getWeek];
    const nxtDay = year + ". " + month.slice(1, 2) + ". " + (day * 1 + 1) + ". " + week[getWeek + 1];

    dispatch(inputToday(nowDay));
    dispatch(inputNxtday(nxtDay));
  };

  useEffect(() => {
    setDateandTime(startDate);
  }, [startDate]);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
      }}
      locale={ko}
      minDate={new Date()}
      customInput={<ExampleCustomInput />}
    />
  );
};

export default DatePickerCustom;
