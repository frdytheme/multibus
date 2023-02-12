import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setTrml } from "../store/departTrmlSlice";

const MainTrml = styled.li`
  border-top: 1px solid #aaa;
  padding-top: 20px;
  p {
    margin-bottom: 5px;
    text-indent: 12px;
  }
  ul {
    padding: 0 8px;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    li {
      float: left;
      padding: 0 10px;
      margin: 3px 3px;
      border: 1px solid #e6e6e6;
      height: 35px;
      line-height: 35px;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

function MainTrmlList() {
  const dispatch = useDispatch();
  const trmlStore = useSelector((state) => state.trmlList.data);
  const mainFilter = [
    "서울경부",
    "센트럴시티(서울)",
    "광주(유·스퀘어)",
    "부산",
    "서부산(사상)",
    "동서울",
    "대전복합",
    "전주",
    "유성",
    "천안",
    "동대구",
    "성남(분당)",
  ];
  const mainTrml = mainFilter.map((filter) => {
    return trmlStore.filter((trml) => trml.terminalNm === filter)[0];
  });
  return (
    <MainTrml>
      <p>주요출발지</p>
      <ul>
        {mainTrml.map((trml) => {
          return (
            <li key={trml.terminalId} onClick={(e) => dispatch(setTrml(trml))}>
              {trml.terminalNm}
            </li>
          );
        })}
      </ul>
    </MainTrml>
  );
}

export default MainTrmlList;
