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
    console.log(name);
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
  const [name, setName] = useState("mario");

  const updateName = () => {
    setName("Mainul");
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

# REACT HOOKS

# REACT CLASS AND FUNCTION :

## Class Component In React JS :

```js
import React from "react";

export default class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "techinfoyt",
    };
  }
  render() {
    const { username } = this.state;
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{username}</h1>
      </>
    );
  }
}
```

### Function Component In React JS :

```js
import React, { useState } from "react";

const FunctionComponet = () => {
  const [username, setUserName] = useState("");

  return (
    <>
      <h1>{username}</h1>
      <button
        onClick={(e) => {
          setUserName("Mainul Hasan");
        }}
      >
        Set Name
      </button>
    </>
  );
};

export default FunctionComponet;
```

## Lazy Initialization :

if you give any function in state it will render every time wehen the state will be called.

```js
import React, { useState } from "react";

const FunctionComponet = () => {
  const [counter, setCounter] = useState(InitialState());

  function InitialState() {
    console.log("increment");
    return 0;
  }

  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={(e) => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};

export default FunctionComponet;
```

By Using arrow function like that it will call the function one time at the time of initialization

```js
import React, { useState } from "react";

const FunctionComponet = () => {
  const [counter, setCounter] = useState(() => InitialState());

  function InitialState() {
    console.log("increment");
    return 0;
  }

  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={(e) => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};

export default FunctionComponet;
```

### Print Boolean Value from state :

USE <h1>{toggler.toString()}</h1> to print the true and false value

```js
import React, { useState } from "react";

const FunctionComponet = () => {
  const [counter, setCounter] = useState(() => InitialState());
  const [toggler, setToggler] = useState(false);

  function InitialState() {
    console.log("increment");
    return 0;
  }

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
    </>
  );
};

export default FunctionComponet;
```

## UseEffect() : Call to any function or method or customized function

```js
import React, { useState, useEffect } from "react";

const FunctionComponet = () => {
  const [counter, setCounter] = useState(() => InitialState());
  const [toggler, setToggler] = useState(false);

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
    </>
  );
};

export default FunctionComponet;
```

### UseRef : get value or show value in life time : But this can be perform using useState

```js
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
      <input
        type="text"
        ref={inputRef}
        onChange={() => console.log(inputRef.current.value)}
      />
    </>
  );
};
export default FunctionComponet;
```
