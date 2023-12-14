import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import App from "./App";

import rootReducer from "./modules";

const root = ReactDOM.createRoot(document.getElementById("root"));
const modules = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <Provider store={modules}>
    <App />
  </Provider>
);
