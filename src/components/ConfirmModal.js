import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { modalClose } from "../store/ticketModalToggleSlice";
import { useNavigate } from "react-router-dom";
import { initTrml } from "../store/departTrmlSlice";
import { initArrTrml } from "../store/arrTrmlSlice";

const ConfirmAlert = styled.div`
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
  .confirmBox {
    width: 700px;
    height: 720px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 999;
    h2 {
      background-color: #68b3ce;
      color: #fff;
      font-size: 22px;
      font-weight: normal;
      text-align: center;
      padding: 8px 0;
      height: 30px;
      line-height: 30px;
    }
    .cancelInfo {
      padding: 25px 30px 10px;
      li {
        border-bottom: var(--grey-border);
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:first-child {
          color: var(--blue-color);
          font-size: 13px;
          height: 30px;
          padding: 0 10px;
          border-top: 1px solid #aaa;
        }
        p {
          line-height: 1.5;
          padding: 9px 10px 9px 0;
          width: 380px;
        }
        span {
          width: 190px;
        }
      }
    }
    .subTxt {
      font-size: 12px;
      letter-spacing: -0.5px;
      color: #666;
      padding: 0 40px;
      ul {
        li {
          position: relative;
          line-height: 1.5;
          margin: 5px 0;
          strong {
            color: #5754b5;
            font-weight: normal;
          }
          &::before {
            content: "";
            display: block;
            width: 2px;
            height: 2px;
            border-radius: 50%;
            position: absolute;
            top: 6px;
            left: -8px;
            transform: translateY(-50%);
            background-color: #666;
          }
        }
      }
    }
    .btnBox {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
      div {
        padding: 12px 20px;
        width: 90px;
        height: 25px;
        background-color: #b8becc;
        color: #fff;
        line-height: 25px;
        text-align: center;
        cursor: pointer;
        &:nth-child(2) {
          background-color: #5754b5;
        }
      }
    }
  }
`;

function ConfirmModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ConfirmAlert>
      <div className="bgBox">반투명 배경</div>
      <div className="confirmBox">
        <h2>취소수수료 안내</h2>
        <ul className="cancelInfo">
          <li>
            <p>취소시기</p>
            <span>수수료</span>
          </li>
          <li>
            <p>
              예매 당일 또는 승차일 2일전 취소 <br />
              (단, 당일출발차량 예매 후 1시간 이후 취소는 수수료 발생)
            </p>
            <span>없음</span>
          </li>
          <li>
            <p>
              예매 후 출발일 1일 전일부터 지정차 출발 1시간 전 취소 <br />
              (단, 당일출발차량 예매 후 1시간 이내 취소는 수수료 없음)
            </p>
            <span>승차권 요금의5%</span>
          </li>
          <li>
            <p>
              예매 후 지정차 출발 1시간 이내 취소 <br />
              (단, 당일출발차량 예매 후 1시간 이내 취소는 수수료 없음)
            </p>
            <span>승차권 요금의10%</span>
          </li>
          <li>
            <p>예매하신 지정차 출발 후 목적지 도착예정시간 전 취소</p>
            <span>승차권 요금의30%</span>
          </li>
          <li>
            <p>마일리지 구매 승차권 : 출발시간 이전 취소</p>
            <span>마일리지 100% 환원</span>
          </li>
          <li>
            <p>마일리지 구매 승차권 : 출발시간 이후 취소</p>
            <span>마일리지 100% 차감</span>
          </li>
        </ul>
        <div className="subTxt">
          <ul>
            <li>
              당일출발 차량의 경우 출발시간 1시간 전까지 홈페이지 예매가
              가능하며 1시간 미만 출발임박 차량의 예매를 원하시면 [
              <strong>고속버스 모바일앱</strong>]에서 예매하시기 바랍니다.
            </li>
            <li>
              1회 최대 예매 매수는 6매입니다.(일부 시외우등 노선에 한정하여
              10매까지 예매가능)
            </li>
            <li>
              일반고속 청소년(중, 고등학생) 할인은 터미널 현장에서 학생증 및
              청소년증을 제시 해야만 할인이 적용되며 탑승 시 소지가 꼭
              필요합니다.
            </li>
            <li>
              할인 승차권 부정 사용 시 운임의 10배 부가운임을 요구할 수
              있습니다.
            </li>
            <li>
              사용하지 않은 모든 승차권은 지정차 출발 후 도착예정시간이 지나면
              환불하실 수 없습니다.
            </li>
            <li>취소수수료 산정은 날짜를 기준(시간 기준이 아님)으로 합니다.</li>
            <li>
              홈페이지 예매 후 창구에서 발권 시 예매에 사용한 신용카드를 반드시
              지참하셔야 합니다.
            </li>
          </ul>
        </div>
        <div className="btnBox">
          <div
            onClick={() => {
              dispatch(modalClose());
            }}>
            취소
          </div>
          <div
            onClick={() => {
              dispatch(modalClose());
              navigate(`/routeSearch`);
            }}>
            동의
          </div>
        </div>
      </div>
    </ConfirmAlert>
  );
}

export default ConfirmModal;
