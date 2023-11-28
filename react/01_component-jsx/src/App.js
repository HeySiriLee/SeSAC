import "./App.css";
import ClassComponent from "./Components/ClassComponent";
import FuncComponent1 from "./Components/FuncComponent1";
import FuncComponent2 from "./Components/FuncComponent2";
import ClassPropsEx from "./Components/ClassPropsEx";
import FuncPropsEx from "./Components/FuncPropsEx";
import Section from "./Components/Section";

function App() {
  return (
    <div className="App">
      <ClassComponent></ClassComponent>
      <FuncComponent1 />
      <FuncComponent2></FuncComponent2>
      <ClassPropsEx title="SeSAC" contect="YongSan_2" />
      <ClassPropsEx number={7} />
      <FuncPropsEx title="SeSAC" contect="YongSan_2" />
      <FuncPropsEx number={5} />

      <Section title="SeSAC section">
        <div>SeSAC section의 content입니다</div>
      </Section>
      <Section title="CodingOn section">
        <h5>CodingOn section의 content입니다</h5>
      </Section>
    </div>
  );
}

export default App;
