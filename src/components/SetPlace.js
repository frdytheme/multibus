import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { path } from "../asset/DB/requestUrl";
import { focusBorder } from "../asset/style/GlobalStyle";
import { setTrml } from "../store/departTrmlSlice";

function SetPlace() {
  const dispatch = useDispatch();

  const depTrml = useSelector((state) => state.depTrml.data.terminalNm);
  const depStatus = useSelector((state) => state.depTrml.status);
  const arrTrml = useSelector((state) => state.arrTrml.data.terminalNm);

  return (
    <SetTrml>
      <p
        className={`${depTrml || "focus"} ${depStatus && "change"}`}
        onClick={() => dispatch(setTrml(""))}
      >
        출발지<span>{depTrml}</span>
      </p>
      <div className="arrow">화살표</div>
      <p className={`${depStatus || (depTrml && "focus")}`}>
        도착지<span>{arrTrml ? arrTrml : "선택"}</span>
      </p>
    </SetTrml>
  );
}

const SetTrml = styled.li`
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
    &::before {
      content: "";
      position: absolute;
      background: url(${path}/images/ico_arrow_modal.png) no-repeat 50% / cover;
      width: 40px;
      height: 27px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.5);
    }
  }
  p {
    width: 272px;
    height: 57px;
    padding: 12px 15px 12px 18px;
    background-color: #f3f4f6;
    &.focus {
      ${focusBorder}
      background-color: #fff;
    }
    &.change {
      ${focusBorder}
      background-color: #fff;
      span {
        display: block;
      }
    }
    span {
      display: block;
      font-size: 24px;
      color: #000;
      margin-top: 10px;
    }
    &:nth-of-type(2) {
      cursor: pointer;
      span {
        font-size: 18px;
        color: #aaa;
      }
    }
  }
`;

export default SetPlace;
