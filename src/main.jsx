import "./index.css";
import React from "react";
import ReactDom from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App";

const el = document.getElementById("root");

const root = ReactDom.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
