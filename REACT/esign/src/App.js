import { useState } from "react";
import "./App.css";
import Title from "./components/Title";

function App() {
  const [name, setName] = useState("Test Data");
  const [date, setDate] = useState("DOB");

  return (
    <>
      <h1>React App</h1>
      <Title text={name} />
      <Title text={date} />

      <p>
        JSX(JavaScript Extension) : React extension which allows writing
        JavaScript code that looks like HTML. In other words, JSX is an
        HTML-like syntax used by React that extends ECMAScript so that HTML-like
        syntax can co-exist with JavaScript/React code. The syntax is used by
        preprocessors (i.e., transpilers like babel) to transform HTML-like
        syntax into standard JavaScript objects that a JavaScript engine will
        parse. JSX provides you to write HTML/XML-like structures (e.g.,
        DOM-like tree structures) in the same file where you write JavaScript
        code, then preprocessor will transform these expressions into actual
        JavaScript code. Just like XML/HTML, JSX tags have a tag name,
        attributes, and children. JSX FILE :<div> Hello World </div>
        Corresponding Output : React.createElement("div",null,"Hello World")
      </p>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default App;
