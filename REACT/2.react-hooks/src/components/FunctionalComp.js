import React, { useCallback, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import DisplayCounter from "./DisplayCounter";
import Toggle from "./Toggle";
import Parent from "./Parent";
import User from "./User";

const FunctionalComp = () => {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const handleToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <>
      <h1> React Hooks and Context API </h1>
      <hr />
      <Header />
      <hr />
      <DisplayCounter counter={counter} />

      <br />

      <Toggle toggle={toggle} />

      <Button title="Increment" click={handleCounter} />

      <br />
      <br />
      <Button title="Toggle Handle" click={handleToggle} />
      <br />
      <hr />

      <User />
      <Parent />

      <Footer />
      <hr />
    </>
  );
};

export default FunctionalComp;
