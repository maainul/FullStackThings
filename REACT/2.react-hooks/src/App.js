import "./App.css";
import Post from "./components/Post";
import User from "./components/User";
import { PostProvider } from "./context/PostContext";
function App() {
  return (
    <>
      <PostProvider>
        <h1>App Component</h1>
        <hr />
        <User />
        <Post />
      </PostProvider>
    </>
  );
}

export default App;
