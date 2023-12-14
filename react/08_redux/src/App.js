import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

function Box1() {
  const [num, setNum] = useState(100);
  const increase = () => setNum(num + 1);
  const decrease = () => setNum(num - 1);

  return (
    <div className="box">
      <h4>Number: {num}</h4>
      <Box2 num={num} increase={increase} decrease={decrease} />
    </div>
  );
}

function Box2(props) {
  const { num, increase, decrease } = props;
  return (
    <div className="box">
      <h4>Number: {num}</h4>
      <Box3 num={num} increase={increase} decrease={decrease} />
    </div>
  );
}

function Box3(props) {
  return (
    <div className="box">
      <Box4
        num={props.num}
        increase={props.increase}
        decrease={props.decrease}
      />
    </div>
  );
}

function Box4({ num, increase, decrease }) {
  return (
    <div className="box">
      <h4>Number: {num}</h4>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
    </div>
  );
}

export default App;
