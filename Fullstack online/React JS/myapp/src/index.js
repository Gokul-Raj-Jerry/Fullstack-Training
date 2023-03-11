// root file
import ReactDOM from "react-dom/client"; // Virtual DOM
import App from './App'


/* const root = ReactDOM.createRoot(
    document.getElementById('root')
);
const element = <App />;
root.render(element); */


const root = ReactDOM.createRoot(
    document.getElementById('root')
);

function tick() {
    const element = (<App />);
    root.render(element);
}

setInterval(tick, 1);