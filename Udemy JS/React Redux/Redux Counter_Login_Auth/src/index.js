import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // step-6 import provider from react-redux

import './index.css';
import App from './App';
import store from './store/storeindex'; // step-8  import store path

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store} ><App /></Provider>);  // step-7 keep APP inside Provider to access data to all components
// step-9 pass store as value to access

// go to Component counter to use data