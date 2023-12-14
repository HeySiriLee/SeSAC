import { useSelector, useDispatch } from "react-redux";
import { Box1, Box2, Box4 } from "../components/Boxes";
import { increase, decrease } from "../modules/counterReducer";

export function Box1Container() {
  const num = useSelector((state) => state.counter.num);
  return <Box1 num={num} />;
}
export function Box2Container() {
  const num = useSelector((state) => state.counter.num);
  return <Box2 num={num} />;
}

export function Box4Container() {
  const num = useSelector((state) => state.counter.num);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  const counterIncrease = () => dispatch(increase());
  const counterDecrease = () => dispatch(decrease());
  const isDataChange = () => dispatch({ type: "CHANGE" });

  return (
    <Box4
      num={num}
      isData={isData}
      counterIncrease={counterIncrease}
      counterDecrease={counterDecrease}
      isDataChange={isDataChange}
    />
  );
}
