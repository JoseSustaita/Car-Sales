import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

function reducer() {
  return {
    title: "Hello world! I'm in the Redux store!",
  };
}
const store = createStore(reducer);
