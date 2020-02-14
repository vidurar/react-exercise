import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import SelectedLessons from "./SelectedLessons";
import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <SelectedLessons />
  </Provider>,
  document.getElementById("root")
);
