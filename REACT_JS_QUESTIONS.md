# React

### 1. **What is React?**

**Answer:** React is a JavaScript library for building user interfaces, primarily for single-page applications. It's maintained by Facebook and a community of developers.

### 2. **What is JSX?**

**Answer:** JSX stands for JavaScript XML. It allows you to write HTML directly within JavaScript. JSX makes it easier to write and add HTML in React.

### 3. **Explain the concept of a Virtual DOM.**

**Answer:** The Virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize updates by comparing it with the real DOM and applying only the necessary changes.

### 4. **What are components in React?**

**Answer:** Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render function.

### 5. **What is the difference between a functional component and a class component?**

**Answer:** Functional components are stateless and written as plain JavaScript functions, while class components are stateful and created using ES6 classes. As of React 16.8, functional components can use state with hooks.

### 6. **What are React hooks?**

**Answer:** Hooks are functions that let you use state and other React features in functional components. Examples include `useState`, `useEffect`, and `useContext`.

### 7. **How do you create a React app using Create React App?**

**Answer:** You can create a React app by running `npx create-react-app my-app` in your terminal, where `my-app` is the name of your app.

### 8. **How can you pass data between components in React?**

**Answer:** You can pass data between components using props. Props allow you to pass data from a parent component to a child component.

### 9. **What is state in React?**

**Answer:** State is a built-in object used to store property values that belong to a component. When the state changes, the component re-renders.

### 10. **Explain the lifecycle methods in React.**

**Answer:** Lifecycle methods are special methods each component can have. They allow you to hook into specific times during a component's life in the DOM. Examples include `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

### 11. **How do you update the state of a component in React?**

**Answer:** You update the state of a component using the `setState` function in class components or the `useState` hook in functional components.

### 12. **What is a pure component in React?**

**Answer:** A pure component in React is a component that renders the same output for the same props and state. It performs a shallow comparison on its props and state and prevents unnecessary re-renders.

### 13. **How do you conditionally render components in React?**

**Answer:** You can conditionally render components using JavaScript conditional operators such as `if`, `else`, `&&`, and the ternary operator.

### 14. **What is the purpose of the `key` prop in React?**

**Answer:** The `key` prop helps React identify which items have changed, been added, or removed. It improves performance when rendering lists by ensuring React only re-renders what has changed.

### 15. **Explain the concept of lifting state up in React.**

**Answer:** Lifting state up refers to moving the state to the closest common ancestor of components that need to share that state. This ensures that all components that need the state have access to it.

### 16. **What is context in React?**

**Answer:** Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### 17. **How do you manage side effects in React?**

**Answer:** You manage side effects in React using the `useEffect` hook in functional components or `componentDidMount` and `componentDidUpdate` lifecycle methods in class components.

### 18. **How do you prevent re-renders in React?**

**Answer:** Re-renders can be prevented by using `React.memo` for functional components, `shouldComponentUpdate` for class components, or by using hooks like `useMemo` and `useCallback`.

### 19. **What is the difference between `useEffect` and `useLayoutEffect`?**

**Answer:** `useEffect` runs after the render is committed to the screen, while `useLayoutEffect` runs synchronously after all DOM mutations but before the browser has painted.

### 20. **What is React Router?**

**Answer:** React Router is a library used for routing in React applications. It allows you to define routes in your application and navigate between them.

### 21. **How do you use React Router?**

**Answer:** You can use React Router by wrapping your app in a `Router` component, and defining routes using `Route`, `Link`, and `Switch` components.

### 22. **How do you fetch data in React?**

**Answer:** Data can be fetched in React using the `fetch` API or libraries like Axios, usually inside the `useEffect` hook to avoid side effects.

### 23. **How do you handle forms in React?**

**Answer:** Forms in React are handled by maintaining state for form fields using `useState` or component state, and updating the state on user input using event handlers like `onChange`.

### 24. **What is the purpose of `PropTypes` in React?**

**Answer:** `PropTypes` is used to validate the types of props passed to a component, ensuring they are of the expected type and providing warnings if they are not.

### 25. **What is the `useReducer` hook in React?**

**Answer:** `useReducer` is a hook that is used for managing more complex state logic in functional components. It works similarly to Redux, by dispatching actions to update the state.

### 26. **How do you handle errors in React?**

**Answer:** Errors in React can be handled using error boundaries, which are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.

### 27. **What is code splitting in React?**

**Answer:** Code splitting is a technique that allows you to split your code into smaller bundles, which can be loaded on demand. This improves the performance of your React app.

### 28. **How do you implement lazy loading in React?**

**Answer:** Lazy loading in React can be implemented using `React.lazy` and `Suspense` to dynamically load components when they are needed.

### 29. **What is the purpose of `React.StrictMode`?**

**Answer:** `React.StrictMode` is a tool that highlights potential problems in an application. It doesn't render any UI but helps find potential issues in your code during development.

### 30. **What are Higher-Order Components (HOCs) in React?**

**Answer:** HOCs are functions that take a component and return a new component. They are used to reuse component logic.

### 31. **What is the difference between controlled and uncontrolled components?**

**Answer:** Controlled components have their form data controlled by React state, while uncontrolled components maintain their own internal state and rely on refs to access form data.

### 32. **How do you optimize performance in a React app?**

**Answer:** Performance can be optimized by using techniques like memoization (`React.memo`, `useMemo`, `useCallback`), code splitting, lazy loading, and avoiding unnecessary re-renders.

### 33. **What is the `useRef` hook in React?**

**Answer:** The `useRef` hook returns a mutable ref object, which persists for the lifetime of the component. It can be used to access DOM elements directly or to keep a mutable value across renders.

### 34. **What is React's Concurrent Mode?**

**Answer:** Concurrent Mode is an experimental feature in React that allows React to work on multiple tasks simultaneously, rendering components in a more fluid and responsive manner.

### 35. **Explain the concept of React Fiber.**

**Answer:** React Fiber is a reimplementation of React's reconciliation algorithm. It allows React to break down rendering work into chunks and spread it out over multiple frames, improving the responsiveness of applications.

### 36. **How do you test React components?**

**Answer:** React components can be tested using tools like Jest and React Testing Library, which provide utilities for rendering components and interacting with them in tests.

### 37. **What is the purpose of `useContext` in React?**

**Answer:** `useContext` is a hook that lets you access the value of a context directly, without needing to use a `Consumer` component.

### 38. **How do you handle events in React?**

**Answer:** Events in React are handled by passing event handlers to JSX elements as props. These handlers are typically functions that handle specific events like clicks, form submissions, etc.

### 39. **What is the `useImperativeHandle` hook in React?**

**Answer:** `useImperativeHandle` is a hook that customizes the instance value that is exposed when a parent component uses `ref` to interact with a child component.

### 40. **What is the difference between `React.memo` and `useMemo`?**

**Answer:** `React.memo` is a higher-order component
Certainly! Let's continue with the answer to question 40 and the remaining questions:

---

### 40. **What is the difference between `React.memo` and `useMemo`?**

**Answer:** `React.memo` is a higher-order component that memoizes the rendered output of a component, preventing unnecessary re-renders if the props have not changed. `useMemo`, on the other hand, is a hook that memoizes the result of a calculation or a function, recomputing it only when its dependencies change.

### 41. **How do you pass a method to a child component in React?**

**Answer:** You can pass a method to a child component as a prop, allowing the child component to call the method when needed. For example:

```jsx
function ParentComponent() {
  const handleClick = () => {
    console.log("Clicked!");
  };
  return <ChildComponent onClick={handleClick} />;
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}
```

### 42. **What is the difference between `useCallback` and `useMemo`?**

**Answer:** `useCallback` is a hook that memoizes a function, ensuring that the same function instance is returned if its dependencies have not changed. `useMemo` memoizes the result of a function, recomputing it only when its dependencies change. Essentially, `useCallback` returns a memoized function, while `useMemo` returns a memoized value.

### 43. **How do you handle conditional rendering of multiple components?**

**Answer:** You can use conditional operators like `if`, `else if`, `switch`, or the ternary operator to render different components based on certain conditions. For example:

```jsx
function App({ isLoggedIn }) {
  return <div>{isLoggedIn ? <WelcomeUser /> : <Login />}</div>;
}
```

### 44. **What is the purpose of `useEffect` cleanup function?**

**Answer:** The cleanup function in `useEffect` is used to clean up side effects that were created during the effect's execution, such as unsubscribing from subscriptions, clearing timers, or cancelling network requests. It is executed when the component is unmounted or before the effect re-runs due to dependency changes.

### 45. **Explain the difference between `componentDidMount` and `useEffect`.**

**Answer:** `componentDidMount` is a lifecycle method used in class components that runs after the component has been rendered for the first time. `useEffect` is a hook used in functional components that can be configured to run after every render, after the first render, or when specific dependencies change.

### 46. **How do you handle errors in asynchronous code in React?**

**Answer:** Errors in asynchronous code can be handled using `try-catch` blocks in `async` functions or by using `.catch()` on Promises. Additionally, you can use error boundaries to catch errors in the component tree.

### 47. **What is the `Suspense` component in React?**

**Answer:** `Suspense` is a component that lets you wait for some code to load and display a fallback while waiting. It's often used with React.lazy for code-splitting components.

### 48. **What are portals in React?**

**Answer:** Portals provide a way to render children into a DOM node that exists outside the hierarchy of the parent component. It is useful for rendering components like modals, tooltips, or dropdowns.

### 49. **How do you implement server-side rendering (SSR) in React?**

**Answer:** Server-side rendering can be implemented in React using frameworks like Next.js, which allows React components to be rendered on the server and the HTML sent to the client. This can improve SEO and performance for the initial load.

### 50. **What is the `useTransition` hook in React?**

**Answer:** `useTransition` is a hook that allows you to defer some state updates to prevent the UI from becoming unresponsive. It is useful for transitions where you want to show an update immediately, while other updates can be delayed.


### 51. **What is `ReactDOM`?**

**Answer:** `ReactDOM` is the entry point to the DOM-related rendering methods in React. It provides methods like `ReactDOM.render()` to render React components into the DOM.

### 52. **How do you update state based on the previous state in React?**

**Answer:** To update state based on the previous state, you can pass a function to `setState` or `useState`. This function receives the previous state as its argument.

```jsx
setState((prevState) => prevState + 1);
```

### 53. **What is `React.Fragment`?**

**Answer:** `React.Fragment` allows you to group a list of children without adding extra nodes to the DOM. It’s often used to return multiple elements from a component.

```jsx
return (
  <React.Fragment>
    <Child1 />
    <Child2 />
  </React.Fragment>
);
```

### 54. **How do you handle async logic in `useEffect`?**

**Answer:** To handle async logic in `useEffect`, you can define an async function inside the `useEffect` and call it, or use the `.then()` method on promises directly.

```jsx
useEffect(() => {
  const fetchData = async () => {
    const result = await fetch("/api/data");
    setData(await result.json());
  };
  fetchData();
}, []);
```

### 55. **What is the difference between controlled and uncontrolled inputs?**

**Answer:** Controlled inputs have their value managed by React state, while uncontrolled inputs rely on the DOM to handle the input state. Controlled inputs provide more control and validation, while uncontrolled inputs are simpler and faster to implement.

### 56. **How do you use refs in React?**

**Answer:** Refs are used to access DOM elements or React elements directly. You can create a ref using `React.createRef()` or `useRef()`, and attach it to an element using the `ref` attribute.

```jsx
const inputRef = useRef();
return <input ref={inputRef} />;
```

### 57. **What is the purpose of `shouldComponentUpdate`?**

**Answer:** `shouldComponentUpdate` is a lifecycle method in class components that allows you to prevent unnecessary re-renders by returning `false` when the component's props or state do not change in a way that requires a re-render.

### 58. **How do you implement debouncing in React?**

**Answer:** Debouncing in React can be implemented by using a timeout to delay the execution of a function until a certain period of time has passed since the last time it was invoked.

```jsx
const [query, setQuery] = useState("");
useEffect(() => {
  const timeoutId = setTimeout(() => {
    search(query);
  }, 300);
  return () => clearTimeout(timeoutId);
}, [query]);
```

### 59. **What is `React.lazy`?**

**Answer:** `React.lazy` is a function that allows you to load a component dynamically using a function that returns a promise. It's useful for code splitting and lazy loading.

```jsx
const LazyComponent = React.lazy(() => import("./LazyComponent"));
```

### 60. **How do you memoize expensive calculations in React?**

**Answer:** You can memoize expensive calculations using the `useMemo` hook, which caches the result of the calculation and recomputes it only when the dependencies change.

```jsx
const computedValue = useMemo(() => {
  return expensiveCalculation(input);
}, [input]);
```

### 61. **What are React portals used for?**

**Answer:** React portals are used to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This is useful for rendering modals, tooltips, and dropdowns.

### 62. **How do you handle authentication in a React app?**

**Answer:** Authentication in React can be handled by using libraries like `react-router`, `JWT`, and context for managing auth state. Auth state can be managed in a global state or context and protected routes can be implemented using route guards.

### 63. **What is the `useLayoutEffect` hook?**

**Answer:** `useLayoutEffect` is similar to `useEffect`, but it fires synchronously after all DOM mutations. It is useful for reading layout and synchronously re-rendering.

### 64. **How do you implement routing in a React app?**

**Answer:** Routing in a React app is typically implemented using the `react-router-dom` library. You define routes using `Route`, `Switch`, `Link`, and `BrowserRouter`.

```jsx
<BrowserRouter>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </Switch>
</BrowserRouter>
```

### 65. **How do you handle form validation in React?**

**Answer:** Form validation in React can be handled using controlled components along with validation logic in event handlers. You can also use libraries like `Formik` or `react-hook-form` for more complex validations.

### 66. **What is `React.memo`?**

**Answer:** `React.memo` is a higher-order component that memoizes the rendered output of a component. It prevents unnecessary re-renders when the props have not changed.

### 67. **How do you share state between multiple components?**

**Answer:** State can be shared between multiple components by lifting the state up to the nearest common ancestor or by using React Context.

### 68. **How do you use custom hooks in React?**

**Answer:** Custom hooks are functions that start with `use` and allow you to extract reusable logic. They are created by combining existing hooks and can be used like any other hook.

```jsx
function useCustomHook() {
  const [state, setState] = useState(initialValue);
  // Add logic here
  return [state, setState];
}
```

### 69. **How do you implement code splitting in a React app?**

**Answer:** Code splitting in React can be implemented using `React.lazy` and `Suspense`, or with tools like Webpack and dynamic imports to split the code into smaller bundles.

### 70. **What is the difference between a presentational component and a container component?**

**Answer:** Presentational components focus on how things look and are typically stateless, while container components focus on how things work, managing state and passing props down to presentational components.

### 71. **How do you optimize re-rendering of lists in React?**

**Answer:** Re-rendering of lists can be optimized by using the `key` prop for list items, memoizing components with `React.memo`, and using virtualization libraries like `react-window`.

### 72. **What is `useDebugValue` in React?**

**Answer:** `useDebugValue` is a hook used to display a label for custom hooks in React DevTools. It's useful for debugging and profiling custom hooks.

### 73. **How do you manage global state in a React application?**

**Answer:** Global state in a React application can be managed using Context API, Redux, or other state management libraries like MobX or Zustand.

### 74. **What is a React fiber?**

**Answer:** React Fiber is the reimplementation of the React reconciliation algorithm. It allows React to split rendering work into smaller chunks and spread it over multiple frames, leading to smoother and more responsive user interfaces.

### 75. **How do you create an error boundary in React?**

**Answer:** An error boundary is a class component that implements the `componentDidCatch` and `getDerivedStateFromError` lifecycle methods to catch and handle errors in the component tree.

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

### 76. **What is reconciliation in React?**

**Answer:** Reconciliation is the process by which React updates the DOM to match the Virtual DOM. React compares the new Virtual DOM with the previous one and efficiently updates the DOM to reflect the changes.

### 77. **How do you prevent memory leaks in React?**

**Answer:** Memory leaks in React can be prevented by cleaning up side effects in `useEffect` using return functions, unsubscribing from listeners, and properly unmounting components.

### 78. **What are controlled components in React?**

**Answer:** Controlled components are components where form data is handled by React state. The state serves as the single source of truth for the input values.

### 79. **How do you reset a form in React?**

**Answer:** A form in React can be reset by setting the state back to its initial values or by using the `reset` method on the form's `ref`.

```jsx
const resetForm = () => {
  setFormState(initialState);
};
```

### 80. **What is server-side rendering (SSR) and how does it differ from client-side rendering (CSR)?**

**Answer:** Server-side rendering (SSR) involves rendering the initial HTML on the server and sending it to the client, which then hydrates the React components. This can improve the initial load time and SEO. Client-side rendering (CSR) involves rendering the entire application on the client after the JavaScript bundle is loaded, leading to a blank page during the initial load.

### 81. **How do you handle accessibility in React?**

**Answer:** Accessibility in React can be handled by using semantic HTML elements, ARIA attributes, and focusing on keyboard navigation and screen reader compatibility. React supports the `aria-*` attributes and offers tools like `eslint-plugin-jsx-a11y` to enforce accessibility best practices.

### 82. **What is the purpose of the `key` prop in React lists?**

**Answer:** The `key` prop is used to uniquely identify elements in a list and helps React optimize the rendering process by keeping track of which items have changed, been added, or removed. It should be a stable, unique identifier for each list item.

### 83. **How do you implement an optimistic UI update in React?**

**Answer:** Optimistic UI updates are implemented by updating the UI immediately as if the operation succeeded, and then syncing with the server. If the server request fails, you can roll back the UI to the previous state.

```jsx
const handleSave = () => {
  const previousState = data;
  setData(optimisticData);
  saveDataToServer(optimisticData).catch(() => setData(previousState));
};
```

### 84. **What is the difference between `createRef` and `useRef`?**

**Answer:** `createRef` is typically used in class components to create a ref, whereas `useRef` is a hook used in functional components. `useRef` can also be used to store mutable values that persist across renders without causing a re-render.

### 85. **How do you handle file uploads in React?**

**Answer:** File uploads in React can be handled by creating a form with an input type of `file`. You can then use the File API or FormData to read and send the file to the server.

```jsx
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append("file", file);
  // Send formData to server
};
```

### 86. **How do you optimize the performance of a React app?**

**Answer:** Performance optimization in React can be achieved through various techniques such as memoizing components with `React.memo`, using `useMemo` and `useCallback`, code-splitting with `React.lazy`, reducing unnecessary re-renders, and optimizing list rendering with `React.Fragment` and virtualization libraries.

### 87. **What is the `useReducer` hook?**

**Answer:** `useReducer` is a hook that provides an alternative to `useState` for managing complex state logic. It takes a reducer function and an initial state, and returns the current state along with a dispatch function to trigger state changes.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### 88. **How do you implement dark mode in a React app?**

**Answer:** Dark mode can be implemented by toggling a CSS class or updating a theme context. You can store the user's preference in state, localStorage, or use a CSS media query to detect the preferred color scheme.

```jsx
const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};
```

### 89. **What is the difference between the `useState` and `useReducer` hooks?**

**Answer:** `useState` is a simpler hook for managing local state in a component, while `useReducer` is more suitable for complex state logic, where state transitions depend on the current state and actions.

### 90. **How do you handle pagination in a React app?**

**Answer:** Pagination can be handled by fetching data in chunks and managing the current page state. You can use a `useEffect` hook to refetch data when the page changes and render a subset of data accordingly.

```jsx
const [page, setPage] = useState(1);
useEffect(() => {
  fetchData(page);
}, [page]);
```

### 91. **What is the purpose of the `prop-types` package in React?**

**Answer:** The `prop-types` package is used for type checking in React components. It allows you to define expected types for props, ensuring that the correct data types are passed to your components.

```jsx
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
```

### 92. **How do you test React components?**

**Answer:** React components can be tested using tools like Jest and React Testing Library. Jest is used for running tests, and React Testing Library is used for rendering components, interacting with them, and asserting on their output.

```jsx
test("renders a component", () => {
  const { getByText } = render(<MyComponent />);
  expect(getByText("Hello World")).toBeInTheDocument();
});
```

### 93. **How do you implement internationalization (i18n) in a React app?**

**Answer:** Internationalization in React can be implemented using libraries like `react-i18next`. It involves setting up translation files, configuring the i18n provider, and using the `useTranslation` hook to access translations in components.

### 94. **What is the purpose of the `useImperativeHandle` hook?**

**Answer:** `useImperativeHandle` is a hook that customizes the instance value that is exposed to parent components when using `ref`. It is typically used when you want to control the behavior of a child component from its parent.

```jsx
useImperativeHandle(ref, () => ({
  focus: () => {
    inputRef.current.focus();
  },
}));
```

### 95. **How do you handle side effects in React?**

**Answer:** Side effects in React are typically handled using the `useEffect` hook. This includes tasks like data fetching, setting up subscriptions, and manually changing the DOM.

```jsx
useEffect(() => {
  fetchData();
}, []);
```

### 96. **What is tree shaking, and how does it apply to React?**

**Answer:** Tree shaking is a technique used to eliminate dead code from the final bundle. In React, it ensures that only the code that is actually used is included in the bundle, reducing the overall bundle size and improving performance.

### 97. **How do you create a context in React?**

**Answer:** Context in React is created using the `createContext` function. You then provide the context value using a `Provider` component, and access it in child components using `useContext` or `Context.Consumer`.

```jsx
const MyContext = createContext();
function App() {
  return (
    <MyContext.Provider value={/* some value */}>
      <ChildComponent />
    </MyContext.Provider>
See     );
}
```

### 98. **How do you handle navigation in React without using `react-router`?**

**Answer:** Navigation without `react-router` can be handled using the browser's History API with methods like `window.history.pushState` and `window.history.replaceState`, along with listening for `popstate` events.

### 99. **What is the `strict mode` in React?**

**Answer:** Strict Mode is a feature in React that helps identify potential problems in an application. It activates additional checks and warnings for its descendants. It doesn’t render any visible UI but logs issues to the console.

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

### 100. **How do you implement lazy loading for images in React?**

**Answer:** Lazy loading images in React can be implemented using the `loading="lazy"` attribute on `img` elements, or by using a library like `react-lazyload`. It ensures that images are only loaded when they are in the viewport.

```jsx
<img src="image.jpg" loading="lazy" alt="Lazy loaded image" />
```

---

These additional questions and answers should provide a well-rounded understanding of React and its various concepts, helping you prepare for advanced coding tests and interviews.

Certainly! Here are some React JS coding test questions along with their answers:

---

### 1. **Create a simple functional component in React that displays "Hello, World!"**

**Answer:**

```jsx
import React from "react";

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;
```

### 2. **Write a React component that takes a `name` prop and displays "Hello, [name]!"**

**Answer:**

```jsx
import React from "react";

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

### 3. **Implement a button in React that increments a counter each time it is clicked.**

**Answer:**

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
```

### 4. **Write a React component that displays a list of items passed as props.**

**Answer:**

```jsx
import React from "react";

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ItemList;
```

### 5. **Create a controlled form in React with an input field and a submit button.**

**Answer:**

```jsx
import React, { useState } from "react";

function ControlledForm() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted value: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
```

### 6. **Implement a component that toggles between "On" and "Off" when a button is clicked.**

**Answer:**

```jsx
import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <p>{isOn ? "On" : "Off"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default Toggle;
```

### 7. **Write a component that displays a list of user names and allows each name to be edited.**

**Answer:**

```jsx
import React, { useState } from "react";

function EditableList({ users }) {
  const [names, setNames] = useState(users);

  const handleChange = (index, newName) => {
    const updatedNames = [...names];
    updatedNames[index] = newName;
    setNames(updatedNames);
  };

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>
          <input
            type="text"
            value={name}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </li>
      ))}
    </ul>
  );
}

export default EditableList;
```

### 8. **Create a component that fetches data from an API and displays it.**

**Answer:**

```jsx
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetcher;
```

### 9. **Implement a component that handles errors using an error boundary.**

**Answer:**

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function ProblematicComponent() {
  throw new Error("Oops!");
  return <div>Problematic Component</div>;
}

function App() {
  return (
    <ErrorBoundary>
      <ProblematicComponent />
    </ErrorBoundary>
  );
}

export default App;
```

### 10. **Create a component that uses the `useReducer` hook to manage complex state.**

**Answer:**

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

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

### 11. **Write a React component that uses `useContext` to manage and consume context.**

**Answer:**

```jsx
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
```

### 12. **Create a React component that uses `React.lazy` and `Suspense` for code splitting.**

**Answer:**

```jsx
import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

### 13. **Write a component that debounces an input field's value.**

**Answer:**

````jsx
import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

function DebouncedInput() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const debouncedChangeHandler = debounce((val) => {
    setDebouncedValue(val);
  }, 300);

  useEffect(() => {
    debouncedChangeHandler(value);
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      Certainly! Continuing from question 13: --- ### 13. **Write a component that
      debounces an input field's value. (continued)** **Answer:** ```jsx
      <div>Debounced Value: {debouncedValue}</div>
    </div>
  );
}

export default DebouncedInput;
````

### 14. **Create a component that displays a list of numbers and allows the user to filter the list based on a search term.**

**Answer:**

```jsx
import React, { useState } from "react";

function FilterableList({ numbers }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNumbers = numbers.filter((number) =>
    number.toString().includes(searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterableList;
```

### 15. **Implement a component that uses `useEffect` to fetch and display user data from an API.**

**Answer:**

```jsx
import React, { useState, useEffect } from "react";

function UserFetcher() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/user")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserFetcher;
```

### 16. **Write a component that manages a list of items where users can add new items.**

**Answer:**

```jsx
import React, { useState } from "react";

function ItemManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemManager;
```

### 17. **Create a React component that calculates and displays the sum of an array of numbers.**

**Answer:**

```jsx
import React from "react";

function SumCalculator({ numbers }) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  return (
    <div>
      <h1>Sum: {sum}</h1>
    </div>
  );
}

export default SumCalculator;
```

### 18. **Write a component that uses `useMemo` to optimize expensive calculations.**

**Answer:**

```jsx
import React, { useState, useMemo } from "react";

function ExpensiveComponent({ number }) {
  const computeExpensiveValue = (num) => {
    console.log("Computing...");
    // Simulate expensive calculation
    return num * 2;
  };

  const computedValue = useMemo(() => computeExpensiveValue(number), [number]);

  return (
    <div>
      <p>Computed Value: {computedValue}</p>
    </div>
  );
}

function App() {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <ExpensiveComponent number={number} />
    </div>
  );
}

export default App;
```

### 19. **Create a component that uses `useCallback` to memoize a callback function.**

**Answer:**

```jsx
import React, { useState, useCallback } from "react";

function Button({ onClick }) {
  console.log("Button rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Button onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
```

### 20. **Implement a React component that uses a `useRef` to manage focus on an input field.**

**Answer:**

```jsx
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```

### 21. **Write a React component that uses conditional rendering to display different messages based on user authentication status.**

**Answer:**

```jsx
import React, { useState } from "react";

function AuthStatus() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? <h1>Welcome back, User!</h1> : <h1>Please log in.</h1>}
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default AuthStatus;
```

### 22. **Create a React component that uses `useLayoutEffect` to perform a DOM measurement.**

**Answer:**

```jsx
import React, { useLayoutEffect, useRef, useState } from "react";

function LayoutEffectExample() {
  const divRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (divRef.current) {
      setSize({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "100px", height: "100px", background: "lightblue" }}
      >
        Measure me!
      </div>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  );
}

export default LayoutEffectExample;
```

### 23. **Implement a React component that manages a list of tasks with checkboxes to mark them as completed.**

**Answer:**

```jsx
import React, { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
    { id: 3, text: "Task 3", completed: false },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
```

### 24. **Write a component that displays a countdown timer using `useEffect`.**

**Answer:**

````jsx
import React, { useState, useEffect } from 'react';

function CountdownTimer({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count === 0) return;
    const timerId = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [count]);

  return (
    <div>
      <h1>Countdown: {count}</h1>
    </div>
  );
}

export default CountdownTimer;
````

### 25. **Create a component that handles form submission with validation.**

**Answer:**

```jsx
import React, { useState } from "react";

function ValidatedForm() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setError("Input cannot be empty");
    } else {
      setError("");
      alert(`Submitted: ${input}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default ValidatedForm;
```

### 26. **Implement a React component that toggles a class on a div element when a button is clicked.**

**Answer:**

```jsx
import React, { useState } from "react";
import "./App.css"; // Ensure to define .active class in App.css

function ToggleClass() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className={isActive ? "active" : ""}>Toggle Me!</div>
      <button onClick={() => setIsActive(!isActive)}>Toggle Class</button>
    </div>
  );
}

export default ToggleClass;
```

### 27. **Create a component that uses `useImperativeHandle` to expose a custom method to parent components.**

**Answer:**

```jsx
import React, { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} type="text" />;
});

function Parent() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default Parent;
```

### 28. **Write a component that uses `useEffect` to run a side effect when a prop changes.**

**Answer:**

```jsx
import React, { useEffect } from "react";

function PropEffectComponent({ value }) {
  useEffect(() => {
    console.log("Value changed:", value);
  }, [value]);

  return <div>Current Value: {value}</div>;
}

export default PropEffectComponent;
```

### 29. **Create a React component that renders a list of items and provides a way to remove an item from the list.**

**Answer:**

```jsx
import React, { useState } from "react";

function RemovableList() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => removeItem(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default RemovableList;
```

### 30. **Implement a React component that displays a list of users with their names and ages.**

**Answer:**

```jsx
import React from "react";

function UserList({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.name} (Age: {user.age})
        </li>
      ))}
    </ul>
  );
}

export default UserList;
```

### 31. **Create a component that uses `useReducer` for managing form state.**

**Answer:**

```jsx
import React, { useReducer } from "react";

const initialState = { name: "", email: "" };

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${state.name}, Email: ${state.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
```

### 32. **Write a component that implements pagination to display a subset of items from a larger list.**

**Answer:**

```jsx
import React, { useState } from "react";

function PaginatedList({ items, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <ul>
        {paginatedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
          Previous
        </button>
        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginatedList;
```

### 33. **Create a component that uses `useMemo` to optimize the performance of a computed property.**

**Answer:**

```jsx
import React, { useMemo, useState } from "react";

function ExpensiveComputation({ number }) {
  const computeExpensiveValue = (num) => {
    console.log("Computing expensive value...");
    // Simulate an expensive computation
    return num * 1000;
  };

  const result = useMemo(() => computeExpensiveValue(number), [number]);

  return <div>Computed Value: {result}</div>;
}

function App() {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <ExpensiveComputation number={number} />
    </div>
  );
}

export default App;
```

### 34. **Implement a component that uses `useCallback` to optimize a callback function.**

**Answer:**

```jsx
import React, { useState, useCallback } from "react";

function ChildComponent({ onButtonClick }) {
  console.log("ChildComponent rendered");
  return <button onClick={onButtonClick}>Click Me</button>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <ChildComponent onButtonClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}

export default ParentComponent;
```

### 35. **Create a React component that conditionally applies different styles based on props.**

**Answer:**

````jsx
import React from 'react';

function StyledComponent({ isPrimary }) {
  const style = {
    backgroundColor: isPrimary ? 'blue' : 'gray',
    color: 'white',
    padding: '10px',
    borderRadius:'5px',
    textAlign: 'center'
  };

  return <div style={style}>This is a {isPrimary ? 'Primary' : 'Secondary'} Box</div>;
}

export default StyledComponent;
````

### 36. **Write a component that toggles between light and dark themes.**

**Answer:**

```jsx
import React, { useState } from "react";

function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyle = {
    backgroundColor: isDarkMode ? "#333" : "#FFF",
    color: isDarkMode ? "#FFF" : "#000",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={themeStyle}>
      <p>Current Theme: {isDarkMode ? "Dark" : "Light"}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggler;
```

### 37. **Create a React component that fetches and displays a list of posts from a public API.**

**Answer:**

```jsx
import React, { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
```

### 38. **Create a component that uses `React.memo` to prevent unnecessary re-renders.**

**Answer:**

```jsx
import React, { memo } from "react";

const ExpensiveComponent = memo(({ value }) => {
  console.log("ExpensiveComponent rendered");
  return <div>Value: {value}</div>;
});

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <ExpensiveComponent value={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
```

### 39. **Write a component that manages a list of to-do items with the ability to add, remove, and mark items as completed.**

**Answer:**

```jsx
import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodoCompletion = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoCompletion(index)}
            />
            {todo.text}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

### 40. **Create a component that fetches user data from an API and displays it in a table format.**

**Answer:**

```jsx
import React, { useState, useEffect } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
```

### 41. **Write a component that displays a list of items and highlights the selected item when clicked.**

**Answer:**

```jsx
import React, { useState } from "react";

function HighlightedList({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => handleClick(index)}
          style={{
            backgroundColor: index === selectedIndex ? "yellow" : "transparent",
            cursor: "pointer",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default HighlightedList;
```

### 42. **Create a component that displays a notification message and auto-hides it after 3 seconds.**

**Answer:**

```jsx
import React, { useState, useEffect } from "react";

function Notification({ message }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return visible ? <div className="notification">{message}</div> : null;
}

export default Notification;
```

### 43. **Write a component that filters a list of items based on user input.**

**Answer:**

```jsx
import React, { useState } from "react";

function FilterableList({ items }) {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterableList;
```

### 44. **Create a component that uses `useContext` to manage global state.**

**Answer:**

```jsx
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
```

### 45. **Write a component that uses `useRef` to focus an input element when a button is clicked.**

**Answer:**

```jsx
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```

### 46. **Create a component that uses `useLayoutEffect` to measure an element's size and update the state.**

**Answer:**

```jsx
import React, { useState, useLayoutEffect, useRef } from "react";

function MeasureComponent() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      setSize({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightblue",
        }}
      >
        Measure Me
      </div>
      <p>
        Width: {size.width}px, Height: {size.height}px
      </p>
    </div>
  );
}

export default MeasureComponent;
```

### 47. **Write a component that fetches data from an API and displays a loading spinner while data is being fetched.**

**Answer:**

```jsx
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
```

### 48. **Create a React component that supports drag-and-drop functionality using HTML5 Drag and Drop API.**

**Answer:**

```jsx
import React, { useState } from "react";

function DragDrop() {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    console.log("Dropped item:", draggedItem);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, "Item 1")}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightcoral",
          marginBottom: "10px",
        }}
      >
        Drag me
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "lightgray",
        }}
      >
        Drop here
      </div>
    </div>
  );
}

export default DragDrop;
```

### 49. **Write a component that uses the `useCallback` hook to memoize a callback function that increments a counter.**

**Answer:**

```jsx
import React, { useState, useCallback } from "react";

function IncrementButton({ onClick }) {
  console.log("IncrementButton rendered");
  return <button onClick={onClick}>Increment</button>;
}

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <IncrementButton onClick={increment} />
    </div>
  );
}

export default Counter;
```

### 50. **Create a component that displays an error boundary for handling JavaScript errors in its child components.**

**Answer:**

```jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function BuggyComponent() {
  throw new Error("I crashed!");
  return <div>Buggy Component</div>;
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

export default App;
```

Whether you need more questions depends on your goals. If you're preparing for interviews, practicing with a variety of questions can help you cover different topics and scenarios. Here's a quick summary of areas you might want to explore further if needed:

1. **Performance Optimization:** Questions about optimizing React performance, memoization, and profiling.
2. **Advanced Hooks:** In-depth usage of custom hooks and complex scenarios.
3. **Context API:** Advanced use cases for the Context API.
4. **Testing:** Writing tests for components using libraries like Jest and React Testing Library.
5. **TypeScript Integration:** React with TypeScript for type safety and interfaces.
6. **State Management:** Using state management libraries like Redux or Zustand.
7. **Server-Side Rendering (SSR):** Concepts of SSR with Next.js or other frameworks.
8. **Routing:** Advanced React Router scenarios and setup.

If you want more questions in any of these areas or any specific topic, let me know!
Sure! Here’s a categorized list of React questions and answers based on different topics:

### **1. Basic React Concepts**

1. **Explain the concept of React components and how they differ from regular JavaScript functions.**
   **Answer:** React components are reusable UI elements that manage their own state and lifecycle. They differ from regular JavaScript functions in that they return React elements (JSX) and can be stateful or stateless. They can also use lifecycle methods and hooks.

2. **How does React’s virtual DOM work?**
   **Answer:** React's virtual DOM is an in-memory representation of the real DOM. When a component's state changes, React updates the virtual DOM first and then calculates the difference (diffing) between the virtual DOM and the real DOM. Only the changed parts are updated in the real DOM, improving performance.

3. **Describe the difference between state and props.**
   **Answer:** State is used for data that changes within a component, while props are used to pass data from a parent component to a child component. State is managed internally, while props are managed externally.

### **2. Component Lifecycle and Hooks**

4. **What are React lifecycle methods and when are they used?**
   **Answer:** Lifecycle methods are hooks that allow you to run code at specific points in a component’s lifecycle, such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. They are used to perform actions like fetching data, updating the DOM, or cleaning up resources.

5. **Explain the use of `useEffect` hook.**
   **Answer:** The `useEffect` hook is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after the component renders and can be configured to run on specific state or prop changes.

6. **What is the difference between `useEffect` and `useLayoutEffect`?**
   **Answer:** `useEffect` runs asynchronously after the DOM has been painted, while `useLayoutEffect` runs synchronously before the DOM is painted. Use `useLayoutEffect` for measurements and calculations that need to happen before the browser paints the screen.

### **3. State Management**

7. **How can you lift state up in React?**
   **Answer:** Lifting state up involves moving the state to the nearest common ancestor of components that need it. This allows multiple components to access and update the shared state through props.

8. **Explain how you would manage global state in a React application.**
   **Answer:** Global state can be managed using React's Context API, Redux, or other state management libraries. Context API is used for passing state through the component tree without props drilling, while Redux offers a more robust solution with actions and reducers.

### **4. Performance Optimization**

9. **How can you optimize the performance of a React application?**
   **Answer:** Performance can be optimized using techniques such as memoization (`React.memo`, `useMemo`, `useCallback`), lazy loading components, code splitting, and avoiding unnecessary re-renders. Profiling tools like React DevTools can also help identify performance bottlenecks.

10. **What is memoization and how is it used in React?**
    **Answer:** Memoization is an optimization technique to cache the results of expensive function calls. In React, `React.memo` and `useMemo` are used to prevent unnecessary re-renders by memoizing component outputs or values.

### **5. Handling User Input**

11. **How do you handle form submissions in React?**
    **Answer:** Form submissions are handled by attaching an `onSubmit` event handler to the form element. The handler can prevent the default behavior with `event.preventDefault()`, then process the form data as needed.

12. **Explain controlled vs uncontrolled components.**
    **Answer:** Controlled components use React state to manage form inputs, where the value is set by the state and updated via `onChange` events. Uncontrolled components rely on the DOM to handle form inputs, using refs to access the input values.

### **6. Conditional Rendering**

13. **How can you conditionally render components in React?**
    **Answer:** Conditional rendering can be done using JavaScript conditional statements like `if`, `ternary operators`, or `logical &&` within JSX to decide which components or elements to display.

14. **What is the purpose of `React.Fragment` and when would you use it?**
    **Answer:** `React.Fragment` is used to group multiple elements without adding extra nodes to the DOM. It’s useful when you need to return multiple elements from a component but don’t want to wrap them in an extra div.

### **7. Advanced Hooks**

15. **What are custom hooks and how do you create one?**
    **Answer:** Custom hooks are JavaScript functions that use React hooks internally and can be shared across components. They are created by defining a function that uses built-in hooks and then can be used in functional components to encapsulate and reuse logic.

16. **Explain the `useReducer` hook and how it differs from `useState`.**
    **Answer:** `useReducer` is used for managing more complex state logic by dispatching actions to a reducer function, which updates the state based on the action type. It is often used when state transitions are complex and `useState` would be less practical.

### **8. Context API**

17. **How do you create and use a Context in React?**
    **Answer:** To create a Context, use `React.createContext()` to create a Context object with a default value. Use `Context.Provider` to wrap components and pass down the value. Use `Context.Consumer` or `useContext` hook to access the context value in child components.

18. **What are some common use cases for the Context API?**
    **Answer:** Common use cases include theming, user authentication, and managing application-wide state, such as user preferences or locale settings.

### **9. Testing**

19. **How do you test a React component using Jest and React Testing Library?**
    **Answer:** Testing involves rendering the component with `render` from React Testing Library, querying the DOM with queries like `getByText` or `querySelector`, and asserting behaviors with `expect`. Jest is used for writing and running the tests.

20. **What is the purpose of snapshot testing and how is it done in Jest?**
    **Answer:** Snapshot testing is used to ensure that the rendered output of a component remains consistent over time. It is done by creating a snapshot file with Jest that records the component’s output, and future tests compare against this snapshot to detect changes.

### **10. Routing**

21. **How do you implement routing in a React application?**
    **Answer:** Routing is implemented using React Router. You define routes with `<Route>` components and use `<BrowserRouter>` or `<HashRouter>` to manage the routing context. The `useNavigate` hook or `<Link>` component is used for navigation.

22. **Explain dynamic routing and how it can be achieved with React Router.**
    **Answer:** Dynamic routing involves rendering components based on dynamic parameters in the URL. It’s achieved by defining routes with URL parameters (e.g., `/user/:id`) and accessing these parameters using the `useParams` hook or `match` object.

### **11. Error Handling**

23. **How do you implement error boundaries in React?**
    **Answer:** Error boundaries are implemented by creating a class component that implements `componentDidCatch` and `getDerivedStateFromError` methods. They catch JavaScript errors anywhere in their child component tree and display a fallback UI.

24. **What strategies can you use to handle API errors in a React component?**
    **Answer:** Strategies include using `try/catch` blocks for async functions, checking response statuses, and displaying error messages or fallback UI based on the error state.

### **12. Performance and Optimization**

25. **How can you use code splitting in a React application?**
    **Answer:** Code splitting is implemented using `React.lazy` and `Suspense`. Components are loaded asynchronously, reducing the initial bundle size. You wrap the lazy-loaded component in a `Suspense` component to provide a fallback while loading.

26. **What are some common performance pitfalls in React applications and how to avoid them?**
    **Answer:** Common pitfalls include unnecessary re-renders, large component trees, and frequent state updates. Avoid them by using memoization, optimizing component structures, and batching state updates.

### **13. Server-Side Rendering (SSR)**

27. **What is server-side rendering and why is it used in React?**
    **Answer:** Server-side rendering (SSR) generates HTML on the server and sends it to the client, improving initial load time and SEO. It is used to render components to HTML on the server before sending them to the client.

28. **How can you implement SSR in a React application using Next.js?**
    **Answer:** In Next.js, SSR is implemented automatically for pages by default. You can also use `getServerSideProps` to fetch data on the server before rendering the page, ensuring that data is available when the page is delivered to the client.

### **14. Integration with TypeScript**

29. **How do you add TypeScript to a React project?**
    **Answer:** TypeScript is added by installing the `typescript` package along with `@types/react` and `@types/react-dom`. You then rename your files to `.ts` or `.tsx` and add a `tsconfig.json` file to configure TypeScript.

30. **Explain how you would type props and state in a React component using TypeScript.**
    **Answer:** Props and state are typed using TypeScript interfaces or types. For props, define an interface and use it with the component. For state, define
