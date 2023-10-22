import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import './theme.css'



const Post = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);

  return (
    <>
      <h1>My Post With {theme}</h1>
      <button className={`${theme === "dark" ? "light" : "dark"}`} onClick={handleOnClick}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </>
  );
};

export default Post;
