import { useState } from "react";
function HandlerEx2() {
  const [msg, setMsg] = useState("안농 나는 글씨야 무슨 색깔로 바꿀램?");
  const [color, setColor] = useState("black");

  const setColorBlack = () => {
    setColor("Black");
    setMsg("원래대롯!!");
  };

  const setColorYellow = () => {
    setColor("Yellow");
    setMsg("나뉸 노란색 글씽!");
  };

  const setColorGreen = () => {
    setColor("Lightgreen");
    setMsg("나뉸 연두색 글씽!");
  };

  return (
    <>
      <div className="changeTextColor">
        <h5 style={{ color: color }}>{msg}</h5>
        <button onClick={setColorBlack}>무슨색일까</button>
        &nbsp;
        <button onClick={setColorYellow}>노랑색이당</button>
        &nbsp;
        <button onClick={setColorGreen}>연두색이당</button>
      </div>
    </>
  );
}

export default HandlerEx2;
