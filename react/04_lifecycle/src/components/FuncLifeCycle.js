import { useEffect, useState } from "react";

function LifeCycle(props) {
  const { num } = props;
  const [text, setText] = useState("");

  // useEffect(콜백함수, 의존성 배열)
  // 1. 의존성 배열이 빈 배열. (mount)
  useEffect(() => {
    console.log("function component: mount");
    // 콜백함수 내부에서 return 뒤에 오는 함수를 unmount 시에 실행시킴
    return () => {
      console.log("function component: unmount");
    };
  }, []);
  // 2. 의존성 배열을 전달하지 않을 경우
  //  mount & updqte 시에 콜백함수를 실행시킴
  useEffect(() => {
    console.log("function component: update");
  }, []);
  // 3. 의존성 배열에 원소가 존재할 경우
  // 해당 원소가 mount & update 될 때마다 콜백함수를 실행시킴
  useEffect(() => {
    console.log("function component: text update");
  }, [text]);
  // 4.

  return (
    <>
      <h2>Functional Component LifeCycle</h2>
      <div>number: {num}</div>
      <br />
      <input
        type="text"
        valuer={text}
        onchange={(e) => setText(e.target.value)}
      />
      <br />
    </>
  );
}

export default LifeCycle;
