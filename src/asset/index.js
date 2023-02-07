import data from "./DB/RequestData.json";

const { appKey, BusGrade, BusTerminList, BusStartArrival, CityCode } = data;

export function getRequestData() {
  return data;
}

export function getBusGrade() {
  return `http://apis.data.go.kr/1613000/SuburbsBusInfoService/${BusGrade.key}?serviceKey=${appKey.EncodeKey}&_type=json`;
}

export function getTerminal(name, city) {
  return `http://apis.data.go.kr/1613000/SuburbsBusInfoService/${BusTerminList.key}?serviceKey=${appKey.EncodeKey}&terminalNm=${name || ""}&cityCode=${city}&numOfRows=10&pageNo=1&_type=json`;
}
