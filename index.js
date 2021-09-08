import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalContext } from "./GlobalContext";

ReactDOM.render(
  <GlobalContext>
    <App />
  </GlobalContext>,
  document.getElementById("root")
);