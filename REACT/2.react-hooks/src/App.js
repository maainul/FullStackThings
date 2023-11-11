<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { DisplayCounter } from "./components/DisplayCounter";
import Toggler from "./components/Toggler";
import { ButtonCom } from "./components/ButtonCom";
import { Footer } from "./components/Footer";

=======
import "./App.css";
import Post from "./components/Post";
import User from "./components/User";
import { PostProvider } from "./context/PostContext";
>>>>>>> 0a719217a4aea3218af7588f66e9ca7c89b1e992
function App() {
  const [counter, setCounter] = useState(0);
  const [toggler, setToggler] = useState(false);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const handleToggle = () => {
    setToggler(!toggler);
  };
  return (
    <>
<<<<<<< HEAD
      <h1>React Hook and Context API</h1>
      <hr />
      <Header />
      <div>
        <DisplayCounter counter={counter} />
        <br />
        <Toggler toggler={toggler} />
        <br />
        <ButtonCom title="Increment" click={handleCounter} />
        <br />
        <br />
        <ButtonCom title="Change Toggler" click={handleToggle} />
        <Footer />
        <hr />
      </div>
=======
      <PostProvider>
        <h1>App Component</h1>
        <hr />
        <User />
        <Post />
      </PostProvider>
>>>>>>> 0a719217a4aea3218af7588f66e9ca7c89b1e992
    </>
  );
}

export default App;
