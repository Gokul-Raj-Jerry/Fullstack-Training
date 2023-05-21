import { createSlice } from "@reduxjs/toolkit";

// initial State for counter
const initialCounterState = { counter: 0, showCounter: true };

// createSlice for Counter
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        inc(state) {
            state.counter++;
        },

        dcr(state) {
            state.counter--;
        },

        inc5(state, action) {
            state.counter = state.counter + action.payload;
        },

        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;