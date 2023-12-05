import { useRef } from "react";

function FuncRef() {
  const input = useRef();

  const focusInput = () => {
    input.current.focus();
  };

  return (
    <>
      <input type="text" ref={input} />
      &nbsp;
      <button type="button" onClick={focusInput}>
        눌러쥬세용
      </button>
    </>
  );
}

export default FuncRef;
