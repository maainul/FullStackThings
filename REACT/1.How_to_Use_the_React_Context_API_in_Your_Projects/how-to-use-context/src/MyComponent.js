import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const MyComponent = () => {
  const { text, setText } = useContext(MyContext);

  const handleText = ()=>{
    setText("Hello,World")
  }

  return (
    <>
      <div>Hi there & {text}</div>
      <button onClick={() => handleText()}>Click Me</button>
    <hr/>
    </>
  );
};

export default MyComponent;
