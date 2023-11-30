import { useState } from "react";

function FuncEvent() {
  const [msg, setMsg] = useState("헬로웅");
  const [name, setName] = useState("");

  const handleOnClick1 = (e) => {
    console.log(e.target);
    setMsg("빠잉");
  };

  const handleOnClick2 = (e) => {
    console.log(e.target);
    setMsg("다시헬로웅");
  };

  // 함수에서 매개변수를 받고 싶을때!
  // 방법 1.: onClick에서 익명함수를 선언하고, 그 내부에서 함수를 실행
  const handleOnClick3 = (message) => {
    setMsg(message);
  };

  // 방법 2.: bind를 이용, . 앞에 있는 함수의 this를 결정
  const handleOnClick4 = (message) => {
    setMsg(message);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      console.log("Enter가 눌렸습니다");
    }
  };

  return (
    <>
      <h3>Functional Component Event</h3>
      <div>
        {msg}
        &nbsp;
        <button onClick={handleOnClick1}>눌러봥!</button>
        &nbsp;
        <button onClick={handleOnClick2}>다시눌러봥!</button>
        &nbsp;
        <button
          onClick={() => {
            handleOnClick3("그만눌렁");
          }}
        >
          ?????
        </button>
        &nbsp;
        <button onClick={handleOnClick4.bind(null, "stopit!")}>오잉??</button>
        <br />
        {/* input 태그에서 엔터를 누르면 '엔터를 눌렀습니다!'라는 문구가 콘솔에 찎히도록 */}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            console.log(e.target);
            setName(e.target.value);
          }}
          onKeyDown={handleEnter}
        />
      </div>
    </>
  );
}
export default FuncEvent;
