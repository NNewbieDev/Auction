import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/global.scss";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextProvider>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </ContextProvider>
  </BrowserRouter>
);
