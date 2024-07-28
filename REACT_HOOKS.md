# Hooks

1. useState
2. useEffect
3. useContext
4. useReducer
5. useCallback
6. useMemo
7. useRef
8. useImperativeHandle
9. useLayoutEffect
10. useDebugValue

# useState Hook in React

1. allows functional components to manage state.
2. It returns an array with two elements: the current state and a function to update that state.

```jsx
const [state, setState] = useState(initialState);
```

```jsx

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count => count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Counter;

`
```

## Real-World Example

```jsx
import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`A name was submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;
```

Using **useState** makes it easy to manage state in functional components, which were previously stateless before the introduction of hooks in React.

# useEffect Hook in React

The useEffect hook allows you to perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM. useEffect is similar to lifecycle methods in class components such as

1. componentDidMount,
2. componentDidUpdate, and
3. componentWillUnmount.

# Syntax

```jsx
useEffect(() => {
  //effect
  return () => {
    // cleanup(optional)
  };
}, [dependencies]);
```

### Life Cycle Of UseEffect & How does useEffect run its code and what is its order ?

```jsx
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("The Count Is = ", count);

    return () => {
      console.log("I am being Cleaned Up");
    };
  }, [count]);

  return (
    <>
      <div>
        <h1>Count is = {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  );
}

export default App;
```

When Component Did Mount :

1. First time :

   The Count Is = 0

2. When Second Click (First Clean Up Function call then component Called)

   I am being Cleaned Up

   The Count Is = 1

3. I am being Cleaned Up

   The Count Is = 2

## Real-World Example

Let’s look at this scenario: imagine we request the server to fetch a particular user’s information using the user’s id. Before the request is completed, we change our mind and try to make another request to get a different user’s information.
At this point, both fetch requests would continue to run even after the component unmounts or the dependencies change. This can lead to unexpected behavior or errors, such as displaying outdated information or attempting to update components that are no longer mounted.
So, it is necessary for us to abort the fetch using the cleanup function. That way, we prevent these memory leak-related issues in our application.

### Cleaning up a subscription

```jsx
useEffect(() => {
  // set our variable to true
  let isApiSubscribed = true;
  axios.get(API).then((response) => {
    if (isApiSubscribed) {
      // handle success
    }
  });
  return () => {
    // cancel the subscription
    isApiSubscribed = false;
  };
}, []);
```

To unsubscribe from our subscriptions before our component unmounts, let’s set our variable, isApiSubscribed, to true, and then we can set it to false when we want to unmount:

### Canceling a fetch request

There are different ways to cancel fetch request calls: either we use

1. AbortController or
2. Axios’ cancel token.

```jsx
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;

  fetch(url, { signal })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch();
  return () => {
    controller.abort();
  };
}, []);
```

We enhance our error handling, and we can add a condition within our catch block to prevent errors when aborting a fetch request. This error happens because, while unmounting, we still try to update the state when we handle our errors.

By implementing a condition that identifies if the error is due to an abort action, we can avoid updating the state in such scenarios, ensuring smoother error management and component lifecycle handling:

```jsx
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;

  fetch(url, { signal })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      if (err.name == "AbortError") {
        console.log("Successfully aborted");
      } else {
        // handle error
      }
    });
  return () => {
    controller.abort();
  };
}, []);
```

Now, even if we get impatient and navigate to another page before our request resolves, we won’t get that error again because the request will abort before the component unmounts. If we get an abort error, the state won’t update either.

So, let’s see how we can do the same using the Axios cancel token.

```jsx
useEffect(() => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  axios
    .get(url, {
      cancelToken: source.token,
    })
    .catch((err) => {
      if (axios.isCancel(err)) {
        console.log("Successfully aborted");
      } else {
        //handle error
      }
    });

  return () => {
    source.cancel();
  };
}, []);
```

## How to use the useEffect cleanup function

### NORMAL WAY

```jsx
import React, { useState, useEffect } from "react";
export default function Post() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://jsonplaceholder.typicode.com/posts", { signal: signal })
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => setError(err));
  }, []);
  return (
    <div>
      {!error ? (
        posts.map((post) => (
          <ul key={post.id}>
            <li>{post.title}</li>
          </ul>
        ))
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

`
```

## Using Cleanup

````jsx

import React, { useState, useEffect } from "react";
export default function Post() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/posts", { signal: signal })
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("successfully aborted");
        } else {
          setError(err);
        }
      });

    return () => AbortController.abort();
  }, []);
  return (
    <div>
      {!error ? (
        posts.map((post) => (
          <ul key={post.id}>
            <li>{post.title}</li>
          </ul>
        ))
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

```
https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/#:~:text=The%20useEffect%20Hook%20is%20designed,removes%20unnecessary%20and%20unwanted%20behaviors.

````

## useContext :

The useContext hook in React is used to access the context values. Context provides a way to share values like state or functions between components without having to pass props down manually at every level.

## Example

```jsx
import React, { createContext, useState, useContext } from "react";
import ReactDOM from "react-dom";

// Create Context
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("default value");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue("new value")}>Change Value</button>
    </div>
  );
};

const App = () => (
  <MyProvider>
    <MyComponent />
  </MyProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

## Real Example

```jsx
const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [userID, setUserID] = useState(undefined);

  async function getLoggedInUserInfo() {
    const loggedInRes = await axios.get(url);
    setLoggedIn(loggedInRes.data.loggedIn);
    setUserID(loggedInRes.data.userID);
  }

  useEffect(() => {
    getLoggedInUserInfo();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedInUserInfo, userID }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
export { AuthContextProvider };
```

## useReducer

The useReducer hook in React is a way to manage complex state logic in a functional component. It's an alternative to useState, especially when the state logic involves multiple sub-values or when the next state depends on the previous one. It is inspired by the redux library and provides a more scalable way to handle state compared to useState.

Using useReducer is particularly beneficial in complex forms where you have many fields and need to manage state transitions in a clear and consistent manner. It keeps your state logic organized, scalable, and easier to maintain. If your form is simple, useState might be sufficient, but as complexity grows, useReducer becomes more advantageous.

```js
import React, { useReducer } from "react";

// Define the initial state
const initialState = { count: 0 };

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  // Use useReducer to get state and dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default Counter;
```

### When to Use useReducer

```js
const [state, setState] = useState({ count: 0, loading: false, error: null });

function increment() {
  setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
}

function setLoading(loading) {
  setState((prevState) => ({ ...prevState, loading }));
}

function setError(error) {
  setState((prevState) => ({ ...prevState, error }));
}
```

With useReducer, the state transitions are more explicit and organized:

```js
const initialState = { count: 0, loading: false, error: null };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "setLoading":
      return { ...state, loading: action.payload };
    case "setError":
      return { ...state, error: action.payload };
    default:
      throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, initialState);
```

Multiple State Transitions: If you have several state transitions that need to happen in response to a single action or event, useReducer can handle them more cleanly.

```js
function loadData() {
  setLoading(true);
  fetch("/api/data")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}
```

```js
const initialState = { data: null, loading: false, error: null };

function reducer(state, action) {
  switch (action.type) {
    case "fetch_start":
      return { ...state, loading: true };
    case "fetch_success":
      return { ...state, loading: false, data: action.payload };
    case "fetch_error":
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, initialState);

function loadData() {
  dispatch({ type: "fetch_start" });
  fetch("/api/data")
    .then((response) => response.json())
    .then((data) => dispatch({ type: "fetch_success", payload: data }))
    .catch((error) => dispatch({ type: "fetch_error", payload: error }));
}
```

### Here’s a more comprehensive example demonstrating the benefits of useReducer:

```js
import React, { useReducer, useEffect } from "react";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error();
  }
}

function DataFetchingComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_INIT" });
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "FETCH_FAILURE", payload: error }));
  }, []);

  const { data, loading, error } = state;

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>Data: {JSON.stringify(data)}</p>
      )}
    </div>
  );
}

export default DataFetchingComponent;
```
