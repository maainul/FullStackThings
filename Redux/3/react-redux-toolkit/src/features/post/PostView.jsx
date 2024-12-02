import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  console.log("Posts :", posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  {
    isLoading && <h1>loading</h1>;
  }
  {
    error && <h1>{error}</h1>;
  }

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div>
            <li>
              <p>Title : {post.title}</p>
              <p>Body : {post.body}</p>
            </li>
          </div>
        ))}
    </div>
  );
};

export default PostView;
