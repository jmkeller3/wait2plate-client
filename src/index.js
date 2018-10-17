import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./reset.css";
import "./index.css";
import App from "./components/App";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
