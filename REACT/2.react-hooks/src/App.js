import { useState, useEffect } from "react";
import "./App.css";
import Pages from "./components/Pages";
// import Header from "./components/Header";
// import DisplayCounter from "./components/DisplayCounter";
// import Toggler from "./components/Toggler";
// import ButtonCom from "./components/ButtonCom";
// import Footer from "./components/Footer";
// import PostProvider from "./context/PostContext";
// import User from "./components/User";
// import Post from "./components/Post";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const paginationFunc = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    };
    paginationFunc();
  }, []);

  // const [counter, setCounter] = useState(0);
  // const [toggler, setToggler] = useState(false);

  // const handleCounter = () => {
  // setCounter(counter + 1);
  // };

  // const handleToggle = () => {
  // setToggler(!toggler);
  // };
  return (
    <>
      <h1>Hi There</h1>
      {/* <PostProvider> */}
      <h1>React Hook and Context API</h1>
      <hr />
      {data.length > 0 ? <Pages data={data} /> : <p>Loading...</p>}
      {/* <Header /> */}
      {/* <DisplayCounter counter={counter} /> */}
      <br />
      {/* <Toggler toggler={toggler} /> */}
      <br />
      {/* <ButtonCom title="Increment" click={handleCounter} /> */}
      <br />
      <br />
      {/* <ButtonCom title="Change Toggler" click={handleToggle} /> */}
      {/* <Footer /> */}
      <hr />
      <hr />
      {/* <User /> */}
      {/* <Post /> */}
      {/* </PostProvider> */}
    </>
  );
}

export default App;
