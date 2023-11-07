import { useDispatch, useSelector } from "react-redux";
import { allDepTrmlList } from "../asset/DB/allDepTrmlList";
import { setTrml } from "../store/departTrmlSlice";
import { fetchRoute } from "../store/fetchRouteSlice";

function DepallDepTrmlList() {
  const dispatch = useDispatch();
  const trmlNum = useSelector((state) => state.setTrmlNum.num);
  const depDate = useSelector((state) => state.getDate.depDate);
  
  return (
    <ul>
      {trmlNum === "all"
        ? allDepTrmlList.map((trml) => {
            return (
              <li
                key={trml.terminalId}
                onClick={() => {
                  dispatch(setTrml(trml));
                  dispatch(fetchRoute({ dep: trml.terminalId, date: depDate }));
                }}>
                {trml.terminalNm}
              </li>
            );
          })
        : allDepTrmlList
            .filter((id) => id.terminalId.charAt(4) === trmlNum)
            .map((trml) => {
              return (
                <li
                  key={trml.terminalId}
                  onClick={() => {
                    dispatch(setTrml(trml));
                    dispatch(fetchRoute({ dep: trml.terminalId, date: depDate }));
                  }}>
                  {trml.terminalNm}
                </li>
              );
            })}
    </ul>
  );
}

export default DepallDepTrmlList;
