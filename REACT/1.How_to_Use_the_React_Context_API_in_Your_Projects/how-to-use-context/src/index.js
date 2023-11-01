import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import StateObj from "./StateObj";
import SetStateComp from "./SetStateComp";
import RefComp from "./RefComp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StateObj />
    <SetStateComp />
    <RefComp />
  </React.StrictMode>
);
