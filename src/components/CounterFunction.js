import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../actions";

const CounterFunction = () => {
  const counter = useSelector((state) => state.counter);
  const disptach = useDispatch();

  return (
    <div className="counter-function">
      <h4>
        Counter : <b>{counter}</b>
      </h4>
      <button onClick={() => disptach({ type: actionTypes.INCREMENT })}>+1</button>
      <button onClick={() => disptach({ type: actionTypes.DECREMENT })}>-1</button>
      <button onClick={() => disptach({ type: actionTypes.ADD5 })}>+5</button>
      <button onClick={() => disptach({ type: actionTypes.SUB5 })}>-5</button>
    </div>
  );
};

export default CounterFunction;
