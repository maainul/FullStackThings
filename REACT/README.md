# Important Commands

    npm install -g yarn
    npm install -g create-react-app
    create-react-app -version

# REACT BASIC TO ADVANCE

## Topics :

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
