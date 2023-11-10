import React, { forwardRef, useImperativeHandle, useState } from "react";
import useLogger from "../hooks/useLogger";

const Child = forwardRef((pros, ref) => {
  const [counter, setCounter] = useState(0);
  useLogger(counter);
  useImperativeHandle(ref, () => ({
    handleCountChange,
  }));

  const handleCountChange = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Child Component</h1>
      <button onClick={handleCountChange}>Increment Child</button>
      <h2>Child Counter : {counter}</h2>
    </>
  );
});

export default Child;
