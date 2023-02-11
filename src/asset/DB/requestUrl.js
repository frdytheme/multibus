const appKey = {
  encoding: "1T6VAqlqBMZtm0VI9%2BKQTJbr0qv3mTlGjPfnDyCJB8MMKxuGVl%2BXUpj88z%2BnT2TUd4rbpMQqGPLCTZt9dH2%2Bug%3D%3D",
  decoding: "1T6VAqlqBMZtm0VI9+KQTJbr0qv3mTlGjPfnDyCJB8MMKxuGVl+XUpj88z+nT2TUd4rbpMQqGPLCTZt9dH2+ug==",
};

const date = new Date();
const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(0, 2);
const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
const today = `${year}${month}${day}`;
export const nowDay = year + "-" + month + "-" + day;

export const busAPI = {
  // 고속 버스 등급 호출
  getGrade: `http://apis.data.go.kr/1613000/ExpBusInfoService/getExpBusGradList?serviceKey=${appKey.encoding}&_type=json`,

  // 도시코드 목록 조회
  getCity: `http://apis.data.go.kr/1613000/ExpBusInfoService/getCtyCodeList?serviceKey=${appKey.encoding}&_type=json`,

  // 고속 버스 출발지 / 도착지기반 정보 호출
  getRoute: (dep = "NAEK010", arr = "NAEK300", date = today, list = 100, grade = "") =>
    `http://apis.data.go.kr/1613000/ExpBusInfoService/getStrtpntAlocFndExpbusInfo?serviceKey=${
      appKey.encoding
    }&depTerminalId=${dep}&arrTerminalId=${arr}&depPlandTime=${date}&numOfRows=${list}&pageNo=1&${
      grade && `busGradeId=${grade}`
    }&_type=json`,

  // 고속버스터미널 목록 조회
  getTerminal: (name = "", list = 229) =>
    `http://apis.data.go.kr/1613000/ExpBusInfoService/getExpBusTrminlList?serviceKey=${appKey.encoding}&${
      name && `terminalNm=${name}`
    }&numOfRows=${list}&pageNo=1&_type=json`,
};
