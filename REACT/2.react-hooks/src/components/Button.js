import React from "react";

const Button = ({ title, click }) => {
  console.log("Button Clicked");
  return (
    <>
      <button onClick={click}>{title}</button>;
    </>
  );
};

export default React.memo(Button);
