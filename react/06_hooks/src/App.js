import "./App.css";
import { useState } from "react";
import CustomHookEx from "./components/CustomHookEx";
import UseCallbackStateEx from "./components/UseCallbackStateEx";
import UseCallbackPropsEx from "./components/UseCallbackPropsEx";
import UseMemoEx from "./components/UseMemoEx";
import UseReducerEx from "./components/UseReducer";

function App() {
  const [postId, setPostId] = useState(1);
  return (
    <div className="App">
      <CustomHookEx />
      <br />
      <UseCallbackPropsEx postId={postId} />
      <button onClick={() => setPostId(postId + 1)}>postId +1</button>
      <br />
      <UseCallbackStateEx />
      <br />
      <UseMemoEx />
      <br />
      <UseReducerEx />
    </div>
  );
}

export default App;
