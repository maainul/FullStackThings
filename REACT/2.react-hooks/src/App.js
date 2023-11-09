import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { DisplayCounter } from "./components/DisplayCounter";
import Toggler from "./components/Toggler";
import { ButtonCom } from "./components/ButtonCom";
import { Footer } from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);
  const [toggler, setToggler] = useState(false);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const handleToggle = () => {
    setToggler(!toggler);
  };
  return (
    <>
      <h1>React Hook and Context API</h1>
      <hr />
      <Header />
      <div>
        <DisplayCounter counter={counter} />
        <br />
        <Toggler toggler={toggler} />
        <br />
        <ButtonCom title="Increment" click={handleCounter} />
        <br />
        <br />
        <ButtonCom title="Change Toggler" click={handleToggle} />
        <Footer />
        <hr />
      </div>
    </>
  );
}

export default App;
