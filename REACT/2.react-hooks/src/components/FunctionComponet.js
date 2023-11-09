import React, { useState, useEffect, useRef } from "react";

const FunctionComponet = () => {
  const [counter, setCounter] = useState(() => InitialState());
  const [toggler, setToggler] = useState(false);
  const inputRef = useRef("");
  console.log(inputRef);
  function InitialState() {
    console.log("increment");
    return 0;
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await res.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <h1>{counter}</h1>
      <h1>{toggler.toString()}</h1>
      <button
        onClick={(e) => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button onClick={() => setToggler(!toggler)}>Toggler</button>
      <br />
      <br />
      <div>
        <input
          type="text"
          ref={inputRef}
          onChange={() => console.log(inputRef.current.value)}
        />
      </div>
    </>
  );
};

export default FunctionComponet;
