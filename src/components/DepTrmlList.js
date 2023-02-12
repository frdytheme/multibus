import { useDispatch, useSelector } from "react-redux";
import { setTrml } from "../store/departTrmlSlice";

function DepTrmlList() {
  const dispatch = useDispatch();
  const trmlNum = useSelector((state) => state.setTrmlNum.num);
  const trmlList = useSelector((state) => state.trmlList.data);

  return (
    <ul>
      {trmlNum === "all"
        ? trmlList.map((trml) => {
            return (
              <li
                key={trml.terminalId}
                onClick={() => {
                  dispatch(setTrml(trml));
                }}>
                {trml.terminalNm}
              </li>
            );
          })
        : trmlList
            .filter((id) => id.terminalId.charAt(4) === trmlNum)
            .map((trml) => {
              return (
                <li
                  key={trml.terminalId}
                  onClick={() => {
                    dispatch(setTrml(trml));
                  }}>
                  {trml.terminalNm}
                </li>
              );
            })}
    </ul>
  );
}

export default DepTrmlList;
