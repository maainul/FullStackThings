import { useState } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import MyComponent from "./MyComponent";

function App() {
  const [text, setText] = useState("");


  return (
    <div>

          <MyContext.Provider value={{ text, setText }}>
            <MyComponent />
          </MyContext.Provider>
    </div>
  );
}

export default App;
