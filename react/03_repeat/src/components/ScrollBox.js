import { useRef } from "react";

function ScrollBox() {
  const box = useRef();
  const scrollTop = () => {
    box.current.scrollTop = 0;
  };
  return (
    <>
      <div className="scroll-box" ref={box}>
        <h1>스</h1>
        <h1>크</h1>
        <h1>으</h1>
        <h1>으</h1>
        <h1>로</h1>
        <h1>오</h1>
        <h1>올</h1>
        <h1>이</h1>
        <h1>닷</h1>
      </div>
      <button onClick={scrollTop}>올라가랏</button>
    </>
  );
}
export default ScrollBox;
