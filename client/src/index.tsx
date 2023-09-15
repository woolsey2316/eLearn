import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import { Provider } from "react-redux";
import AuthProvider from "./provider/authProvider";
import "moment/locale/zh-cn";
import store from "./store";

import "@reach/tooltip/styles.css";
import { MovieContextProvider } from "./context/ModalContext";

const root = createRoot(document.getElementById("root")!);

// render app to root
root.render(<Provider store={store}>
  <AuthProvider
    tokenEndpoint={"http://localhost:5000/api/auth/token"}
    refreshEndpoint={"http://localhost:5000/api/auth/refresh"}
    refreshLeeway={60}
  >
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </AuthProvider>
</Provider>);
