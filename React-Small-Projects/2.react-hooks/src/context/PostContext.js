import React, { createContext, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts] = useState([
    { id: 1, title: "post One" },
    { id: 2, title: "post Two" },
    { id: 3, title: "post three" },
    { id: 4, title: "post four" },
  ]);
  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};

export default PostContext;
