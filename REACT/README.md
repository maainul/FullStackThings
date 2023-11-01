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

### 2. React Components :

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

### USE STATE

useState is a React Hook :

    const[state, setState] = useState(initialState)

<b>useState(initialState) :</b>

```js
import { useState } from "react";

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState("Taylor");
  const [todos, setTodos] = useState(() => createTodos());
}
```

![image](https://github.com/maainul/FullStackThings/assets/37740006/4bd4aae5-7830-4de1-926e-19babb837f49)

## Projects :

![image](https://github.com/maainul/FullStackThings/assets/37740006/f33ac28f-d57d-4d63-8cd6-10cfa4d733d4)

## Introduction Of REACT

### Important Questions for Interview

![image](https://github.com/maainul/FullStackThings/assets/37740006/09afd232-1d9f-4f18-abe9-f82a5caad760)

## REACT Types :

![image](https://github.com/maainul/FullStackThings/assets/37740006/0d07c038-3c75-457f-a912-b3b9ed5991f3)

![image](https://github.com/maainul/FullStackThings/assets/37740006/496329cc-c926-45dd-abed-b44299ca5b86)

![image](https://github.com/maainul/FullStackThings/assets/37740006/427dbdc5-0c33-493f-af24-3e84de3f3916)

![image](https://github.com/maainul/FullStackThings/assets/37740006/b77a3be3-e425-43ef-8407-fbffb6b558bc)

![image](https://github.com/maainul/FullStackThings/assets/37740006/58ddacc7-25b2-436e-b218-ca64b8e9fe27)

![image](https://github.com/maainul/FullStackThings/assets/37740006/02aa1ca5-5ac7-4556-afcc-7adc49853c0d)

![image](https://github.com/maainul/FullStackThings/assets/37740006/89958497-6954-4188-bd35-cd4a0573f62b)

![image](https://github.com/maainul/FullStackThings/assets/37740006/4800a17f-f877-4af1-9694-524e2fdfecb8)

![image](https://github.com/maainul/FullStackThings/assets/37740006/f3e9d86a-79c1-47b2-8af0-5f1af16f363f)

![image](https://github.com/maainul/FullStackThings/assets/37740006/30a9f7a6-2ea5-4378-9bd2-edf0c8228fb7)

![image](https://github.com/maainul/FullStackThings/assets/37740006/a2c083d5-0075-4206-88ba-79687c836cf1)

![image](https://github.com/maainul/FullStackThings/assets/37740006/8a805ef4-340d-4dce-9d51-25f055f69cf0)

![image](https://github.com/maainul/FullStackThings/assets/37740006/39333907-85c4-4f19-acf1-68414563d316)

![image](https://github.com/maainul/FullStackThings/assets/37740006/0f19fd7d-a982-4cad-b1c9-b1a22ba888e9)

![image](https://github.com/maainul/FullStackThings/assets/37740006/f3019162-d0f3-4a56-9c44-7419e87352da)

![image](https://github.com/maainul/FullStackThings/assets/37740006/f3012b47-2394-4a83-94d4-e6e40d76beee)

![image](https://github.com/maainul/FullStackThings/assets/37740006/92bd44b7-ec13-4498-9fce-27ea4b0319e3)

![image](https://github.com/maainul/FullStackThings/assets/37740006/57b675ef-5711-408f-98b4-f11b402b5606)

![image](https://github.com/maainul/FullStackThings/assets/37740006/e90b1735-71e2-4053-bbc0-66da5d723437)

![image](https://github.com/maainul/FullStackThings/assets/37740006/b0f6fd03-f4e2-4224-8b5c-8434fd7e8541)

![image](https://github.com/maainul/FullStackThings/assets/37740006/34c0eed0-a83e-4873-8c21-1572bc1851e4)

![image](https://github.com/maainul/FullStackThings/assets/37740006/d149fe1b-4d80-44bb-be4d-771795b085df)

![image](https://github.com/maainul/FullStackThings/assets/37740006/42e5e56d-9605-476d-b5c8-da297aca0ce9)

![image](https://github.com/maainul/FullStackThings/assets/37740006/d27ecdff-3838-4a8a-89b5-442babbfdc0f)

![image](https://github.com/maainul/FullStackThings/assets/37740006/e5753ea1-2169-475f-901e-4294b035b8ef)

![image](https://github.com/maainul/FullStackThings/assets/37740006/193d981f-a732-4272-9416-0edf3b3b128f)

![image](https://github.com/maainul/FullStackThings/assets/37740006/d659c3ef-d6f7-475a-a870-0db4b6c28da8)

![image](https://github.com/maainul/FullStackThings/assets/37740006/23c80963-6e18-463b-ab7a-c36176b91161)

![image](https://github.com/maainul/FullStackThings/assets/37740006/6a2bca83-9841-4ae1-8990-ba84af13eac2)

```jsx
import React from "react";
import PropComp from "./PropComp";
import EventWithTwoParam from "./EventWithTwoParam";

export default class StateObj extends React.Component {
  fun_one() {
    console.log("Event without parameter");
  }
  constructor() {
    super();
    this.state = {
      data: "Any Types of Data",
      num: 2,
      boolean: true,
      // object
      obj: {
        title: "Hi there",
        name: "Mainul Hasan",
      },
      // list of array
      stack: ["Mongodb", "Express", "React", "Nodejs"],
      key1: "Data Comming from StateComponent 1",
      key2: "Data Comming from StateComponent 2",
    };
  }

  render() {
    return (
      <div>
        <h1>This is State Component Example</h1>
        {/* How to Return State Data */}
        <h2>{this.state.data}</h2>
        <h3>{this.state.num}</h3>
        <h4>{this.state.boolean}</h4>
        {/* How to Print Object */}
        <p>{JSON.stringify(this.state.obj.name)}</p>
        <p>{JSON.stringify(this.state.obj.title)}</p>
        {/* How to Use Map */}
        <p>{this.state.stack}</p>
        <p>
          {this.state.stack.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </p>
        {/* Props Sending */}
        <PropComp data1={this.state.key1} data2={this.state.key2} />

        <button onClick={this.fun_one}>Click Me</button>
        <hr />
        <br />
        <EventWithTwoParam />
      </div>
    );
  }
}
```

![image](https://github.com/maainul/FullStackThings/assets/37740006/53590778-53f0-4c74-aefa-49e9babb605b)

```jsx
import React from "react";

export default class SetStateComp extends React.Component {
  constructor() {
    super();
    this.state = {
      subject: "FrontEnd Developer",
    };
  }

  changeSub = () => {
    this.setState({
      subject: "Mern Stack Developer",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.subject}</h1>
        <button onClick={this.changeSub}>Change State</button>
      </div>
    );
  }
}
```

![image](https://github.com/maainul/FullStackThings/assets/37740006/007c454d-4237-475c-8f5e-e4189b795007)

```jsx
import React from "react";

export default class RefComp extends React.Component {
  constructor() {
    super();
    this.state = {
      login: "",
    };
  }
  login = () => {
    if (this.refs.uname.value === "admin" && this.refs.upwd.value === "admin") {
      this.setState({
        login: "Success",
      });
    } else
      this.setState({
        login: "Failed",
      });
  };
  render() {
    return (
      <div>
        <fieldset>
          <legend>Login Form</legend>
          <br />
          <br />
          <input type="text" ref="uname" placeholder="Enter User Name" />
          <br />
          <br />
          <br />
          <input type="password" ref="upwd" placeholder="Enter Password" />
          <br /> <br />
          <button onClick={this.login}>Login </button>
          <br />
          <br />
          <br />
          <br />
          <h1>Login Status : ={this.state.login}</h1>
        </fieldset>
      </div>
    );
  }
}
```

![image](https://github.com/maainul/FullStackThings/assets/37740006/2ceb4953-b017-49d3-87a4-7b5c4d79fbb0)

![image](https://github.com/maainul/FullStackThings/assets/37740006/499a77af-3797-470c-8386-cc61eef1371b)


# Problems :

## 1.

![image](https://github.com/maainul/FullStackThings/assets/37740006/83ab7c2e-ccd8-47a3-91a4-bfd40a80bdbe)

## Solution :

![image](https://github.com/maainul/FullStackThings/assets/37740006/cbd11668-b851-42d0-adb3-f3721c836233)

# https://www.frontendmag.com/tips/how-to-master-react-js-ultimate-guide/#1_Have_a_good_grasp_of_core_React_features

10 Basic Concepts About React You Should Learn

1. The Component Lifecycle
2. JSX expressions
3. React Virtual DOM
   Why is Virtual DOM faster?
4. Using Virtual DOM in React
5. Props in JSX
6. The components of ReactJS
   a) Functional Components
   b) Class Components:
7. React Props And PropTypes
8. Performance Optimization for React Apps
9. State in React
10. Hooks of React
11. React Context

Table of Contents

1. Have a good grasp of core React features
   JSX syntax
   Components and Props
   State and Lifecycle
   Event handling
   Lists and Keys
   Fragments
2. Learn advanced React concepts
   Code-Splitting
   Context
   Refs
   Error Boundaries
   Portals
   Profiler
   Higher-Order Components
   Render Props
   Accessibility
   Strict Mode
3. Understand React hooks
4. Learn state management in React
5. Proficient in using a UI library
6. Learn popular third-party libraries in React ecosystem
7. Consider using TypeScript
8. Consider learning Next JS
9. Understand best practices in React
10. Create your own React libraries or Contribute to open-source projects
11. Deep dive into how React works internally
    How To Master React JS: Conclusion

## https://www.javatpoint.com/reactjs-tutorial

ReactJS Tutorial
ReactJS Tutorial open linkReact IntroductionReact VersionReact Installationcreate-react-appReact FeaturesPros & ConsReactJS vs AngularJSReactJS vs ReactNativeReact vs VueReact JSXReact ComponentsReact StateReact PropsReact Props ValidationReact State vs PropsReact ConstructorReact Component APIComponent Life CycleReact FormsControlled vs UncontrolledReact EventsConditional RenderingReact ListsReact KeysReact RefsReact FragmentsReact RouterReact CSSReact AnimationReact BootstrapReact MapReact TableHigher-Order ComponentsReact Code SplittingReact ContextReact HooksReact Flux ConceptReact Flux Vs MVCReact ReduxReact Redux ExampleReact PortalsReact Error Boundaries
Misc.
Loop Array in React JSReact Axios Delete Request ExampleReact Multiple CheckboxReact-iconsReact Date PickerReact HelmetInline Style in ReactjQuery vs. ReactReactJS ArchitectureReactJS PropTypesBrowserRouter in ReactReact vs. SvelteButton in ReactWhat is Dom in ReactUnit Testing in ReactCarousel in ReactReact-PaginateWhat is the useState in ReactReact Time-PickerReact.js vs Node.js
MCQ
React.js MCQ
Interview Questions
ReactJS Interview