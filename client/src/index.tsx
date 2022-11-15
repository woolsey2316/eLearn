import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import "moment/locale/zh-cn";
import store from "./store";

import "@reach/tooltip/styles.css";

ReactDOM.render(
  // @ts-ignore
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
