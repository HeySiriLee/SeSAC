import { Box2Container, Box4Container } from "../containers/BoxesContainer";

export function Box1({ num }) {
  return (
    <div className="box">
      <h4>Number: {num}</h4>
      <Box2Container />
    </div>
  );
}

export function Box2({ num }) {
  return (
    <div className="box">
      <h4>num: {num}</h4>
      <Box3 />
    </div>
  );
}

export function Box3() {
  return (
    <div className="box">
      <Box4Container />
    </div>
  );
}

export function Box4(props) {
  const { num, isData, counterIncrease, counterDecrease, isDataChange } = props;
  return (
    <div className="box">
      <h4>Number: {num}</h4>
      <br />
      <button onClick={counterIncrease}> + </button>
      <button onClick={counterDecrease}> - </button>
      <br />
      <div>isData: {`${isData}`}</div>
      <button onClick={isDataChange}>CHANGE</button>
    </div>
  );
}
