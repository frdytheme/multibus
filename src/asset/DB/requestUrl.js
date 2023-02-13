const appKey = {
  encoding:
    "1T6VAqlqBMZtm0VI9%2BKQTJbr0qv3mTlGjPfnDyCJB8MMKxuGVl%2BXUpj88z%2BnT2TUd4rbpMQqGPLCTZt9dH2%2Bug%3D%3D",
  decoding:
    "1T6VAqlqBMZtm0VI9+KQTJbr0qv3mTlGjPfnDyCJB8MMKxuGVl+XUpj88z+nT2TUd4rbpMQqGPLCTZt9dH2+ug==",
};

const date = new Date();
const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(0, 2);
const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
const getWeek = date.getDay();
const week = ["일", "월", "화", "수", "목", "금", "토"];
const today = `${year}${month}${day}`;
export const nowDay =
  year + ". " + month.slice(1, 2) + ". " + day + ". " + week[getWeek];
export const nxtDay =
  year + ". " + month.slice(1, 2) + ". " + (day * 1 + 1) + ". " + week[getWeek + 1];
let hour = date.getHours();
let minutes = date.getMinutes();
let min = minutes < 10 ? "0" + minutes : minutes;
export const nowTime = `${hour}${min}`;
export const depTime = `${today}${nowTime}` * 1;

export const path = process.env.PUBLIC_URL;

export const busAPI = {
  // 고속 버스 등급 호출
  getGrade: `http://apis.data.go.kr/1613000/ExpBusInfoService/getExpBusGradList?serviceKey=${appKey.encoding}&_type=json`,

  // 도시코드 목록 조회
  getCity: `http://apis.data.go.kr/1613000/ExpBusInfoService/getCtyCodeList?serviceKey=${appKey.encoding}&_type=json`,

  // 고속 버스 출발지 / 도착지기반 정보 호출
  getRoute: (dep = "NAEK010", arr = "", date = today, list = 8000, grade = "") =>
    `http://apis.data.go.kr/1613000/ExpBusInfoService/getStrtpntAlocFndExpbusInfo?serviceKey=${
      appKey.encoding
    }&depTerminalId=${dep}&arrTerminalId=${arr}&depPlandTime=${date}&numOfRows=${list}&pageNo=1&${
      grade && `busGradeId=${grade}`
    }&_type=json`,

  // 고속버스터미널 목록 조회
  getTerminal: (name = "", list = 229) =>
    `http://apis.data.go.kr/1613000/ExpBusInfoService/getExpBusTrminlList?serviceKey=${
      appKey.encoding
    }&${name && `terminalNm=${name}`}&numOfRows=${list}&pageNo=1&_type=json`,
};
