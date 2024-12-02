import React from "react";
const DisplayCounter = ({ counter }) => {
  console.log("Counter Display Callded");
  return <h1>Counter : {counter}</h1>;
};

export default React.memo(DisplayCounter);
