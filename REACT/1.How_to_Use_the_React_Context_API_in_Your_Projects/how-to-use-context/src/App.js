import { useState } from "react";
import "./App.css";
import { AuthContext, MyContext, ThemeContext } from "./MyContext";
import MyComponent from "./MyComponent";

function App() {
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("dark");
  const [currentUser, setCurrentUser] = useState({ name: "Mainul" });

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <AuthContext.Provider value={currentUser}>
          <MyContext.Provider value={{ text, setText }}>
            <MyComponent />
          </MyContext.Provider>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
