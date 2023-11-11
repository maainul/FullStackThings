import React from "react";
<<<<<<< HEAD

export const DisplayCounter = ({ counter }) => {
  console.log("toggler Component");
  return <div>Display Counter :{counter} </div>;
};
=======
const DisplayCounter = ({ counter }) => {
  console.log("Counter Display Callded");
  return <h1>Counter : {counter}</h1>;
};

export default React.memo(DisplayCounter);
>>>>>>> 0a719217a4aea3218af7588f66e9ca7c89b1e992
