// main file
import React from "react";
import Datahandle from "./Data Handling/Datahandle";

function App() {
  const messages = ["React", "Re: React", "Re:Re: React"];
  return (
    <React.StrictMode>
      <Datahandle />
    </React.StrictMode>
  );
}

export default App;
