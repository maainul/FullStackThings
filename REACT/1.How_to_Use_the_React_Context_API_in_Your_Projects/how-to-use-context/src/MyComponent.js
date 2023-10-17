import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const MyComponent = () => {
  const { text, setText } = useContext(MyContext);
  return (
    <>
      <div>Hi there & {text}</div>
      <button onClick={() => setText("Hello,World")}>Click Me</button>
    <hr/>
    </>
  );
};

export default MyComponent;
