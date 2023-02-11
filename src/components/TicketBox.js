import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { focusBorder } from "../asset/style/commonStyle";

const TicketModal = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  .bgBox {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    text-indent: -9999px;
  }
  .ticketBox {
    width: 700px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    z-index: 999;
    p {
      color: var(--blue-color);
      font-size: 14px;
    }
    h2 {
      background-color: #68b3ce;
      color: #fff;
      font-size: 22px;
      font-weight: normal;
      text-align: center;
      padding: 8px 0;
      height: 35px;
      line-height: 35px;
    }
    .ticketList {
      padding: 30px;
      .setPlace {
        display: flex;
        position: relative;
        justify-content: space-between;
        padding: 0 10px;
        .arrow {
          text-indent: -9999px;
          position: absolute;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 32px;
          height: 32px;
          border: 1px solid #ddd;
          background-color: #fff;
        }
        p {
          width: 272px;
          height: 57px;
          padding: 12px 15px 12px 18px;
          background-color: #f3f4f6;
          &.focus {
            ${focusBorder}
            background-color: #fff;
            span {
              display: none;
            }
          }
          span {
            display: block;
            font-size: 18px;
            color: #666;
          }
        }
      }
      .searchTrml {
        border-top: 1px solid #aaa;
        padding: 20px 0;
        margin: 20px 0 0;
        position: relative;
        input {
          width: 620px;
          /* height: 40px; */
          padding: 15px 0 8px;
          border: none;
          background-color: #f3f4f6;
          text-indent: 15px;
          &:focus {
            ${focusBorder}
            background-color:#fff;
            & + span {
              display: none;
              & + span {
                display: block;
              }
            }
          }
        }
        span {
          cursor: pointer;
          position: absolute;
          right: 25px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 2em;
          color: #aaa;
          &:nth-child(3) {
            display: none;
          }
        }
        .searchResult {
          font-size: 13px;
          width: 620px;
          position: absolute;
          li {
            background-color: #f9f9f9;
            padding: 12px;
            border-bottom: 1px solid #e6e6e6;
            &:hover {
              background-color: #fff;
              color: var(--blue-color);
              font-weight: bold;
              cursor: pointer;
            }
          }
        }
      }
      .mainTrml {
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
      }
      .showArea {
        p {
          margin-top: 15px;
          padding: 15px 12px 8px 15px;
          border-top: 1px solid #aaa;
          border-bottom: 1px solid #e6e6e6;
        }
        .areaList {
          display: flex;
          border-bottom: 1px solid #e6e6e6;
          .cityList {
            li {
              width: 100px;
              background-color: var(--grey-box);
              margin: 8px;
              padding: 8px 10px;
              color: #666;
              cursor: pointer;
              &.checked {
                background-color: var(--blue-color);
                color: #fff;
              }
            }
          }
          .cityItem {
            width: 100%;
            padding-left: 30px;
            border-left: 1px solid #e6e6e6;
            ul {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-auto-rows: 40px;
              height: 400px;
              overflow-y: scroll;
              li {
                border-bottom: 1px solid #e6e6e6;
                color: #999;
                padding: 15px 0;
                line-height: 10px;
                cursor: pointer;
                &:hover {
                  color: var(--blue-color);
                }
              }
            }
          }
        }
      }
    }
  }
`;

function TicketBox({ setBoxToggle, boxToggle }) {
  const mainList = useRef(null);
  const [trmlNum, setTrmlNum] = useState("all");
  const [showTrml, setShowTrml] = useState("");
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
  const province = [
    { id: 0, name: "서울" },
    { id: 1, name: "인천/경기" },
    { id: 2, name: "강원" },
    { id: 3, name: "대전/충남" },
    { id: 4, name: "충북" },
    { id: 5, name: "광주/전남" },
    { id: 6, name: "전북" },
    { id: 7, name: "부산/경남" },
    { id: 8, name: "대구/경북" },
  ];
  const mainTrml = mainFilter.map((filter) => {
    return trmlStore.filter((trml) => trml.terminalNm === filter)[0];
  });

  const onMainTrml = () => {
    const mainTrmls = mainList.current.querySelectorAll("li");
    mainTrmls.forEach((trml) => {
      trml.addEventListener("click", (e) => {
        mainTrmls.forEach((trml) => trml.classList.remove("checked"));
        e.currentTarget.classList.add("checked");
      });
    });
  };

  useEffect(() => {
    onMainTrml();
  }, []);

  const trmlList = [...trmlStore];
  const alignTrmlList = trmlList.sort((a,b)=> {
    if(a.terminalNm > b.terminalNm) return 1;
    if(a.terminalNm < b.terminalNm) return -1;
    return 0;
  })

  console.log(alignTrmlList)

  return (
    <TicketModal>
      <div className="bgBox" onClick={() => setBoxToggle(!boxToggle)}>
        반투명 배경
      </div>
      <div className="ticketBox">
        <h2>출/도착지 선택</h2>
        <ul className="ticketList">
          <li className="setPlace">
            <p className="focus">
              출발지<span>선택</span>
            </p>
            <div className="arrow">화살표</div>
            <p>
              도착지<span>선택</span>
            </p>
          </li>
          <li className="searchTrml">
            <input
              type="text"
              placeholder="터미널/지역 이름을 검색하세요"
              value={showTrml}
              onChange={(e) => setShowTrml(e.target.value)}
            />
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined">close</span>
            <ul className="searchResult">
              {showTrml &&
                alignTrmlList
                  .filter((trml) => trml.terminalNm.includes(showTrml))
                  .map((result) => {
                    return <li key={result.terminalId}>{result.terminalNm}</li>;
                  })}
            </ul>
          </li>
          <li className="mainTrml">
            <p>주요출발지</p>
            <ul>
              {mainTrml.map((trml) => {
                return <li key={trml.terminalId}>{trml.terminalNm}</li>;
              })}
            </ul>
          </li>
          <li className="showArea">
            <p>지역별 터미널</p>
            <div className="areaList">
              <div className="cityList">
                <ul ref={mainList}>
                  <li className="checked" onClick={() => setTrmlNum("all")}>
                    전체
                  </li>
                  {province.map((province) => {
                    return (
                      <li
                        key={province.id}
                        id={province.id}
                        onClick={(e) => {
                          setTrmlNum(e.target.id);
                          console.log(e.target.id);
                        }}>
                        {province.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="cityItem">
                <ul>
                  {trmlNum === "all"
                    ? alignTrmlList.map((trml) => {
                        return <li key={trml.terminalId}>{trml.terminalNm}</li>;
                      })
                    : alignTrmlList
                        .filter((id) => id.terminalId.charAt(4) === trmlNum)
                        .map((trml) => {
                          return <li key={trml.terminalId}>{trml.terminalNm}</li>;
                        })}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </TicketModal>
  );
}

export default TicketBox;
