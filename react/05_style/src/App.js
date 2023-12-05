import "./App.css";
import CssOrigin from "./components/CssOrigin";
import CssModule from "./components/CssModule";
import SassOrigin from "./components/SassOrigin";

function App() {
  return (
    <div className="App">
      <CssOrigin />
      <br />
      <CssModule />
      <br />
      <SassOrigin />
    </div>
  );
}

export default App;
