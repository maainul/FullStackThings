# React Hooks

# useState() :
The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.

Suppose you want to update the name where button is clicked.

you can see the information in the console. but react doesn't update the value of of that component.

```js
import React from "react";

const MyHooks = () => {
  let name = "Mainul";

  const updateName = () => {
    name = "Kamrul";
    console.log(name)
  };
  return (
    <>
      <h1>My Name is {name} </h1>
      <button onClick={updateName}>Click Me</button>
    </>
  );
};

export default MyHooks;

```
![image](https://github.com/maainul/FullStackThings/assets/37740006/7d76ccc2-72eb-4fe1-83ba-829013eac676)

In the Console : Kamrul is showing

FOR that use react hooks. Use useState():


```js

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

```

the value will be changed as mario to mainul