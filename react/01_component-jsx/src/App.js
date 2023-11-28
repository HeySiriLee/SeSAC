import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FuncComponent2 from "./components/FuncComponent2";
import FuncComponent1 from "./components/FuncComponent1";

function App() {
  return (
    <div className="App">
      <FuncComponent1 />
      <FuncComponent2></FuncComponent2>
      <ClassComponent></ClassComponent>
    </div>
  );
}

export default App;
