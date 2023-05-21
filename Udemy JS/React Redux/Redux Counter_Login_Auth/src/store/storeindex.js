import { configureStore } from '@reduxjs/toolkit'; // step-1 i import createStore from redux

import counterReducer from './counter';
import authReducer from './auth';

// import counterSlice from './counter';
// import authSlice from './auth';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
}); // step -2 assin createStore to identify store, //  step-4 keep reducer into store


export default store; // step-5 export 1 store  // nxt to index.js to provide data from store
















/* const counterReducer = (state = initialState, action) => { // step-3 Create Reducer
    if (action.type === 'inc') {
        return {
            counter: state.counter + 1,  // create a new object in Reducer
            showCounter: state.showCounter
        }
    }

    if (action.type === 'icr5') {
        return {
            counter: state.counter + action.high,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'dcr') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state
}; */