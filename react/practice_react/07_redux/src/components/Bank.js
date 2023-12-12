import { useState } from "react";
const Bank = ({ money, onDeposit, onWithdraw }) => {
  const [input, setInput] = useState("");

  const plus = () => {
    onDeposit(Number(input));
    setInput("");
  };

  const minus = () => {
    onWithdraw(Number(input));
    setInput("");
  };

  return (
    <>
      <h1>Give me the money Bank</h1>
      <h2>Balance inquiry: {money}won</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={plus}>Deposit</button>
      <button onClick={minus}>Withdraw</button>
    </>
  );
};

export default Bank;
