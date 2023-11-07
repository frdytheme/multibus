export const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const day = date.getDate().toString().padStart(2, "0");
const getWeek = date.getDay();
const week = ["일", "월", "화", "수", "목", "금", "토"];
export const today = `${year}${month}${day}`;
export const tommorrow = `${year}${month}${new Date(
  date.setDate(date.getDate() + 1)
)
  .getDate()
  .toString()
  .padStart(2, "0")}`;
export const nowDay = `${year}.${month}.${day}. ${week[getWeek]}`;
export const nxtDay = `${year}.${month}.${date
  .getDate()
  .toString()
  .padStart(2, "0")}. ${week[getWeek + 1]}`;

// 1시간 전 목록부터 불러올 수 있게 현재 시간 -1시간
export const currentHour = date.getHours();
let hour = date.getHours();
if (hour > 0) {
  hour -= 1;
} else if (hour === 0) {
  hour = 23;
}
const minutes = date.getMinutes();
const min = minutes < 10 ? "0" + minutes : minutes;
export const nowTime = `${hour < 10 ? "0" + hour : hour}${min}`;
export const currentTime = `${
  currentHour < 10 ? "0" + currentHour : currentHour
}${min}`;
export const depTime = `${today}${nowTime}` * 1;
export const nxtDepTime = `${tommorrow}${nowTime}` * 1;
export const currentDepTime = `${today}${currentTime}` * 1;

export const path = process.env.PUBLIC_URL;

export const busAPI = {
  // 고속 버스 등급 호출
  getGrade: `http://apis.data.go.kr/1613000/ExpBusInfoService/getExpBusGradList?serviceKey=1T6VAqlqBMZtm0VI9%2BKQTJbr0qv3mTlGjPfnDyCJB8MMKxuGVl%2BXUpj88z%2BnT2TUd4rbpMQqGPLCTZt9dH2%2Bug%3D%3D&_type=json`,

  // 도시코드 목록 조회
  getCity: `http://apis.data.go.kr/1613000/ExpBusInfoService/getCtyCodeList?serviceKey=1T6VAqlqBMZtm0VI9%2BKQTJbr0qv3mTlGjPfnDyCJB8MMKxuGVl%2BXUpj88z%2BnT2TUd4rbpMQqGPLCTZt9dH2%2Bug%3D%3D&_type=json`,

  // 고속 버스 출발지 / 도착지기반 정보 호출
  getRoute: (
    dep = "NAEK010",
    arr = "",
    date = today,
    list = 8000,
    grade = ""
  ) =>
    `http://apis.data.go.kr/1613000/ExpBusInfoService/getStrtpntAlocFndExpbusInfo?serviceKey=1T6VAqlqBMZtm0VI9%2BKQTJbr0qv3mTlGjPfnDyCJB8MMKxuGVl%2BXUpj88z%2BnT2TUd4rbpMQqGPLCTZt9dH2%2Bug%3D%3D&depTerminalId=${dep}&arrTerminalId=${arr}&depPlandTime=${date}&numOfRows=${list}&pageNo=1&${
      grade && `busGradeId=${grade}`
    }&_type=json`,

  // 고속버스터미널 목록 조회
  getTerminal: (name = "", list = 229) =>
    `http://apis.data.go.kr/1613000/ExpBusInfoService/getExpBusTrminlList?serviceKey=1T6VAqlqBMZtm0VI9%2BKQTJbr0qv3mTlGjPfnDyCJB8MMKxuGVl%2BXUpj88z%2BnT2TUd4rbpMQqGPLCTZt9dH2%2Bug%3D%3D&${
      name && `terminalNm=${name}`
    }&numOfRows=${list}&pageNo=1&_type=json`,
};
