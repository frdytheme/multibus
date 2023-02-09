import axios from "axios";

const appKey = {
  encoding: "1T6VAqlqBMZtm0VI9%2BKQTJbr0qv3mTlGjPfnDyCJB8MMKxuGVl%2BXUpj88z%2BnT2TUd4rbpMQqGPLCTZt9dH2%2Bug%3D%3D",
  decoding: "1T6VAqlqBMZtm0VI9+KQTJbr0qv3mTlGjPfnDyCJB8MMKxuGVl+XUpj88z+nT2TUd4rbpMQqGPLCTZt9dH2+ug==",
};

const date = new Date();
const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(0, 2);
const day = ("0" + date.getDate()).slice(0, 2);
const today = `${year}${month}${day}`;
export const nowDay = year + "-" + month + "-" + day;

export const busAPI = {
  getGrade: `http://apis.data.go.kr/1613000/SuburbsBusInfoService/getSuberbsBusGradList?serviceKey=${appKey.encoding}&_type=json`,
  getCity: `http://apis.data.go.kr/1613000/SuburbsBusInfoService/getCtyCodeList?serviceKey=${appKey.encoding}&_type=json`,
  getRoute: (start = "NAI0671801", arrival = "NAI3214401", date = today, list = 10) =>
    `http://apis.data.go.kr/1613000/SuburbsBusInfoService/getStrtpntAlocFndSuberbsBusInfo?serviceKey=${appKey.encoding}&depTerminalId=${start}&arrTerminalId=${arrival}&depPlandTime=${date}&numOfRows=${list}&pageNo=1&busGradeId=IDG&_type=json`,
  getTerminal: ({ name, city, list = 2117 }) =>
    `http://apis.data.go.kr/1613000/SuburbsBusInfoService/getSuberbsBusTrminlList?serviceKey=${appKey.encoding}&${
      name ? `terminalNm=${name}` : ""
    }&${city ? `cityCode=${city}` : ""}&numOfRows=${list}&pageNo=1&_type=json`,
};

// 주요 터미널 Database

export const mainList = [
  { id: 1, name: "동서울" },
  { id: 2, name: "원주" },
  { id: 3, name: "인천공항1터미널" },
  { id: 4, name: "인천공항2터미널" },
  { id: 5, name: "서울남부" },
  { id: 6, name: "인천" },
  { id: 7, name: "광주(유·스퀘어)" },
  { id: 8, name: "대전복합" },
  { id: 9, name: "성남" },
  { id: 10, name: "대구서부" },
  { id: 11, name: "천안" },
  { id: 12, name: "청주" },
];

// 주요 터미널 find 로직

// export let mainTerminal = [];

// const setMainTerm = async (name) => {
//   try {
//     const res = await axios.get(busAPI.getTerminal(name));
//     const result = res.data.response.body.items.item;
//     const currentRes = [];
//       if (result.length > 1) {
//         currentRes.push(result.find((data) => data.terminalNm === name));
//       } else {
//         currentRes.push(result);
//       }
//     console.log(currentRes);
//     mainTerminal = [...mainTerminal, currentRes];
//   } catch (err) {
//     console.log(err + "terminal 데이터를 불러오지 못했습니다.");
//   }
// };

// mainList.forEach((list) => setMainTerm(list.name, list.city));

export const Terminal1 = async () => {
  const seoul = await axios.get(busAPI.getTerminal({ city: 11 }));
  const result = seoul.data.response.body.items.item;
  let resId = [];
  result.map((item) => (resId = [...resId, item.terminalId]));
  return resId;
};
