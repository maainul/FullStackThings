import React, { useContext } from "react";
import { ThemeContext, themes } from "./context/ThemeContext";

const MyComponent = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);
  return (
    <>
      <h1>Theme Type - {theme}</h1>
      <button onClick={handleOnClick}>
        {theme === themes.dark ? "Light" : "Dark"}
      </button>
      <hr />
    </>
  );
};

export default MyComponent;
