import { useState } from "react";

// Toggle 기능은 자주 쓰임
// True > False, False > True 로 변화 시킴
// 이에 따라 처리를 할 일이 자주 생김
export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}
