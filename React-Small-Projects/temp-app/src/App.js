import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>Increment and Decrement App</h1>
      <h2>Temprature : {count} degree</h2>

      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default App;
