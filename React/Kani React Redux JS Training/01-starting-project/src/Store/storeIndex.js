import { createStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {  // Create a Reducer
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

const store = createStore( // Step-1  Create a Store 
  counterReducer // Step-3  point the reducer in Store
);

export default store

