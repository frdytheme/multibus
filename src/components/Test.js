import axios from "axios";
import { useEffect, useState } from "react";
import { getBusGrade, getRequestData, getTerminal } from "../asset";

function Test(props) {
  // REST API는 모두 item 배열에 담겨있음.
  const [seatGrade, setSeatGrade] = useState([]);
  const requestId = getRequestData();

  const testApiCall = async () => {
    try {
      const res = await axios.get(getBusGrade());
      setSeatGrade(res.data.response.body.items);
      const termin = await axios.get(getTerminal("", 11));
      setSeatGrade([...seatGrade, termin.data.response.body.items])

    } catch (err) {
      console.log(err + "데이터를 불러오지 못했습니다.");
    }
  };

  /*  
    REST API를 요청하는 URL이 길고 복잡해서 json파일로 만들어서 제어하고 필요한 문서에서는 함수로 요청할 수 있도록 API 관련 js파일을 만들어서 관리.
  
  */

  console.log(seatGrade);
  console.log(requestId);

  useEffect(() => {
    testApiCall();
  }, []);

  return (
    <>
      <h2>테스트입니다.</h2>
    </>
  );
}

export default Test;
