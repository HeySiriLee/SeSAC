import { useState } from "react";
import "./App.css";
import ClassLifeCycle from "./components/ClassLifeCycle";
import FuncLifeCycle from "./components/FuncLifeCycle";

function App() {
  const [num, setNum] = useState(0);
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <div className="App">
        <div>
          {isShow && <FuncLifeCycle num={num} />}
          <button onClick={() => setNum(num + 1)}>plus</button>
          <br />
          <button onClick={() => setIsShow(!isShow)}>
            {isShow ? "OFF" : "ON"}
          </button>
        </div>
        <div>{isShow && <ClassLifeCycle num={num} />}</div>
      </div>
    </>
  );
}

export default App;
