import "./App.css";
import { Box1Container } from "./containers/BoxesContainer";

// contatiners folder
// redux에 직접적으로 접근하는 컴포넌트를 모아두기 위해서

// components folder
// presentational component 만 저장
// redux store에 직접적으로 접근하지 않는당

export default function AppRedux3() {
  return (
    <div>
      <Box1Container />
    </div>
  );
}
