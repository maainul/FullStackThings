import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Post = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <h1>My Post With {theme}</h1>
      <button>Dark</button>
    </>
  );
};

export default Post;
