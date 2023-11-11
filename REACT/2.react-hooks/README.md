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

## Use Memo :

use memo is used to not render the comonent unnecessary.
Only clicked or desire component will render.

## useMemo() :

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
const Toggle = ({ toggle }) => {
  console.log("Toggle Clicked");
  return <h1>Toggle : {toggle.toString()}</h1>;
};

export default React.memo(Toggle);
```

### useImperativeHandle React Hook :

#### Parent.js

```js
import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const ref = useRef();
  return (
    <>
      <h1>Parent Component</h1>
      <Child ref={ref} />
      <button onClick={() => ref.current.handleCountChange()}>
        Increment Parent
      </button>
    </>
  );
};
export default Parent;
```

#### Child.js

```js
import React, { forwardRef, useImperativeHandle, useState } from "react";

const Child = forwardRef((pros, ref) => {
  const [counter, setCounter] = useState(0);

  useImperativeHandle(ref, () => ({
    handleCountChange,
  }));

  const handleCountChange = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Child Component</h1>
      <button onClick={handleCountChange}>Increment Child</button>
      <h2>Child Counter : {counter}</h2>
    </>
  );
});

export default Child;
```

### Custom Hooks :

Create Logger : console log create custom hooks

### useLogger.js

```js
import { useEffect } from "react";

const useLogger = (value) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};

export default useLogger;
```

Child Component for useLogger(counter)

#### Child.js

```js
import React, { forwardRef, useImperativeHandle, useState } from "react";
import useLogger from "../hooks/useLogger";

const Child = forwardRef((pros, ref) => {
  const [counter, setCounter] = useState(0);
  useLogger(counter);
  useImperativeHandle(ref, () => ({
    handleCountChange,
  }));

  const handleCountChange = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Child Component</h1>
      <button onClick={handleCountChange}>Increment Child</button>
      <h2>Child Counter : {counter}</h2>
    </>
  );
});

export default Child;
```

### useLayoutEffect() :

Use this to read layout from the DOM and synchronously re-render.Updates scheduled inside <b>useLayoutEffect</b> will be flushed synchronously, before the browser has a change to paint.

Prefer the standard useEffect when possible to avoid blocking visual updated.

```js
import React, { useEffect, useLayoutEffect } from "react";

const LayoutEffect = () => {
  useLayoutEffect(() => {
    console.log("Use Layout Hook Call");
  }, []);
  useEffect(() => {
    console.log("Use Effect call");
  });
  return <div>Layout Effect Hooks</div>;
};

export default LayoutEffect;
```

## UseFetch Custom Hooks

```js
import { useEffect, useState } from "react";

export default function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}
```

### useFetch() Hooks :

```js
import useFetch from "../hooks/useFetch";

const User = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );
  if (loading) {
    return <h1>Loading .....</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <h1>Fetch Hook Example</h1>
      {data.map((user) => (
        <h6 key={user.id}>{user.name}</h6>
      ))}
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
export default User;
```
