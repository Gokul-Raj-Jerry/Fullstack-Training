// import { useState } from "react";
import { createStor } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
  if (action.type === "inc") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === "dcr") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'incby5') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'toogle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state
};

const store = createStore(
  counterReducer
);

export default store

