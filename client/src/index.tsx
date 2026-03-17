import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import "moment/locale/zh-cn";
import store from "./store";

import "@reach/tooltip/styles.css";
import { ModalContextProvider } from "./context/ModalContext";

const root = createRoot(document.getElementById("root")!);

// render app to root
root.render(
  <Provider store={store}>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </Provider>);
