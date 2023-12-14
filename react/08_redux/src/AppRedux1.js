import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function AppRedux1() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

function Box1() {
  const num = useSelector((state) => state.num);
  return (
    <div className="box">
      <h4>Number: {num}</h4>
      <Box2 />
    </div>
  );
}

function Box2() {
  const num = useSelector((state) => state.num);

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
  const num = useSelector((state) => state.num);
  const dispatch = useDispatch();
  return (
    <div className="box">
      <h4>Number: {num}</h4>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
    </div>
  );
}

export default AppRedux1;
