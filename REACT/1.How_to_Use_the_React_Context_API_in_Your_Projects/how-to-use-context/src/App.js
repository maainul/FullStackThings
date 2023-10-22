import { useState } from "react";
import "./App.css";
import { ThemeContext, themes } from "./context/ThemeContext";
import Post from "./Post";

function App() {
  const [theme, setTheme] = useState(themes.light);

  function handleOnClick() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleOnClick }}>
        <h1>light and Dark theme app</h1>
        <Post theme={theme} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;

//https://www.youtube.com/watch?v=gxoN6jWC5bU
