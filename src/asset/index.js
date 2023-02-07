import key from "./DB/requestData.json";

const { appKey, busGrade, busTerminal, busRoute, cityCode } = key;

export function getRequestId() {
  return key;
}

export function getData(category) {
  return `http://apis.data.go.kr/1613000/SuburbsBusInfoService/${category}?serviceKey=${appKey.encoding}&_type=json`;
}

export function getCity() {
  return getData(cityCode);
}

export function getBusGrade() {
  return getData(busGrade);
}

export function getRoute() {
  return `http://apis.data.go.kr/1613000/SuburbsBusInfoService/${busRoute}?serviceKey=${appKey.encoding}&depTerminalId=NAI0671801&arrTerminalId=NAI3214401&depPlandTime=20211201&numOfRows=10&pageNo=1&busGradeId=IDG&_type=json`;
}

export function getTerminal(city) {
  return `http://apis.data.go.kr/1613000/SuburbsBusInfoService/${busTerminal}?serviceKey=${appKey.encoding}&terminalNm=&cityCode=${city}&numOfRows=10&pageNo=1&_type=json`;
}

