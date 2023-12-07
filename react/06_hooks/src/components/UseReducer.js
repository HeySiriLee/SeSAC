import { useCallback, useState, useReducer } from "react";

const initialValue = { value: 0 };
const reducer = (prevState, action) => {
  switch (action.type) {
    case "PLUS":
      return { value: prevState.value + 1 };
    case "MINUS":
      return { value: prevState.value - 1 };
    case "MULTIFLY":
      return { value: prevState.value * action.number };
    case "DEVIDE":
      return { value: prevState.value / action.number };
    case "RESET":
      return initialValue;
    default:
      return { value: prevState.value };
  }
};

// state: 상태
// dispatch: 액션을 발생시키는 함수
// reducer: 실질적으로 사태를 업데이트 하는 함수
export default function UseReducerEx() {
  // ver useState
  // const [state, setState] = useState(initialValue);

  // const plus = () => setState({ value: state.value + 1 });
  // const minus = () => setState({ value: state.value - 1 });
  // const reset = () => setState(initialValue);

  // ver useReducer
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(0);

  const handleChangeNumber = useCallback((e) => setNumber(e.target.value), []);

  const plus = () => dispatch({ type: "PLUS" });
  const minus = () => dispatch({ type: "MINUS" });
  const multifly = () => dispatch({ type: "MULTIFLY", number: number });
  const devide = () => dispatch({ type: "DEVIDE", number: number });
  const reset = () => dispatch({ type: "RESET" });

  return (
    <>
      <h4>useReducer Example</h4>
      <div>
        나를 보아랏: {state.value}
        <br />
        <button onClick={plus}>+1</button>
        &nbsp;
        <button onClick={minus}>-1</button>
        <br />
        <input type="number" value={number} onChange={handleChangeNumber} />
        <br />
        <button onClick={multifly}>*input값</button>
        &nbsp;
        <button onClick={devide}>/input값</button>
        <br />
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
