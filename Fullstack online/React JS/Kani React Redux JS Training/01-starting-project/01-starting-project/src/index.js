import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";  // Step-4  import Provider
import store from "./Store/storeIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}><App /></Provider>);   // Step-4  Add provider highest component being rendered
// Step-5  Add store as props to provider