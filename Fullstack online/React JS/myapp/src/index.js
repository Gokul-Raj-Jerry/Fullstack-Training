// root file
import ReactDOM from "react-dom/client"; // Virtual DOM
import React from 'react';
import App from './App'

// New method to Root DOM - 1 
/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
 */

// New method of DOM into Root - 2
/* const root = ReactDOM.createRoot(
    document.getElementById('root')
);
const element = <App />;
root.render(element);
 */


// Alternative method - 3
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

function tick() {
    const element = (<App />);
    root.render(element);
}

setInterval(tick, 1);