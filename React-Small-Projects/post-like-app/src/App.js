import { useState } from "react";
import "./App.css";
import { BiUserCircle, BiLike, BiShare, BiCommentDots } from "react-icons/bi";
function App() {
  const imgURL =
    "https://images.unsplash.com/photo-1687960507238-5f6565a08b2f?auto=format&fit=crop&q=80&w=1527&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);

  // handle like
  function handleLike() {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  }
  return (
    <div className="main-container">
      <h1>Like and Share APP</h1>
      <h2>Like Count : {count}</h2>
      <div className="card">
        <div className="card-header">
          <div className="card-header-icon">
            <BiUserCircle size={30} />
          </div>
          <div className="card-header-name">Md Mainul Hasan</div>
        </div>
        <div className="card-body">
          <img
            src={imgURL}
            alt="image url"
            className="image"
            onDoubleClick={handleLike}
          />
        </div>
        <div className="card-footer">
          {!like ? (
            <BiLike size={36} onClick={handleLike} />
          ) : (
            <BiLike size={36} color="red" />
          )}

          <BiCommentDots size={36} />
          <BiShare size={36} />
        </div>
      </div>
    </div>
  );
}

export default App;
