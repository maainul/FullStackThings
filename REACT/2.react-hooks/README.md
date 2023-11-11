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

### Custom Hooks For Pagination: (could be modified for better code practices)

Steps :

1. Create usePagination file in hooks folder :
   This pagination contains all the pagination logic

2. Call the api from the APP.js file. and call the Pages components
   From this lines {data.length > 0 ? <Pages data={data} /> : <p>Loading...</p>}

3. Create Pages.js Files and Update Codes.

```js
import { useState } from "react";

const usePagination = (perPageRecords, totalPageRecords) => {
  const totalPages = Math.ceil(totalPageRecords / perPageRecords);
  const [startPageIndex, setStartPageIndex] = useState(0);
  const [endPageIndex, setEndPageIndex] = useState(perPageRecords - 1);
  const [currentPageIndex, setcurrentPageIndex] = useState(1);

  const displayPage = (pageNo) => {
    setcurrentPageIndex(pageNo);
    let end_page_index = perPageRecords * pageNo - 1;
    let start_page_index = perPageRecords * pageNo - perPageRecords;
    setStartPageIndex(start_page_index);

    if (end_page_index > totalPageRecords) {
      setEndPageIndex(totalPageRecords - 1);
    } else {
      setEndPageIndex(end_page_index);
    }
  };

  return [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ];
};

export default usePagination;
```

### App.js

```js
import { useState, useEffect } from "react";
import "./App.css";
import Pages from "./components/Pages";


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

return (
  <>
 {data.length > 0 ? <Pages data={data} /> : <p>Loading...</p>}
  </>
)

```

### Pages.js

```js
import React from "react";
import Pagination from "@mui/material/Pagination";
import usePagination from "../hooks/usePagination";

const Pages = ({ data }) => {
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex, // eslint-disable-line
    displayPage,
  ] = usePagination(5, data.length);

  return (
    <>
      {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
          displayPosts.push(
            <div key={data[i].id}>
              <h3>
                <span>{i + 1}</span> <span>. </span>
                {data[i].title} <p>{data[i].body}</p>
              </h3>
            </div>
          );
        }
        return displayPosts;
      })()}
      <Pagination
        color="primary"
        count={totalPages}
        onChange={(event, value) => displayPage(value)}
      />
    </>
  );
};

export default Pages;
```

![image](https://github.com/maainul/FullStackThings/assets/37740006/3477058a-caa5-42a1-803e-3f94db502035)

page 1 no = previous
last page = no next page
cur page > 4 "..."
r = n of pages each side
r1 = curp - r
r2 = curp + r

if lp > r2/2; (...)
if lp > r2 ; lp

if (page == 1){
then cur = 1, prev = 0; next = 0;
}
if(cp > 4){

}

/\*

Output:

max: 1
c:1 [1]

max: 3
c:1 [1, 2, 3]
c:2 [1, 2, 3]
c:3 [1, 2, 3]

max: 5
c:1 [1, 2, 3, '…', 5]
c:2 [1, 2, 3, 4, 5]
c:3 [1, 2, 3, 4, 5]
c:4 [1, 2, 3, 4, 5]
c:5 [1, '…', 3, 4, 5]

max: 7
c:1 [1, 2, 3, '…', 7]
c:2 [1, 2, 3, 4, '…', 7]
c:3 [1, 2, 3, 4, 5, '…', 7]
c:4 [1, 2, 3, 4, 5, 6, 7]
c:5 [1, '…', 3, 4, 5, 6, 7]
c:6 [1, '…', 4, 5, 6, 7]
c:7 [1, '…', 5, 6, 7]

max: 9
c:1 [1, 2, 3, '…', 9]
c:2 [1, 2, 3, 4, '…', 9]
c:3 [1, 2, 3, 4, 5, '…', 9]
c:4 [1, 2, 3, 4, 5, 6, '…', 9]
c:5 [1, '…', 3, 4, 5, 6, 7, '…', 9]
c:6 [1, '…', 4, 5, 6, 7, 8, 9]
c:7 [1, '…', 5, 6, 7, 8, 9]
c:8 [1, '…', 6, 7, 8, 9]
c:9 [1, '…', 7, 8, 9]

\*/

(1,1) -> 1
(1,3) -> 1 (2,3), (1) 2 (3)
(1,5) -> 1 (2,3,...) 5, (1) 2 (3,4,5), (1,2) 3 (4,5), (1,2,3), 4,(5), (1,2,3,4), 5, [1,...3,4,5],
(1,7) -> [1,2,3,...,7].[1,2,3,4,...,7]
(1,9)

function paginate({current,max}){

if(!current || !max) return null;

let prev = current === 1 ? null : current - 1;
let next = current === max ? null : current + 1;
let items = [1];

if(current === 1 && max === 1) return {current,prev,next,items}
if(current > 4) items.push('...');

let r = 2;
let r = current - r;
let r2 = current + r;

for(let i = r1 > 2 ? r1:2; i <= Math.min(max,r2);i++) items.push(i)

if(r2 +1 < max) items.push(...)
if(r2 < max) items.push(max)

return {current,prev,next,items}

}
