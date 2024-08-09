1. JSX Introduction
2. React Props
3. Conditional Rendering
4. React Context
5. React State
6. React Component Life-Cycle
7. React Router
8. ReactJS advantages
9. ReactJS Component
10. React Events
11. React Fragments
12. React Lists


# Important Commands

    npm install -g yarn
    npm install -g create-react-app
    create-react-app -version

# REACT BASIC TO ADVANCE

## Table Of Content

1. React JSX
2. React Components

## 1. REACT JSX : Combine JavaScript and HTML Together

### Key Points :

    1. React components have a <b>render</b> function.
    2. The render function specifies the HTML output of a React component.

<b>JSX(JavaScript Extension)</b> : React extension which allows writing JavaScript code that looks like HTML. In other words, JSX is an HTML-like syntax used by React that extends ECMAScript so that HTML-like syntax can co-exist with JavaScript/React code. The syntax is used by preprocessors (i.e., transpilers like babel) to transform HTML-like syntax into standard JavaScript objects that a JavaScript engine will parse.

JSX provides you to write HTML/XML-like structures (e.g., DOM-like tree structures) in the same file where you write JavaScript code, then preprocessor will transform these expressions into actual JavaScript code. Just like XML/HTML, JSX tags have a tag name, attributes, and children.

### JSX FILE :

    <div> Hello World </div>

### Corresponding Output :

    React.createElement("div",null,"Hello World")

### The above line creates a react element and passing three arguments inside where

    1. First : The name of the element which is div
    2. Second: The attributes passed in the div Tag
    3. Third : The content you pass which is the "Hello World."

### Why use JSX?

1. It is faster than regular JavaScript because it performs optimization while translating the code to JavaScript.
2. It is type-safe, and most of the errors can be found at compilation time.
3. It makes easier to create templates.

### Nested Elements in JSX

```jsx
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Mainul Hasan </h1>
        <h2>Training Instutes </h2>
        <p>The Website Contains the best CS Tutorial</p>
      </div>
    );
  }
}
```

### JSX Attributes

KeyWords :

        1. JSX use attributes with the HTML elements same as regular HTML.
        2. JSX uses camelcase naming convention
        3. class in HTML &  className in JSX (because the class is the reserved keyword in JavaScript).
        4. For custom attributes, we need to use data- prefix.

```jsx
import React, { Component } from "react";

export default class App extends Components {
  render() {
    <div>
      <h1> Hello World </h1>
      <h2> Training Institues </h2>
      <p data-demoAttribute="demo">
        This Website contains the best CS tutorials
      </p>
    </div>;
  }
}
```

### In JSX, we can specify attribute values in two ways:

1.  As String Literals:

        var element = <h2 className = "firstAttribute">Hello JavaTpoint</h2>;

2.  As Expressions:

    var element = <h2 className = {varName}>Hello JavaTpoint</h2>;

```jsx
import React, { Component } from "react";

export default class App extends Components {
  render() {
    return (
      <div>
        <h1>JavaTPoint</h1>
        <p data-demoAttribute="demo">
          This Website Contains the best CS Tutorial
        </p>
        <h1 className="hello">{25 + 20}</h1>
      </div>
    );
  }
}
```

### JSX Styling :

Keyword :

    1. React always recommends to use inline styles.
    2. Need to use camelCase syntax
    3. React automatically allows appending px after the number value
    4. JSX cannot allow to use if-else statements. Instead of it, you can use  conditional (ternary) expressions. It can be seen in the following example.

```jsx
import React,{Component} from 'react';
class App extends Component{
    render(){
        let myStyle = {
            fontSize:80,
            fontFamily:'Courier',
            color:'#003300'
        }
    }
    return(
        <div>
            <h1 style={myStyle}> WWW.Mainul.com </h1>
            <h1>{i == ? 'True!':'False'}</h1>
        </div>
    );
}
```

# 2. React Props

1. Props stand for "Properties."
2. They are read-only components.
3. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.
4. It gives a way to pass data from one component to other components. 
5. It is similar to function arguments.
6. Props are immutable so we cannot modify the props from inside the component. 
7. Inside the components, we can add attributes called props. 
8. These attributes are available in the component as this.props and can be used to render dynamic data in our render method.


Example :

```jsx

// Child Component
import React,{useState} from 'react'

const Department = ({name,location})=>{

  return (
    <div>
      <h2>Department : {name}</h2>
      <h2>Location : {location}</h2>
    </div>
  )
}

export default Department

// Parent Component managing State
import React, {useState} from 'react'
import Department from './Department'
const App = ()=>{
  const [department,setDepartment] = useState({name:'HR',location:'Dhaka'})

  return (
    <div>
        <Department name={department.name} location={department.location} />
    </div>
  )
}

export default App;

```

## 2.1. React Props Validation

In React, prop validation ensures that components receive props of the correct type. This helps catch bugs and makes your code more predictable and easier to debug. PropTypes, a library maintained by Facebook, is commonly used for this purpose.

install :

    npm install prop-types

```jsx
import PropTypes from 'prop-types'

function Component({name,age}) {
  return `In 5 Years ${name} will be ${age + 5}`
}

Component.propTypes = {
  name : PropTypes.string.isRequired,
  age : PropTypes.number.isRequired
}

export default Component
```

## Example real world:
```jsx
import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userId, name, email, department }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Department: {department}</p>
    </div>
  );
};

UserInfo.propTypes = {
  userId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
};

export default UserInfo;
```


# 3. React Conditional Rendering
1. We can render them depending on some conditions or the state of our application. In other words, based on one or several conditions, a component decides which elements it will return.
2. In React, conditional rendering works the same way as the conditions work in JavaScript. 

1. Using if Statements
```jsx
function Greeting({isLoggedIn}){
  if(isLoggedIn){
    return <h1>Welcome Back</h1>
  }else{
    return <h1>Please Sign In </h1>
  }
}
```
2. Using Ternary Operator
```jsx
function Greeting({isLoading}){
  <div>
    {isLoading ? <h1>Welcome Back!</h1> : <h1>Please Sign In</h1>}
  </div>
}

```
3. Using Logical && Operator : You can use the logical && operator to render a component or content only if a condition is true:
```jsx
function MailBox ({unreadMessages}){
  return(
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h1>You have {unreadMessages.length} unread messages</h1>
      )}
    </div>
  )
}

```

4. Switch Case:
```jsx
function Greeting({userRole}){
  let greeting

  switch(userRole){
    case 'admin':
      greeting = <h1>Welcome, Admin</h1>
      break;

    case 'editor':
      greeting = <h1>Welcome, Editor</h1>
      break;

    case 'Viewer':
      greeting = <h1>Welcome, Viewer</h1>
      break;

    default:
      greeting = <h1>Welcome,Guest</h1>
  }
  return <div>{greeting}</div>
}
```

## ERP :
```jsx
function UserDashboard({ user }) {
  return (
    <div>
      {user.isLoggedIn ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          {user.role === 'admin' && <AdminPanel />}
          {user.role === 'manager' && <ManagerPanel />}
          {user.role === 'employee' && <EmployeePanel />}
        </div>
      ) : (
        <h1>Please sign in.</h1>
      )}
    </div>
  );
}

function AdminPanel() {
  return <div>Admin Panel Content</div>;
}

function ManagerPanel() {
  return <div>Manager Panel Content</div>;
}

function EmployeePanel() {
  return <div>Employee Panel Content</div>;
}

```

# 4. React Context

1. Context allows passing data through the component tree without passing props down manually at every level.
2. let's assume you want to manage user authentication state across different components.

```jsx
// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
```
```jsx
// UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    return <div>Please log in.</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={() => setUser(null)}>Log out</button>
    </div>
  );
};

export default UserProfile;
```
```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './UserContext';

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);
```
# 6.React State
1. State is a way to store and manage dynamic data within a component. 
2. State allows components to respond and re-render when the data changes.

```jsx
import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```
```jsx
import React, { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <p>{`First Name: ${firstName}, Last Name: ${lastName}`}</p>
    </div>
  );
};

export default Form;
```
# 6.React Component Life-Cycle
In ReactJS, every component creation process involves various lifecycle methods.
These lifecycle methods are not very complicated and called at various points during a component's life. The lifecycle of the component is divided into four phases. They are:

1. Initial Phase
2. Mounting Phase
3. Updating Phase
4. Unmounting Phase


#### 1. Initial Phase :
   1. In this phase, a component contains the default Props and initial State. 
   2. These default properties are done in the constructor of a component.
   3. The initial phase only occurs once and consists of the following methods.

getDefaultProps() : It is used to specify the default value of this.props. It is invoked before the creation of the component or any props from the parent is passed into it.
getInitialState() : It is used to specify the default value of this.state. It is invoked before the creation of the component.


#### 2. Mounting Phase : In this phase, the instance of a component is created and inserted into the DOM. It consists of the following methods.

componentWillMount() : This is invoked immediately before a component gets rendered into the DOM. In the case, when you call setState() inside this method, the component will not re-render.

componentDidMount() : This is invoked immediately after a component gets rendered and placed on the DOM. Now, you can do any DOM querying operations.

render() : This method is defined in each and every component. It is responsible for returning a single root HTML node element. If you don't want to render anything, you can return a null or false value.

#### 3. Updating Phase : 
It is the next phase of the lifecycle of a react component. Here, we get new Props and change State. This phase also allows to handle user interaction and provide communication with the components hierarchy. The main aim of this phase is to ensure that the component is displaying the latest version of itself. Unlike the Birth or Death phase, this phase repeats again and again. This phase consists of the following methods.

componentWillRecieveProps() : It is invoked when a component receives new props. If you want to update the state in response to prop changes, you should compare this.props and nextProps to perform state transition by using this.setState() method.

shouldComponentUpdate() : It is invoked when a component decides any changes/updation to the DOM. It allows you to control the component's behavior of updating itself. If this method returns true, the component will update. Otherwise, the component will skip the updating.

componentWillUpdate() : It is invoked just before the component updating occurs. Here, you can't change the component state by invoking this.setState() method. It will not be called, if shouldComponentUpdate() returns false.

render() : It is invoked to examine this.props and this.state and return one of the following types: React elements, Arrays and fragments, Booleans or null, String and Number. If shouldComponentUpdate() returns false, the code inside render() will be invoked again to ensure that the component displays itself properly.

componentDidUpdate() : It is invoked immediately after the component updating occurs. In this method, you can put any code inside this which you want to execute once the updating occurs. This method is not invoked for the initial render.

#### 4. Unmounting Phase
It is the final phase of the react component lifecycle. It is called when a component instance is destroyed and unmounted from the DOM. This phase contains only one method and is given below.

componentWillUnmount() : This method is invoked immediately before a component is destroyed and unmounted permanently. It performs any necessary cleanup related task such as invalidating timers, event listener, canceling network requests, or cleaning up DOM elements. If a component instance is unmounted, you cannot mount it again.

```jsx
import React, {Component} from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {hello:"Mainul Hasan"}
    this.changeState = this.changeState.bind(this)
  }
  render(){
    return (
      <div>
          <h1>ReactJS component Lifecycle</h1>
          <h3>Hello, {this.state.hello}</h3>

          <button onClick={this.changState}>Click Here!</button>
      </div>
    )
  }
  componentWillMount(){
     console.log('Component Will MOUNT!')  
  }
  componentDidMount(){
     console.log('Component Did MOUNT!')  
  }
  changeState(){  
      this.setState({hello:"All!!- Its a great reactjs tutorial."});  
  }  
  componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
  shouldComponentUpdate(newProps, newState) {  
      return true;  
   }
  componentWillUpdate(nextProps, nextState) {  
        console.log('Component Will UPDATE!');  
  }
  componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }          
}


```

### First Render :

componentWillMount(): Component Will MOUNT!

componentDidMount() : Component Did Mount

### After Click Button this :

componentWillUpdate(): Component Will UPDATE!

componentDidUpdate(): Component Did UPDATE!


# 7. React Router
1. ReactJS Router is mainly used for developing Single Page Web Applications. 
2. React Router is used to define multiple routes in the application
3. React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package.   

        npm install react-router-dom --save  


### What is Route?
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import About from './about'
import Contact from './contact'

const routing = (
  <Router>
    <div>
      <Route path="/" component={App}>
      <Route path="/about" component={About}>
      <Route path="/contact" component={Contact}>
    </div>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'))
```
# 8.ReactJS advantages

1. Component-Based Architecture
2. Virtual DOM for Performance Optimization
   
  Efficient Updates: React uses a virtual DOM to efficiently update only the parts of the actual DOM that have changed, minimizing the number of costly DOM manipulations and improving performance.

  Smooth User Experience: This results in faster rendering and a smoother user experience, especially in dynamic applications with frequent updates.

1. Declarative UI
2. Unidirectional Data Flow
3. Rich Ecosystem and Community Support
4. Cross-Platform Development
5. Strong Support for JSX
6. Backed by Facebook
7.  SEO-Friendly
8.  Flexibility
9.  Continuous Development and Backward Compatibility

# 9. ReactJS Component

Earlier, the developers write more than thousands of lines of code for developing a single page application. These applications follow the traditional DOM structure, and making changes in them was a very challenging task. If any mistake found, it manually searches the entire application and update accordingly. The component-based approach was introduced to overcome an issue. In this approach, the entire application is divided into a small logical group of code, which is known as components.

A Component is considered as the core building blocks of a React application. It makes the task of building UIs much easier. Each component exists in the same space, but they work independently from one another and merge all in a parent component, which will be the final UI of your application.

Every React component have their own structure, methods as well as APIs. They can be reusable as per your need. For better understanding, consider the entire UI as a tree. Here, the root is the starting component, and each of the other pieces becomes branches, which are further divided into sub-branches.

![image](https://github.com/maainul/FullStackThings/assets/37740006/7e3c8042-b189-4db2-a4d9-26dadf731504)

In ReactJS, we have mainly two types of components. They are

1. Functional Components
2. Class Components

3. ReactJS Functional Components :

### Keywords :

    1. Simply JavaScript functions
    2. Functions may or may not receive data as parameters.
    3. The return value is the JSX code to render to the DOM tree.

### index.js

```jsx
//index.js File
import React from "react";
import ReactDOM from "react-dom";
import Demo from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
  document.getElementById("root")
);
```

### Demo.js

```jsx
//App.js File
import React from "react";
import ReactDOM from "react-dom";

const Demo = () => {
  return <h1>Welcome to GeeksforGeeks</h1>;
};
export default Demo;
```

### Problem with using functional components

1. Do not have access to dedicated state variables
2. The problem discussed above is solved with the help of a special ReactJS concept called “hooks”.
3. ReactJS has access to a special hook called useState().
4. The first value returned is the initial value of the state variable, while the second value returned is a reference to the function that updates it.

### index.js

```JSX
import React from 'react'
import ReactDOM from 'react-dom'
import Example from './App'

ReactDOM.render(
  <React.StrictMode>
    <Exaple />
  </React.StrictMode>
  document.getElementById('root')
)
```

### App.js

```js
//App.js File
import React, { useState } from "react";

const Example = () => {
  const [change, setChange] = useState(true);
  return (
    <div>
      <button onClick={() => setChange(!change)}>Click Here!</button>
      {change ? (
        <h1>Welcome to GeeksforGeeks</h1>
      ) : (
        <h1>A Computer Science Portal for Geeks</h1>
      )}
    </div>
  );
};
export default Example;
```
![image](https://github.com/maainul/FullStackThings/assets/37740006/11c4e8fd-e138-421d-b010-d336a3334247)

# 10. React Events

An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.

React has its own event handling system which is very similar to handling events on DOM elements. The react event handling system is known as Synthetic Events. The synthetic event is a cross-browser wrapper of the browser's native event.

![react-events](https://github.com/user-attachments/assets/d1f311c8-db3c-48fb-9a8a-b629c19b69e8)

Handling events with react have some syntactic differences from handling events on DOM. These are:

1. React events are named as **camelCase** instead of **lowercase**.
2. With JSX, a function is passed as the **event handler** instead of a string. For example:

**Event declaration in plain HTML:**
```jsx
<button onclick="showMessage()">  
       Hello JavaTpoint  
</button>  
```
**Event declaration in React:**
```jsx
<button onClick={showMessage}>  
      Hello JavaTpoint  
</button>  
```
3. In react, we cannot return false to prevent the default behavior. We must call preventDefault event explicitly to prevent the default behavior. For example:

In plain HTML, to prevent the default link behavior of opening a new page, we can write:
```jsx
<a href="#" onclick="console.log('You had clicked a Link.'); return false">  
    Click_Me  
</a>  
```
In React, we can write it as:
```jsx
function ActionLink() {  
    function handleClick(e) {  
        e.preventDefault();  
        console.log('You had clicked a Link.');  
    }  
    return (  
        <a href="#" onClick={handleClick}>  
              Click_Me  
        </a>  
    );  
}  

```

# 11. React Fragments
React Fragments are a useful feature that allows you to group a list of children elements without adding extra nodes to the DOM. This is particularly beneficial when you want to return multiple elements from a component without wrapping them in an additional container element, such as a div. By using fragments, you can keep your DOM clean and avoid unnecessary elements, which is especially helpful for layout styling and maintaining a lightweight DOM structure.

**1. Basic Usage of Fragments**
You can use React Fragments in two ways: with the <React.Fragment> tag or the shorthand syntax <>.
```jsx
const FragmentExample = () => {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>This is a description.</p>
    </React.Fragment>
  );
};
```
```jsx
const FragmentExample = () => {
  return (
    <>
      <h1>Title</h1>
      <p>This is a description.</p>
    </>
  );
};
```
```jsx
const NestedFragments = () => {
  return (
    <>
      <>
        <h1>Header</h1>
        <p>This is the header section.</p>
      </>
      <>
        <h2>Footer</h2>
        <p>This is the footer section.</p>
      </>
    </>
  );
};
```
React Fragments are a powerful tool for managing the structure of your React components. They allow you to return multiple elements from a component without adding extra DOM nodes, which helps in maintaining a clean and efficient DOM. By using fragments, you can create more flexible and maintainable layouts in your React applications.

# 12. React Lists

```jsx
var numbers = [1,2,3]
const multiplyNums = numbers.map((num)=>{
  return (num * 5)
})
console.log(multiplyNums)
```
      [5, 10, 15, 20, 25]


```jsx
import React from 'react';   
import ReactDOM from 'react-dom';   
  
const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];   
const listItems = myList.map((myList)=>{   
    return <li>{myList}</li>;   
});   
ReactDOM.render(   
    <ul> {listItems} </ul>,   
    document.getElementById('app')   
);   
export default App;  
```
```jsx
const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ];

  return <ItemList items={items} />;
};

```

