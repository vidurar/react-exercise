import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import LessonsList from "./components/lessons-list";
import reducer from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <LessonsList />
  </Provider>,
  document.getElementById("root")
);
