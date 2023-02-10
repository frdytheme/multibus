import axios from "axios";

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
const today = `${year}${month}${day}`;
export const nowDay = year + "-" + month + "-" + day;

export const busAPI = {
  getGrade: `http://apis.data.go.kr/1613000/SuburbsBusInfoService/getSuberbsBusGradList?serviceKey=${appKey.encoding}&_type=json`,
  getCity: `http://apis.data.go.kr/1613000/SuburbsBusInfoService/getCtyCodeList?serviceKey=${appKey.encoding}&_type=json`,
  getRoute: ({ start = "", arrival = "", date = today, list = 10 }) =>
    `http://apis.data.go.kr/1613000/SuburbsBusInfoService/getStrtpntAlocFndSuberbsBusInfo?serviceKey=${appKey.encoding}&depTerminalId=${start}&arrTerminalId=${arrival}&depPlandTime=${date}&numOfRows=${list}&pageNo=1&busGradeId=IDG&_type=json`,
  getTerminal: ({ name, city, list = 2117 }) =>
    `http://apis.data.go.kr/1613000/SuburbsBusInfoService/getSuberbsBusTrminlList?serviceKey=${
      appKey.encoding
    }&${name ? `terminalNm=${name}` : ""}&${
      city ? `cityCode=${city}` : ""
    }&numOfRows=${list}&pageNo=1&_type=json`,
};

// 주요 터미널 Database

export const mainList2 = [
  "동서울",
  "원주",
  "인천공항1터미널",
  "인천공항2터미널",
  "서울남부",
  "인천",
  "광주(유·스퀘어)",
  "대전복합",
  "성남",
  "대구서부",
  "천안",
  "청주",
];

