import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState("");
  const [posts, setPosts] = useState("");

  // GET USERS
  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // GET USERS
  const handlePosts = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Posts Users</h1>
      <div>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
              <hr />
            </li>
          ))}
      </div>

      <button onClick={handlePosts}>Posts</button>
      <hr />
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <hr />
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
