import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalState from "./store/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>,
  document.getElementById("root")
);
