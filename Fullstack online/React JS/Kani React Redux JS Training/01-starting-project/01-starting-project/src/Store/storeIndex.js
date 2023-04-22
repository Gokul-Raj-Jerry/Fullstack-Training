// import { useState } from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true }

/* const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    inc(state) {
      state.counter++;
    },
    dcr(state) {
      state.counter--;
    },
    incby5(state, action) {
      state.counter + action.amount;
    },
    toogle(state) {
      state.showCounter = !state.showCounter;
    }
  }
}); */

counterSlice.actions.toogle

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

const store = configureStore({
  counter: counterSlice.reducer
});

export default store

