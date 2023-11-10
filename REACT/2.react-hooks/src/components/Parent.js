import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const ref = useRef();
  return (
    <>
      <h1>Parent Component</h1>
      <Child ref={ref} />
      <button onClick={() => ref.current.handleCountChange()}>
        Increment Parent
      </button>
    </>
  );
};

export default Parent;
