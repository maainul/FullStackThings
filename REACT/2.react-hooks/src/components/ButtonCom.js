import React from "react";

export const ButtonCom = ({ title, click }) => {
  console.log("Button Component");
  return <button onClick={click}>{title}</button>;
};
