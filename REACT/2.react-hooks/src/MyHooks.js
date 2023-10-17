import { React, useState } from "react";


const MyHooks = () => {
    const [name,setName ] = useState('mario')

  const updateName = () => {
    setName('Mainul')
  };
  return (
    <>
      <h1>My Name is {name} </h1>
      <button onClick={updateName}>Click Me</button>
    </>
  );
};

export default MyHooks;
