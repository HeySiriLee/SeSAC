import { useState, useMemo } from "react";

// useMemo: Rendering 할 때, 불필요한 연산을 방지(값을 기억함)
export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // [before]
  // count state가 변경되지 않아도, rendering 될때마다 다시 연산을 함 > 비효율
  // > count가 변경될때만 연산을 하도록 하고 싶음 > useMemo
  const calc1 = () => {
    console.log("Did calc");
    return count * 2;
  };

  const calcValue = calc1();

  // [after]
  // useMemo(콜백함수, 의존성 배열)
  // : 불필요한 연산을 방지, 값을 기억함. count의 변경이 있을 때만 다시 연산하여 calc에 담음
  const calc2 = useMemo(() => {
    console.log("Did useMemo.calc");
    return count * 2;
  }, [count]);

  return (
    <>
      <h4>useMemo Example</h4>
      <div>
        count: {count}
        &nbsp;
        <button onClick={() => setCount(count + 1)}>+ 1</button>
      </div>
      {/* useMemo를 사용하지 않는 경우 */}
      <div>calc1: {calcValue} </div>
      {/* useMemo를 사용하는 경우 */}
      <div>calc2: {calc2} </div>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
