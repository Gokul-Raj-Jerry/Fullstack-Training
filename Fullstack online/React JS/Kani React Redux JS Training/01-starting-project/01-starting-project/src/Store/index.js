import { createStoreHook } from "react-redux";
import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "inc") {

  }
};

const store = createStore();
