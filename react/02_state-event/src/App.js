import "./App.css";
import ClassEvent from "./components/ClassEvent";
import ClassState from "./components/ClassState";
import FuncEvent from "./components/FuncEvent";
import FuncState from "./components/FuncState";

function App() {
  return (
    <div className="App">
      <ClassEvent />
      <ClassState />
      <FuncEvent />
      <FuncState />
    </div>
  );
}

export default App;
