import { useState } from "react";

function FuncState() {
  // useState 는 배열을 반환 > 그 배열을 구조분해 하여 num, setNum을 선언
  // [ state 변수, state를 변경시키는 함수]
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [text, setText] = useState("text");

  return (
    <body style={{ marginLeft: "10px", marginTop: "10px" }}>
      <h3>Functional Component State Study</h3>
      <div>
        Synchronous num1 state value {num1}{" "}
        <button
          onClick={() => {
            // 동기(?) 처리!
            setNum1(num1 + 1);
          }}
        >
          + 1
        </button>
      </div>
      <div>
        Asynchronous num2 state value {num2}{" "}
        <button
          onClick={() => {
            // 비동기 처리!
            setNum2((prevNum) => prevNum + 1);
            setNum2((prevNum) => prevNum + 1);
          }}
        >
          + 2
        </button>
      </div>
      <div>
        text state value {text}{" "}
        <button
          onClick={() => {
            setText("퉥스트");
          }}
        >
          Translate!
        </button>
      </div>
    </body>
  );
}

export default FuncState;
