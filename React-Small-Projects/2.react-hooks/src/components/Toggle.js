import React from "react";

const Toggle = ({ toggle }) => {
  console.log("Toggle Clicked");
  return <h1>Toggle : {toggle.toString()}</h1>;
};

export default React.memo(Toggle);
