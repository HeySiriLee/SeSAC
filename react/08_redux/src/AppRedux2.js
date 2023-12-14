import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./modules/counterReducer";

function AppRedux2() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

function Box1() {
  const num = useSelector((state) => state.counter.num);
  return (
    <div className="box">
      <h4>Number: {num}</h4>
      <Box2 />
    </div>
  );
}

function Box2() {
  const num = useSelector((state) => state.counter.num);

  return (
    <div className="box">
      <h4>Number: {num}</h4>
      <Box3 />
    </div>
  );
}
function Box3() {
  return (
    <div className="box">
      <Box4 />
    </div>
  );
}
function Box4() {
  const num = useSelector((state) => state.counter.num);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();

  return (
    <div className="box">
      <h4>Number: {num}</h4>
      {/* INCREMENT 상수 선언 전 ver 3. */}
      {/* <button onClick={() => dispatch({ type: "INCERMENT" })}> + </button> */}
      {/* <button onClick={() => dispatch({ type: "DECERMENT" })}> - </button> */}
      <br />
      {/* INCREMENT 상수 선언 후 ver 3-1. */}
      <button onClick={() => dispatch(increase())}> + </button>
      <button onClick={() => dispatch(decrease())}> - </button>
      <br />
      <div>isData: {`${isData}`}</div>
      <button onClick={() => dispatch({ type: "CHANGE" })}>CHANGE</button>
    </div>
  );
}

export default AppRedux2;
