// main file
import React from "react";
import Home from "./Pages/Home";
import Home2 from './Pages/Home2'
import Tprop from "./Pages/Tprop";

function App() {
    return (
        <>
            <Tprop name='Learning props'/>
            <Home />
            <Home2 />
        </>
    )
}

export default App