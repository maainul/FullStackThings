import React, { useContext } from "react";
import PostContext from "../context/PostContext";

const PostChild = () => {
  const { posts } = useContext(PostContext);
  return (
    <>
      <h1>Data From Child</h1>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PostChild;
