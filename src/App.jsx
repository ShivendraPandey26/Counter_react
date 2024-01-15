import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increasing = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  };

  const decreasing = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1> Counter Limit is 0 - 20 </h1>
      <h1>Counter</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={increasing}>increase value</button>
      <p> </p>
      <button onClick={decreasing}>decrease value</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
