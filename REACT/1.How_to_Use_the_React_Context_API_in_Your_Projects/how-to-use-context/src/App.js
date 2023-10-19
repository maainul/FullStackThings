import { useState } from "react";
import "./App.css";
import {ThemeContext,themes} from './context/ThemeContext'
import Post from "./Post";

function App() {
  const [theme,setTheme] = useState(themes.light)


  return (
    <>
    <ThemeContext.Provider value={"mainul"}>
      <h1>light and Dark theme app</h1>
      <Post theme={theme}/>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
