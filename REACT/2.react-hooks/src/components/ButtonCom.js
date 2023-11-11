import React from "react";

const ButtonCom = ({ title, click }) => {
  console.log("Button Component");
  return <button onClick={click}>{title}</button>;
};
export default ButtonCom;
