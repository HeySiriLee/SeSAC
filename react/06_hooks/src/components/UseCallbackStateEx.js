import { useState, useCallback } from "react";

// useCallback: Rendering 할 때, 함수를 기억함
// 컴포넌트가 렌더링 될 때, 컴포넌트 내부에 있는 함수도 다시 선언하게 됨.
// 다시 선언할 필요가 없는 함수는 다시 선언하지 않고 이전에 선언한 함수를 사용하면 좋겟죠..?
// 그게 useCallback 이당
export default function UseCallbackStateEx() {
  const [text, setText] = useState("");

  // 의존성 배열이 반값일 경우, 처음 마운트 될 때 선언된 함수를 계속 기억하고 있다가,
  // update 될 때 다시 선언하지 않고 기억하고 있는 함수를 사용
  const handleOnchange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <h4>useCallback ver State Example</h4>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(handleOnchange)}
      />
    </>
  );
}
