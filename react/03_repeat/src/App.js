import "./App.css";
import ClassRef from "./components/ClassRef";
import FuncRef from "./components/FuncRef";
import ListMap from "./components/ListMap";
import ScrollBox from "./components/ScrollBox";

function App() {
  return (
    <div className="App">
      <ClassRef />
      <br />
      <FuncRef />
      <br />
      <ListMap />
      <br />
      <ScrollBox />
    </div>
  );
}

export default App;
