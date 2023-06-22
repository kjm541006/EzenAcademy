import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

// 1. redux에서 사용할 store;
// const store = createStore(rootReducer);

// 2. Redux DevTools를 사용할 경우
const store = createStore(rootReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
