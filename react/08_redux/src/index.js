// ver 1. props drilling Example
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>
// );

// ver 2. redux적용
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRedux1 from './AppRedux1';

// import { Provider } from 'react-redux';
// import {configureStore} from "@reduxjs/toolkit"
// import { composeWithDevTools } from "redux-devtools-extension";

// // state : {number : 100}
// // const initialValue ={} : 초기값

// const initialValue ={ number : 100}
// const reducer = (state = initialValue, action)=>{
//   switch(action.type) {
//     case "INCREMENT" :
//       return {number : state.number +1};
//     case "DECREMENT" :
//       return {number : state.number -1};
//     default :
//       return state;
//   }
// }

// const modules = configureStore({reducer: reducer}, composeWithDevTools())

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider modules={modules}>
//     <AppRedux1 />
//   </Provider>
// );

// 3. redux 구조화
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppRedux2 from "./AppRedux2";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./modules";

// const modules = configureStore({ reducer: rootReducer }, composeWithDevTools());
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Provider modules={modules}>
//     <AppRedux2 />
//   </Provider>
// );

// ver 4. redux 구조화 + Seperate the container component folder & presentational component folder
import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import AppRedux3 from "./AppRedux3";

import rootReducer from "./modules";

const modules = configureStore({ reducer: rootReducer }, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // store라는 props를 사용하는것.. module 아니ㅑㅇ
  <Provider store={modules}>
    <AppRedux3 />
  </Provider>
);
