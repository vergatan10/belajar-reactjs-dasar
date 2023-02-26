import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./reatjsdasar/App";
// import Variable from "./reatjsdasar/Variable";
// import StateProps from "./reatjsdasar/StateProps";
// import Map from "./reatjsdasar/Map";
// import Lifecycle from "./reatjsdasar/Lifecycle";
import "bootstrap/dist/css/bootstrap.min.css";
import Crud from "./crud/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
